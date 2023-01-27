import React, { useState, useEffect } from 'react';
import { useInView } from "react-intersection-observer";

import SectionAboutCompany from './SectionAboutCompany';
import SectionDirector from './SectionDirector';
import SectionFaq from './SectionFaq';
import './AboutCompany.css';
function AboutCompany(props) {
    const [activeId, setActiveId] = useState('about_nav_item-1');
    const navs = [
        { id: 'about_nav_item-1', text: "О компании" },
        { id: 'about_nav_item-2', text: "Руководство" },
        { id: 'about_nav_item-3', text: "Почему мы?" }

    ];
    const style_inactive = {
        position: "absolute",
        opacity: 0,
        transition: "all ease .4s"
    }
    const style_active = {
        position: "absolute",
        opacity: 1,
        transition: "all ease .4s"
    }
    const { ref, inView } = useInView({
        /* Optional options */
        rootMargin: '0px',
        threshold: 0.9
    });

    useEffect(() => {
        if (inView) {
            // document.location.replace('/#aboutcompany')
        }

    }, [inView])

    return (
        <section ref={ref} id='aboutcompany' className="aboutcompany-container p-138">
            <div className="aboutcompany-wrapper">
                <div className="aboutcompany-navs">
                    <div className="line-wrappers">
                        <span className="line-short"></span>
                        <span className="line-tall"></span>
                    </div>
                    <div className="line-wrappers">
                        <span className="line-short"></span>
                        <span className="line-tall"></span>
                    </div>
                    <ul>
                        {
                            navs.map((nav) =>
                                <li
                                    key={nav.id}
                                    onClick={() => setActiveId(nav.id)}
                                    id={nav.id}
                                    className={activeId === nav.id ? "about_nav_item active_about_nav_item" : "about_nav_item"}>
                                    {nav.text}
                                </li>
                            )
                        }

                    </ul>
                </div>
                <div className="aboutcompany-content">
                    <div className="line-wrappers">
                        <span className="line-short"></span>
                        <span className="line-tall"></span>
                    </div>
                    <SectionAboutCompany
                        style={activeId === 'about_nav_item-1' ? style_active : style_inactive}
                    />
                    <SectionDirector
                        style={activeId === 'about_nav_item-2' ? style_active : style_inactive}
                    />
                    <SectionFaq
                        style={activeId === 'about_nav_item-3' ? style_active : style_inactive}
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutCompany;