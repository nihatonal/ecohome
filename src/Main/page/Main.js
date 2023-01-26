import React from 'react';

import Hero from '../components/Hero';
import AboutCompany from '../components/aboutcompany/AboutCompany';
import './Main.css';
function Main(props) {
    return (
        <div className="main-container ">
            <Hero />
            <AboutCompany />
        </div>
    );
}

export default Main;