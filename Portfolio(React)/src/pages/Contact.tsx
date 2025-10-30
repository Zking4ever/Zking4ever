import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
            <ContactForm />
            <div className="contact-info">
                <h2>Additional Contact Information</h2>
                <p>Email: yanosastawus@gmail.com</p>
                <p>Phone: (+251) 904-783648</p>
            </div>
        </div>
    );
};

export default Contact;