import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [contactMethod, setContactMethod] = useState('Email');
  const [referrer, setReferrer] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      setError('Name, Email, Subject, and Message are required.');
      return;
    }
    setError('');
    setLoading(true);
    // Simulate async send
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
    setName(''); setEmail(''); setSubject(''); setReferrer(''); setMessage('');
  };

  return (
    <div className="contact-form-wrapper">
      {success && (
        <div className="cf-toast cf-toast--success">
          <span>🎉 Message sent successfully! I'll get back to you soon.</span>
          <button onClick={() => setSuccess(false)} aria-label="Close">
            <IoIosClose size={22} />
          </button>
        </div>
      )}
      {error && (
        <div className="cf-toast cf-toast--error">
          <span>{error}</span>
          <button onClick={() => setError('')} aria-label="Close">
            <IoIosClose size={22} />
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="cf-field">
          <label htmlFor="cf-name">Your Name</label>
          <input
            id="cf-name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="cf-field">
          <label htmlFor="cf-email">Your Email Address</label>
          <input
            id="cf-email"
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="cf-field">
          <label htmlFor="cf-subject">Subject</label>
          <select
            id="cf-subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            required
            className="cf-select"
          >
            <option value="" disabled>Select Subject</option>
            <option value="Web Development">Web Development Project</option>
            <option value="Mobile App">Mobile App Project</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Consulting / General Inquiry">Consulting / General Inquiry</option>
          </select>
        </div>

        <div className="cf-row">
          <div className="cf-field">
            <label>Preferred Contact Method</label>
            <div className="cf-radio-group">
              <label className="cf-radio-label">
                <input
                  type="radio"
                  name="contactMethod"
                  value="Phone"
                  checked={contactMethod === 'Phone'}
                  onChange={() => setContactMethod('Phone')}
                />
                Phone
              </label>
              <label className="cf-radio-label">
                <input
                  type="radio"
                  name="contactMethod"
                  value="Email"
                  checked={contactMethod === 'Email'}
                  onChange={() => setContactMethod('Email')}
                />
                Email
              </label>
            </div>
          </div>
          <div className="cf-field">
            <label htmlFor="cf-referrer">How did you hear about me?</label>
            <input
              id="cf-referrer"
              type="text"
              placeholder="Friends, Social Media, etc."
              value={referrer}
              onChange={e => setReferrer(e.target.value)}
            />
          </div>
        </div>

        <div className="cf-field">
          <label htmlFor="cf-message">Your Message</label>
          <textarea
            id="cf-message"
            rows={5}
            placeholder="Your Project Idea..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="cf-submit-btn" disabled={loading}>
          {loading ? (
            <>
              <span className="cf-spinner" />
              Sending…
            </>
          ) : (
            <>
              <FiSend size={16} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;