import React from 'react';
 import ContactBlock from '../components/UI/ContactForm/ContactBlock';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FaInstagram } from 'react-icons/fa';
import { LuFacebook, LuLinkedin, LuYoutube } from 'react-icons/lu';
import { FiGithub } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';
import { LiaDiscord } from 'react-icons/lia';
import './Contact.css';

const SOCIALS = [
  { icon: <FiGithub size={20} />,           label: 'GitHub',    url: 'https://github.com/Zking4ever' },
  { icon: <LuLinkedin size={20} />,         label: 'LinkedIn',  url: 'https://linkedin.com/in/astawus-amsalu-281048339/' },
  { icon: <MdOutlineEmail size={20} />,     label: 'Email',     url: 'mailto:yanosastawus@gmail.com' },
  { icon: <LiaTelegramPlane size={20} />,   label: 'Telegram',  url: 'https://t.me/astawus12' },
  { icon: <FaInstagram size={20} />,        label: 'Instagram', url: 'https://www.instagram.com/astawusamsalu/' },
  { icon: <LuFacebook size={20} />,         label: 'Facebook',  url: 'https://www.facebook.com/people/Astawus-Amsalu/100085886083713' },
  { icon: <LuYoutube size={20} />,          label: 'YouTube',   url: 'https://www.youtube.com/@astawusamsalu' },
  { icon: <FaXTwitter size={20} />,         label: 'Twitter/X', url: 'https://twitter.com/AstawusAmsalu22' },
  { icon: <LiaDiscord size={20} />,         label: 'Discord',   url: 'https://discordapp.com/users/1435020621816791122' },
];

const Contact: React.FC = () => {
  return (
    <>
      <main className="contact-page">

        {/* Hero */}
        <section className="contact-hero">
          <div className="contact-hero-inner">
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
            <ContactBlock />

            {/* Socials ribbon */}
            <div className="contact-socials-ribbon">
              <h2 className="socials-ribbon-title">Connect With Me</h2>
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
            </div>
          </div>
        </section>

      </main>
    </>
  );
};

export default Contact;