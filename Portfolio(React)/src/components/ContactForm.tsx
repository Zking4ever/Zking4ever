import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !message) {
            setError('All fields are required.');
            return;
        }
        setError('');
        // Simulate form submission
        console.log('Form submitted:', { firstName, lastName, email, message });
        setSuccess(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-form">
            <h2>Contact Me</h2>
            {success && <p className="success-message">Your message has been sent!</p>}
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit} className='contact-form'>
                <div className='contact-name-container'>
                    <div className='contact-name'>
                        <label htmlFor="firstname">First name</label>
                        <input
                            type="text"
                            id="firstname"
                            value={firstName}
                            placeholder='Raheb'
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className='contact-name'>
                        <label htmlFor="lastname">Last name</label>
                        <input
                            type="text"
                            id="lastname"
                            placeholder='Zewde'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className='contact-email'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder='rahebzewde@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='contact-message'>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        placeholder='Your message here...'
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button className='contact-submit' type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;