import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from 'react'
import * as styles from './SlideSection.module.scss'

const slides = [
    {
        title: 'Your Full-Service Digital Marketing Agency for Accelerated Business Growth',
        Desc: '<p>Our full-service internet marketing agency gives you the advantages of an in-house marketing team without the time and cost associated with hiring individual team members. We partner with your company to ensure you have the services you need when you need them.</p> <p>Whether you are a new company that requires help introducing your brand to your audience or an established business looking to overhaul your image, JDB2M offers a complete range of services to meet your needs. This includes brand development, growth strategies, content development, social media management, and much more. </p>'
    },
    {
        title: 'Our Commitment to Proven Strategies and Innovation',
        Desc: '<p>JDB2M&apos;s extensive experience in the industry allows us to combine proven strategies with the newest approaches to social media, content marketing, SEO, and web development. Unlike many other marketing agencies, our team of marketing experts continuously updates our knowledge and skills to ensure we use your business&apos;s best and most current strategies. No matter your marketing and branding goals, our team is here to help you meet them. </p>'
    },
    {
        title: 'Your success measures our success',
        Desc: '<p>With over a decade as a digital marketing agency, we have helped hundreds of clients achieve and surpass their business goals. We take pride in offering comprehensive marketing services that have helped our clients grow their businesses while continuously expanding our offerings.</p>'
    },
    {
        title: 'We Manage Your Marketing so that You Can Manage Your Business',
        Desc: '<p>Though marketing is a critical tool for success, its importance is often underestimated. Companies struggling to gain new customers will frequently focus on unsuccessful sales promotions, unnecessary product changes, and a variety of other ineffective measures.</p> <p>Why don&apos;t these things work? Because your potential customers never see your efforts. Marketing is necessary to reach your customers, but it is often difficult to identify which marketing strategy will work for your business.</p> <p>As a dedicated, full-service digital marketing agency, we have the tools, experience, and resources to identify the best methods to reach your audience and develop your brand. We work to grow your audience so you can concentrate on serving your customers better.</p>'
    },
]

const SlideSection = () => {

    let length = slides.length;
    const lengthString = length.toString();

    const [selected, setSelected] = useState(0);
    function Plus(){
      if(selected >= slides.length - 1){
        setSelected(0);
      }else{
        setSelected(selected + 1);
      }
    }
    function Minus(){
      if(selected <= 0){
        setSelected(slides.length - 1);
      }else{
        setSelected(selected - 1);
      }
    }
  
    return (
      <div className={styles.SlideSection}>
        <div className={styles.slideCounter}>
          <div className={styles.slideNumbers}>
            <h3 className={styles.currentSlideNumber}>{selected + 1}</h3>
            <div className={styles.totalCounter}>
              <span>
                0{selected + 1} {<div className={styles.line}>____</div>} {lengthString.padStart(2, "0")}
              </span>
            </div>
          </div>
  
          <div className={styles.mainSLider}>
            <StaticImage src="../../../images/slider-dummy.jpg" alt="A dinosaur" />
          </div>
        </div>
  
        <div className={styles.slideContent}>
          <div
            className={styles.contentContainer}
          >
            <div className={styles.content}>
              <h3>
                {slides[selected].title}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: slides[selected].Desc }} />
            </div>
            <div className={styles.sliderNav}>
              <div className={styles.buttonGrid}>
                <button aria-label="Previous Slide"
                  onClick={() => Minus()}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button aria-label="Next Slide"
                  onClick={() => Plus()}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default SlideSection
