const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const CreateAllRedirects = require( './src/redirects' );
const createCategory = require("./createPage/createCategory");

exports.createPagesStatefully = async ({ graphql, actions, reporter }) => {
  await createCategory({ actions, graphql, reporter });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const {
    data: {
      allWpPost: { nodes: allPosts },
      allWpTag: { nodes: allWpTag },
      allWpEquipment: { nodes: allEquipment },
      allWpEquipmentDetail: { nodes: allEquipmentDetail },
      allWpService: { nodes: allService },
      allWpSimple: { nodes: allSimple },
      allWpContact: { nodes: allContact },
    },
  } = await graphql(`
    query {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          id
          slug
          status
          uri
        }
      }
      allWpTag(sort: {fields: contentNodes___nodes___date, order: DESC}) {
        nodes {
          id
          slug
          uri
          name
        }
      }
      allWpEquipment: allWpPage(
        filter: { template: { templateName: { eq: "Equipment Page" } } }
      ) {
        nodes {
          id
          uri
        }
      }
      allWpEquipmentDetail: allWpPage(
        filter: { template: { templateName: { eq: "Equipment Details" } } }
      ) {
        nodes {
          id
          uri
        }
      }
      allWpService: allWpPage(
        filter: { template: { templateName: { eq: "Services Page" } } }
      ) {
        nodes {
          id
          uri
        }
      }
      allWpSimple: allWpPage(
        filter: { template: { templateName: { eq: "Simple Page" } } }
      ) {
        nodes {
          id
          uri
        }
      }
      allWpContact: allWpPage(
        filter: { template: { templateName: { eq: "Contact Us" } } }
      ) {
        nodes {
          id
          uri
        }
      }
    }
  `)

  const postsPerPage = 10
  const totalPages = Math.ceil(allPosts.length / postsPerPage)
  Array.from({ length: totalPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/page/${i + 1}/`,
      component: path.resolve(`src/templates/blog.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        totalPages,
        currentPage: i + 1,
      },
    })
  })

  allPosts.forEach(post => {
    createPage({
      path: post.uri,
      component: path.resolve(`src/templates/post.js`),
      context: {
        id: post.id,
      },
    })
  })

  allWpTag.forEach(post => {
    createPage({
      path: post.uri,
      component: path.resolve(`src/templates/tags.js`),
      context: {
        id: post.id,
      },
    })
  })

  allEquipment.forEach(equip => {
    const { id, uri } = equip
    createPage({
      path: `${uri}`,
      component: path.resolve(`src/templates/equipment.js`),
      context: { id },
    })
  })

  allEquipmentDetail.forEach(equipDetail => {
    const { id, uri } = equipDetail
    createPage({
      path: `${uri}`,
      component: path.resolve(`src/templates/equipmentDetail.js`),
      context: { id },
    })
  })

  allService.forEach(service => {
    const { id, uri } = service
    createPage({
      path: `${uri}`,
      component: path.resolve(`src/templates/service.js`),
      context: { id },
    })
  })

  allSimple.forEach(service => {
    const { id, uri } = service
    createPage({
      path: `${uri}`,
      component: path.resolve(`src/templates/simplepage.js`),
      context: { id },
    })
  })

  allContact.forEach(service => {
    const { id, uri } = service
    createPage({
      path: `${uri}`,
      component: path.resolve(`src/templates/contact-us.js`),
      context: { id },
    })
  })

  // Redirect pages

  await CreateAllRedirects( { actions } );

}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
