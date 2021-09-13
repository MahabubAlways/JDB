import React from 'react'
import ContactPage from '../components/ContactPage'
import Layouts from '../components/Layouts'

const ContactUs = () => {
    return (
        <Layouts path={"/contact-us"} title={"Contact Us"} description={""}>
            <ContactPage />
        </Layouts>
    )
}

export default ContactUs
