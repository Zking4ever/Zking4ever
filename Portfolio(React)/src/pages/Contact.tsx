import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/UI/ContactForm/ContactForm';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FaInstagram } from 'react-icons/fa';
import { LuFacebook, LuLinkedin, LuYoutube } from 'react-icons/lu';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { LiaDiscord } from 'react-icons/lia';
import './Contact.css';

const SOCIALS = [
  { icon: <FiGithub size={22} />,           label: 'GitHub',    url: 'https://github.com/Zking4ever' },
  { icon: <LuLinkedin size={22} />,         label: 'LinkedIn',  url: 'https://linkedin.com/in/astawus-amsalu-281048339/' },
  { icon: <MdOutlineEmail size={22} />,     label: 'Email',     url: 'mailto:yanosastawus@gmail.com' },
  { icon: <LiaTelegramPlane size={22} />,   label: 'Telegram',  url: 'https://t.me/astawus12' },
  { icon: <FaInstagram size={22} />,        label: 'Instagram', url: 'https://www.instagram.com/astawusamsalu/' },
  { icon: <LuFacebook size={22} />,         label: 'Facebook',  url: 'https://www.facebook.com/people/Astawus-Amsalu/100085886083713' },
  { icon: <LuYoutube size={22} />,          label: 'YouTube',   url: 'https://www.youtube.com/@astawusamsalu' },
  { icon: <FaXTwitter size={22} />,         label: 'Twitter/X', url: 'https://twitter.com/AstawusAmsalu22' },
  { icon: <LiaDiscord size={22} />,         label: 'Discord',   url: 'https://discordapp.com/users/1435020621816791122' },
];

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className="contact-page">

        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-hero-inner">
            <p className="section-label">Get In Touch</p>
            <h1 className="contact-title">
              Let's Build Something <span className="gradient-text">Together</span>
            </h1>
            <p className="contact-subtitle">
              Have a project idea, a question, or just want to say hi?
              My inbox is always open — I'll do my best to reply promptly.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="contact-body">
          <div className="contact-body-inner">

            {/* Form */}
            <div className="contact-form-col">
              <div className="contact-card">
                <h2 className="contact-card-title">Send a Message</h2>
                <p className="contact-card-desc">Fill in the form and I'll get back to you within 24 hours.</p>
                <ContactForm />
              </div>
            </div>

            {/* Info + Socials */}
            <div className="contact-info-col">
              <div className="contact-card contact-info-card">
                <h2 className="contact-card-title">Connect With Me</h2>
                <p className="contact-card-desc">Find me on any of these platforms.</p>

                <div className="contact-socials-grid">
                  {SOCIALS.map(s => (
                    <a
                      key={s.label}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-item"
                      title={s.label}
                    >
                      <span className="social-icon">{s.icon}</span>
                      <span className="social-label">{s.label}</span>
                    </a>
                  ))}
                </div>

                {/* Quick facts */}
                <div className="contact-facts">
                  <div className="contact-fact">
                    <span className="fact-icon">⚡</span>
                    <div>
                      <strong>Response Time</strong>
                      <span>Within 24 hours</span>
                    </div>
                  </div>
                  <div className="contact-fact">
                    <span className="fact-icon">🌍</span>
                    <div>
                      <strong>Location</strong>
                      <span>Addis Ababa, Ethiopia</span>
                    </div>
                  </div>
                  <div className="contact-fact">
                    <span className="fact-icon">🟢</span>
                    <div>
                      <strong>Status</strong>
                      <span>Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  );
};

export default Contact;