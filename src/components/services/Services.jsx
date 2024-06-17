// Services.js
import React from 'react';
import './Services.css';
import { FaQuestionCircle, FaMoneyCheckAlt, FaHandshake } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="services">
            <div className="service">
                <FaQuestionCircle className="icon" />
                <h2>24x7 Doubt</h2>
                <p>Get your doubts cleared anytime, anywhere by our expert mentors.</p>
            </div>
            <div className="service">
                <FaMoneyCheckAlt className="icon" />
                <h2>EMI Payments</h2>
                <p>Pay for your course conveniently with easy EMI options.</p>
            </div>
            <div className="service">
                <FaHandshake className="icon" />
                <h2>Placement Support</h2>
                <p>Receive assistance in securing placements after completing your course.</p>
            </div>
        </div>
    );
};

export default Services;
