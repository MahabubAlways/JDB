import { Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
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
];

const AccordionElement = () => {
    const [Selected, setSelected] = useState(0)
    const panelrefs = useRef([]);
    const btnrefs = useRef([]);

    function handleToggle (i) {
        panelrefs.current.map(item => item.style.maxHeight = 0)
        panelrefs.current[i].style.maxHeight = `${panelrefs.current[i].scrollHeight}px`;
        btnrefs.current.map(item => item.setAttribute("aria-expanded", "false"))
        btnrefs.current[i].setAttribute("aria-expanded", "true");
    };

    useEffect(() => {
        panelrefs.current[0].style.maxHeight = `${panelrefs.current[0].scrollHeight}px`;
        btnrefs.current[0].setAttribute("aria-expanded", "true");
    }, [])

    return (
        <div className={styles.FaqAccordion}>
            <h2>Services</h2>
            <div>
                {content.map((item, index) => (
                        <div key={index} className={styles.strategyaccordionitem}>
                            <div className={styles.accordionHeading}>
                                <button className={`${styles.accordionButton}`} onClick={() => handleToggle(index)} ref={ref => btnrefs.current.push(ref)}>
                                    {item.question}
                                </button>
                            </div>
                            <div className={`${styles.panel}`} ref={ref => panelrefs.current.push(ref)}>
                                <div className={styles.accordionAnswer} dangerouslySetInnerHTML={{ __html: item.answer }} />
                            </div>
                        </div>
                ))}
            </div>
            <div className={styles.btnContainer}>
                <Link to="/" className={`btnBlack ${styles.btn}`}>See More</Link>
            </div>
        </div>
    )
}

export default AccordionElement
