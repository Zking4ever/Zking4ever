import React from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import { LiaTelegramPlane } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { LuYoutube } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { LiaDiscord } from "react-icons/lia";


const Contact: React.FC = () => {
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <div className='contact-page-box'>
                <div className='form-container'>
                    <p>If you have any questions or would like to get in touch, please fill out the form below:</p>
                    <ContactForm />
                </div>
                <div className="socials-container">
                    <h4>Or</h4>
                    <div className="socials">
                        <LiaTelegramPlane size={40} style={{margin:'10px'}} onClick={()=>window.open('https://t.me/astawus12','_blank')}/>
                        <FaInstagram size={40} style={{margin:'10px'}} onClick={()=>window.open('https://www.instagram.com/astawusamsalu/','_blank')}/>
                        <LuFacebook size={40} style={{margin:'10px'}} onClick={()=>window.open('https://www.facebook.com/people/Astawus-Amsalu/100085886083713','_blank')}/>
                        <LuLinkedin size={40} style={{margin:'10px'}} onClick={()=>window.open('https://linkedin.com/in/astawus-amsalu-281048339/','_blank')}/>
                        <FiGithub size={40} style={{margin:'10px'}} onClick={()=>window.open('https://github.com/Zking4ever','_blank')}/>
                        <MdOutlineEmail size={40} style={{margin:'10px'}} onClick={()=>window.open('mailto: yanosastawus@gmail.com','_blank')}/>
                        <LuYoutube size={40} style={{margin:'10px'}} onClick={()=>window.open('https://www.youtube.com/@astawusamsalu','_blank')}/>
                        <FaXTwitter size={40} style={{margin:'10px'}} onClick={()=>window.open('https://twitter.com/AstawusAmsalu22','_blank')}/>
                        <LiaDiscord size={40} style={{margin:'10px'}} onClick={()=>window.open('https://discordapp.com/users/1435020621816791122','_blank')}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;