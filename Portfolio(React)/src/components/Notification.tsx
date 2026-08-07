import { useState, useEffect } from 'react'
import { BsX  } from "react-icons/bs";


export default function Notification({msg, linkMsg, link} : {msg: string, linkMsg: string, link: string}) {

    const [show, setShow] = useState(localStorage.getItem('dontShowNotice') ? false : true);
    const dontShowAgain = localStorage.getItem('dontShowNotice');

    useEffect(() => {
        if( !show ) return;
        const timer = setTimeout(() => {
            setShow(false);
        }, 10000); 

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if( dontShowAgain ) {
                setShow(false);
                console.log(linkMsg, link); //just for thier use, to avoid the warning of unused variables
                return;
            }
            if (window.scrollY > 50) {
                setShow(false);
            } else {
                setShow(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [show]);

    const handleClose = () => {
        setShow(false);
    }

    // const handleDontShowAgain = () => {
    //     setShow(false);
    //     localStorage.setItem('dontShowNotice', 'true');
    // }

    return (
        <div className={`notification ${show ? 'open' : ''}`}>
            <div className="notification-header"> <span>Notice</span> <BsX onClick={handleClose} /></div>
            <div className="notification-content">
                <p>{msg}
                {/* <br />   <span onClick={handleDontShowAgain} style={{ textDecoration: 'underline', cursor: 'pointer', fontSize: '0.9rem' }}>Don't Show Again</span> */}
                <br />   <span style={{ textDecoration: 'underline', cursor: 'pointer', fontSize: '0.9rem' }}> Come back soon!</span>
                </p>
                {/* <a href={new URL(link, window.location.origin).href}> {linkMsg}</a> */}
      </div>
    </div>
  )
}
