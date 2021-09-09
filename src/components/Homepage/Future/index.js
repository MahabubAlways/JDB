import { graphql } from 'gatsby';
import React from 'react';
import * as styles from './future.module.scss';

export const fragment = graphql`
  fragment Future on WpPage_Postfields_Sections_HomeFuture {
    content
    fieldGroupName
  }
`;

const Future = ({data}) => {
    return (
        <div className={styles.future} dangerouslySetInnerHTML={{ __html: data.content }} />
    )
}

export default Future
