import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { graphql, Link } from "gatsby"
import React from 'react'
import * as styles from './services.module.scss'

export const fragment = graphql`
  fragment HomeServices on WpPage_Postfields_Sections_HomeServices {
    fieldGroupName
    services {
      content
      url
    }
  }
`;

const HomeServices = ({data}) => {
    const {services} = data

    return (
        <div className={styles.services}>
            {
                services.map((item, index) => {
                    return(
                        <div key={index} className={styles.service}>
                            <div className={styles.content} dangerouslySetInnerHTML={{ __html: item.content }} />
                            <div className={styles.btnContainer}>
                                <Link to={item.url} className={styles.btn}>
                                    <FontAwesomeIcon className={styles.faChevronRight} icon={faChevronRight} />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default HomeServices
