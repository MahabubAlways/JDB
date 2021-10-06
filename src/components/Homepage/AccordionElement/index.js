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
            '<p>Put your company&apos;s best foot forward in front of customers with our B2C growth services. From brand development to marketing plans and crisis management, we help you grow your business now while preparing you for the future.</p>',
        uuid: '1',
        status: false,
    },
    {
        question: 'Integrated Business Development',
        answer:
            '<p>Integrated business development is the foundation for the long-term growth of your company. Identify new development opportunities, strategize marketing plans, and integrate portfolio management.</p>',
        uuid: '2',
        status: false,
    },
    {
        question: 'Brand Development',
        answer:
            '<p>Make your company&apos;s products or services stand out from the competition with professional brand development. </p>',
        uuid: '3',
        status: false,
    },
    {
        question: 'Growth Strategies',
        answer:
            '<p>Accomplish long-term goals by expanding your market share with proven growth strategies. Advance into new markets, grow market share in existing markets, and develop product strategies to appeal to your customers.</p>',
        uuid: '4',
        status: false,
    },
    {
        question: 'Reputation Management',
        answer:
            '<p>Your company&apos;s reputation is an important asset that can make or break your business. With Reputation management, we can grow your social media audience, repair a damaged reputation, and proactively work to keep your company in good standing with your customers.</p>',
        uuid: '5',
        status: false,
    },
    {
        question: 'Crisis Management',
        answer:
            '<p>We help to identify potential crises before they happen and prepare your company to change course as needed.</p>',
        uuid: '6',
        status: false,
    }
]
// preExpanded={['1']}
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
