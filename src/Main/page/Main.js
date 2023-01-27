import React, { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import AboutCompany from '../components/aboutcompany/AboutCompany';
import SectionProfit from '../components/SectionProfit';
import SectionProjects from '../components/SectionProjects';
import './Main.css';
function Main(props) {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    if (scrollPosition === 0) {
        setTimeout(() => {
            document.location.replace('/#')
        }, 100)

    }
    return (
        <div className="main-container ">
            <Hero />
            <AboutCompany />
            <SectionProfit />
            <SectionProjects />
        </div>
    );
}

export default Main;