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
                <p>Email: example@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
    );
};

export default Contact;