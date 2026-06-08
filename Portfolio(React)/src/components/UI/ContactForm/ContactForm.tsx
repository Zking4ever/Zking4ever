import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [email,     setEmail]     = useState('');
  const [message,   setMessage]   = useState('');
  const [error,     setError]     = useState('');
  const [success,   setSuccess]   = useState(false);
  const [loading,   setLoading]   = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setLoading(true);
    // Simulate async send
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSuccess(true);
    setFirstName(''); setLastName(''); setEmail(''); setMessage('');
  };

  return (
    <div className="contact-form-wrapper">
      {success && (
        <div className="cf-toast cf-toast--success">
          <span>🎉 Message sent! I'll get back to you soon.</span>
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
        <div className="cf-row">
          <div className="cf-field">
            <label htmlFor="cf-firstname">First Name</label>
            <input
              id="cf-firstname"
              type="text"
              placeholder="Raheb"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="cf-field">
            <label htmlFor="cf-lastname">Last Name</label>
            <input
              id="cf-lastname"
              type="text"
              placeholder="Zewde"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="cf-field">
          <label htmlFor="cf-email">Email Address</label>
          <input
            id="cf-email"
            type="email"
            placeholder="rahebzewde@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="cf-field">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            rows={6}
            placeholder="Tell me about your project or just say hello..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary cf-submit" disabled={loading}>
          {loading ? (
            <>
              <span className="cf-spinner" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M10 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;