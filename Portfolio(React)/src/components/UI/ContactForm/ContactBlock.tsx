import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import './ContactBlock.css';

const ContactBlock: React.FC = () => {
  return (
    <div className="contact-block-container">
      <div className="contact-block-inner">
        {/* Info Column */}
        <div className="contact-info-column">
          <h2 className="contact-info-title">Get in Touch</h2>
          <p className="contact-info-subtitle">
            Feel free to reach out! Whether you want to discuss a project, collaborate, or just say hello, drop a message and I'll get back to you shortly.
          </p>

          <div className="contact-details-list">
            {/* Location Fact */}
            <div className="contact-detail-item">
              <div className="detail-icon-wrapper detail-icon-wrapper--location">
                <FiMapPin size={20} />
              </div>
              <div className="detail-text-wrapper">
                <span className="detail-label">Location</span>
                <span className="detail-value">Ethiopia</span>
              </div>
            </div>

            {/* Email Fact */}
            <div className="contact-detail-item">
              <div className="detail-icon-wrapper detail-icon-wrapper--email">
                <FiMail size={20} />
              </div>
              <div className="detail-text-wrapper">
                <span className="detail-label">Email</span>
                <a href="mailto:yanosastawus@gmail.com" className="detail-value detail-value--link">
                  yanosastawus@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Fact */}
            <div className="contact-detail-item">
              <div className="detail-icon-wrapper detail-icon-wrapper--phone">
                <FiPhone size={20} />
              </div>
              <div className="detail-text-wrapper">
                <span className="detail-label">Phone</span>
                <span className="detail-value">+251 904783648</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-column">
          <div className="contact-form-card">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock;
