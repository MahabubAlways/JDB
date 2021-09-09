import { graphql, navigate } from "gatsby";
import React, { useState } from 'react';
import * as styles from './GetInTouch.module.scss';

export const fragment = graphql`
  fragment GetInTouch on WpPage_Postfields_Sections_HomeContact {
    fieldGroupName
    title
  }
`;

const GetInTouch = ({data}) => {
        const [state, setState] = useState({});
        const [message, setMessage] = useState('');
        const [status, setStatus] = useState(false);

        const handleChange = (e) => {
            setState({ ...state, [e.target.name]: e.target.value })
        }

        function handleStatus(status, message) {
            setStatus(false);
            setMessage('');
            setTimeout(() => {
                setStatus(status);
                setMessage(message);
              }, 1000)
        }
    
        const handleSubmit = (e) => {
          e.preventDefault()
          const form = e.target
          let formData = new FormData(form)
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
          })
            .then(() => navigate("/thank-you/"))
            .catch((error) => handleStatus(true, error))
        }
        
        return (
            <div id="contactForm" className={styles.GetInTouch}>
                <h2>{data.title}</h2>
                <form  method="POST" name="contact" data-netlify="true" onSubmit={handleSubmit}>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="name">Name</label>
                        <input className={styles.input} onBlur={handleChange} type="text" name="name" id="name" required />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={styles.inputLabel} htmlFor="email">Email</label>
                        <input className={styles.input} onBlur={handleChange} type="email" name="email" id="email" required />
                    </div>
                    <div className={styles.inputContainer}>
                        <label className={`${styles.inputLabel} ${styles.textareaLabel}`} htmlFor="comment">Message</label>
                        <textarea className={styles.textarea}  rows="8" cols="20" name="comment" id="comment" onBlur={handleChange} required />
                    </div>
                    
                    { status && <div>
                            {message}
                        </div>
                    }
                    <button type="submit">
                        Send
                    </button>
                </form>
            </div>
        )
}

export default GetInTouch
