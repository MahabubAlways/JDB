import React from 'react'
import * as styles from './SimpleContent.module.scss'

const SimpleContent = ({title, desc, dark}) => {
    return (
      <div className={`${styles.section} ${dark ? styles.dark : ''}`}>
          <div className={styles.SimpleContent}>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
      </div>
    )
}

export default SimpleContent
