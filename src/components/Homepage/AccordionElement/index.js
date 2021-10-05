import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from 'react-accessible-accordion';
import * as styles from './accordion.module.scss';

const content = [
    {
        question: 'B2C Growth Services',
        answer:
            '<p>Put your company&apos;s best foot forward in front of customers with our B2C growth services. From brand development to marketing plans and crisis management, we help you grow your business now while preparing you for the future.</p> <h3>Integrated Business Development</h3><p>Integrated business development is the foundation for the long-term growth of your company. Identify new development opportunities, strategize marketing plans, and integrate portfolio management.</p><h3>Brand Development</h3> <p>Make your company&apos;s products or services stand out from the competition with professional brand development. </p><h3>Growth Strategies</h3><p>Accomplish long-term goals by expanding your market share with proven growth strategies. Advance into new markets, grow market share in existing markets, and develop product strategies to appeal to your customers. </p><h3>Reputation Management </h3><p>Your company&apos;s reputation is an important asset that can make or break your business. With Reputation management, we can grow your social media audience, repair a damaged reputation, and proactively work to keep your company in good standing with your customers.</p><h3>Crisis Management</h3><p>We help to identify potential crises before they happen and prepare your company to change course as needed.</p>',
        uuid: '1',
        status: false,
    },
    {
        question: 'Marketing And Creative Services (B2B and B2C) ',
        answer:
            '<p>Everything you need to get your brand seen and look good doing it. We create and manage your visual and written content to present a polished, cohesive brand image. </p><h3>Social Media Management </h3><p>We analyze, develop, and manage your social media presence, including content optimization, user engagement, and graphics. </p><h3>SEO/SEM</h3><p>We develop SEO/SEM strategies to help you accomplish your goals with web marketing, web analytics, content strategy planning, link building, and keyword optimization.</p><h3>Paid Media</h3><p>Increase lead generation and reach new audiences with paid media. We develop and manage your paid media campaigns for optimal ROI. </p><h3>Brand Positioning</h3><p>Differentiate your brand and target different audiences with brand positioning. </p><h3>Content Development</h3><p>We develop your content strategy and create content that aligns with your company&apos;s brand and values. </p>',
        uuid: '2',
        status: false,
    },
    {
        question: 'Design and Creative',
        answer:
            '<p>Strengthen your brand&apos;s image with professionally produced logos, brand guides, and other expertly crafted content.</p><h3>Video Production Services</h3><p>Increase engagement with professional scripted, filmed, acted and produced videos for your brand.</p>',
        uuid: '3',
        status: false,
    },
    {
        question: 'Development White-Label and B2C',
        answer:
            '<p>Even the best product or service can be unsuccessful if customers can&apos;t successfully use the company&apos;s website. We create websites, mobile apps, and software that optimize the user experience and aesthetics with professional development services. </p><h3>Web Development</h3><p>We build and maintain your website from the ground up to ensure the best user experience. </p><h3>App Development</h3><p>Our custom apps are scalable, flexible, and tailored to your business and help you reach your business goals. </p><h3>Software Development </h3><p>We develop custom software for your business to engage with your customers, clients, and employees. </p>',
        uuid: '4',
        status: false,
    }
]

const AccordionElement = () => {
    return (
        <div className={styles.FaqAccordion}>
            <h2>Services</h2>
            <Accordion preExpanded={['1']} allowMultipleExpanded={false}>
                {content.map(({ question, answer, uuid, status }) => (
                        <AccordionItem uuid={uuid} key={uuid} className={styles.strategyaccordionitem}>
                            <AccordionItemHeading className={styles.accordionHeading}>
                                <AccordionItemButton className={styles.accordionButton}>
                                    {question}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel className={styles.panel}>
                                <div className={styles.accordionAnswer} dangerouslySetInnerHTML={{ __html: answer }} />
                            </AccordionItemPanel>
                        </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default AccordionElement
