import React, { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import { ReactSVG } from 'react-svg';
import Slider from '../../shared/UI/Slider';
import SliderMobile from '../../shared/UI/SliderMobile';
import { Houses_data } from '../../assets/Houses_data';
import arrow from '../../assets/icons/right_arrow.svg'
import './SectionProjects.css';
function SectionProjects(props) {

    const { ref, inView } = useInView({
        /* Optional options */
        rootMargin: '0px',
        threshold: 0.9
    });
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    useEffect(() => {
        if (inView) {
            // document.location.replace('/#works')
        }
    }, [inView])
    return (
        <div ref={ref} id='works' className="section-projects">
            <h3 className="section-title">Наши проекты</h3>
            {windowSize[0] > 600 ? <Slider slides={Houses_data} /> : <SliderMobile slides={Houses_data} />}

            <button className="all-works-btn">
                <ReactSVG src={arrow} />
                Смотреть все проекты
            </button>
        </div>
    );
}

export default SectionProjects;