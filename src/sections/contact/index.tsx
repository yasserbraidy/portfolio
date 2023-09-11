import ContactForm from '../../components/ContactForm';
import SocialLinks from '../../components/SocialLinks';
import { icons } from '../../components/icons';
import './styles/index.css';
import React from 'react';
export default function Contact() {
    return (
        <>
        
<div className="container">

    <div className="section-title">
    <h2>Contact</h2>
    <p>Contact Me</p>
    </div>

    <div className="row mt-2">

    <div className="col-md-6 d-flex align-items-stretch">
        <div className="info-box">
            <i>{icons.location}</i>
            <h3>My Address</h3>
            <p>Beirut, Lebanon</p>
        </div>
    </div>

    <div className="col-md-6 mt-4 mt-md-0 d-flex align-items-stretch">
        <div className="info-box">
            <i>{icons.share}</i>
            <h3>Social Profiles</h3>
            <SocialLinks />
        </div>
    </div>

    <div className="col-md-6 mt-4 d-flex align-items-stretch">
        <div className="info-box">
            <i>{icons.mail}</i>
            <h3>Email Me</h3>
            <p>yasser.braidy@gmail.com</p>
        </div>
    </div>
    <div className="col-md-6 mt-4 d-flex align-items-stretch">
        <div className="info-box">
            <i>{icons.phoneCall}</i>
            <h3>Call Me</h3>
            <p>+961 76 780 817</p>
        </div>
    </div>
    </div>

    <ContactForm />

</div>
        </>
    )
}