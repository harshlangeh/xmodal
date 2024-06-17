// Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {

    const handleButtonClick = () => {
        window.open('https://rzp.io/l/LCos1j3', '_blank');
    };

    return (
        <div className="hero">
            <h1>Master ChatGPT & 20+ AI Tools in Just 3 hours</h1>
            <p>Upskill to Grow in your Job or Business, Automate Reports & Tasks</p>
            <ul>
                <li>❌ No Coding or Tech knowledge required</li>
                <li>✅ Generate Passive income, Let AI do the work</li>
                <li>✅ Save 3 hours daily</li>
                <li>✅ Get Certified by GrowthSchool</li>
            </ul>
            <button className="cta-button" onClick={handleButtonClick}>
                Get Started Now
            </button>
        </div>
    );
};

export default Hero;
