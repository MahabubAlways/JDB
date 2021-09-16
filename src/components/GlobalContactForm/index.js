import { navigate } from "gatsby";
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import * as styles from './GlobalContactForm.module.scss';

const GlobalContactForm = ({border, label, fullWidthInput, BudgetField, ServiceField}) => {
    const [state, setState] = useState({});
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(false);
    const [NumValue, setNumValue] = useState();
    
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
        <div className={styles.GlobalContactForm}>
            <form className={border ? styles.border : ''} method="POST" name="contact" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                <div className={styles.inputContainer}>
                    {label ? <label className={styles.inputLabel} htmlFor="name">Name</label> : ''}
                    <input className={`${styles.input} ${fullWidthInput? styles.fullWidthInput : ''}`}  onBlur={handleChange} type="text" name="name" id="name" placeholder={fullWidthInput? 'Name' : ''} required />
                </div>

                <div className={`${styles.inputContainer} ${styles.PhninputContainer}`}>
                    {label ? <label className={styles.inputLabel} htmlFor="Phone">Phone</label> : ''}
                    <PhoneInput
                        className={`${styles.input} ${fullWidthInput? styles.fullWidthInput : ''}`}
                        international 
                        countryCallingCodeEditable={false} 
                        defaultCountry="CA"
                        value={NumValue}
                        onChange={setNumValue}
                        placeholder={fullWidthInput? 'Phone' : ''}
                        name="Phone"
                        required={true}
                    />
                </div>

                <div className={styles.inputContainer}>
                    {label ? <label className={styles.inputLabel} htmlFor="email">Email</label> : ''}
                    <input className={`${styles.input} ${fullWidthInput? styles.fullWidthInput : ''}`}  onBlur={handleChange} type="email" name="email" id="email" placeholder={fullWidthInput? 'Email' : ''} required />
                </div>

                <div className={`${styles.inputContainer} ${!BudgetField ? styles.inputNone : ''}`}>
                    {label ? <label className={styles.inputLabel} htmlFor="budget">Budget</label> : ''}
                    <select className={`${styles.input} ${styles.inputSelect} ${fullWidthInput? styles.fullWidthInput : ''}`} name="budget" id="budget" onBlur={handleChange} required={BudgetField ? true : false}>
                        <option>{fullWidthInput? 'Monthly marketing budget' : ''}</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 +">$50,000 +</option>
                    </select>
                </div>

                <div className={`${styles.inputContainer} ${!ServiceField ? styles.inputNone : ''}`}>
                    {label ? <label className={styles.inputLabel} htmlFor="service">Service</label> : ''}
                    <select className={`${styles.input} ${styles.inputSelect} ${fullWidthInput? styles.fullWidthInput : ''}`} name="service" id="service" onBlur={handleChange} required={ServiceField ? true : false}>
                        <option className="placeholder">{fullWidthInput? 'Select a service' : ''}</option>
                        <option value="Web Development">Web Development</option>
                        <option value="SEO">SEO</option>
                    </select>
                </div>

                <div className={styles.inputContainer}>
                    {label ? <label className={`${styles.inputLabel} ${styles.textareaLabel}`} htmlFor="comment">Message</label> : ''}
                    <textarea className={`${styles.textarea} ${fullWidthInput? styles.fullWidthInput : ''}`}  rows="8" cols="20" name="comment" id="comment" onBlur={handleChange} placeholder={fullWidthInput? 'Message' : ''} required />
                </div>
                    
                { status && <div>
                        {message}
                    </div>
                }
                <button type="submit" className="btnBlack">
                    Send
                </button>
            </form>
        </div>
    )
}

export default GlobalContactForm
