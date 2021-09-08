import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from 'react';
import * as styles from './ImageContent.module.scss';

const ImageContent = ({title, content, image, BGBlack, ImgLeft}) => {
    return (
        <div className={`${styles.ImageContent} ${ImgLeft ? styles.ImgLeft : ''}`}>
            <div className={`${styles.ContentContainer} ${BGBlack === true ? styles.black : ''}`}>
                <div className={styles.Content}>
                    <h2>{title}</h2>
                    <p>{content}</p>
                </div>
                <div>
                    <Link to="/" className={styles.seeBtn}>See More</Link>
                </div>
            </div>
            <div className={styles.ImageContainer}>
                <GatsbyImage className={styles.Image} image={getImage(image)} alt="Trusted Partner" />
            </div>
        </div>
    )
}

export default ImageContent
