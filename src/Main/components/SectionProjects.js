import React, { useEffect } from 'react';
import { useInView } from "react-intersection-observer";
import Slider from '../../shared/UI/Slider';
import { Houses_data } from '../../assets/Houses_data'
import './SectionProjects.css';
function SectionProjects(props) {

    const { ref, inView } = useInView({
        /* Optional options */
        rootMargin: '0px',
        threshold: 0.9
    });

    useEffect(() => {
        if (inView) {
            document.location.replace('/#works')
        }

    }, [inView])
    return (
        <div ref={ref} id='works' className="section-projects">
            <Slider slides={Houses_data} />
        </div>
    );
}

export default SectionProjects;