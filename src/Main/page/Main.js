import React, { useEffect, useState } from 'react';

import Hero from '../components/Hero';
import AboutCompany from '../components/aboutcompany/AboutCompany';
import SectionProfit from '../components/SectionProfit';
import SectionProjects from '../components/SectionProjects';
import ArgumentOfHouse from '../components/ArgumentOfHouse';
import Construction from '../components/Construction';
import CreateHouse from '../components/createHouse/CreateHouse';
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
            <ArgumentOfHouse />
            <Construction />
            <CreateHouse />
        </div>
    );
}

export default Main;