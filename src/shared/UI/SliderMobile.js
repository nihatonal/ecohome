import React, { useState, useRef, useEffect, useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { CartContext } from '../context/CartContext';
import arrow from '../../assets/icons/right_arrow.svg';
import HouseCard from '../../shared/UI/HouseCard';

import './SliderMobile.css';

function SliderMobile({ slides, style }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = (e) => {
        e.preventDefault();
        setCurrent(current === length - 1 ? 0 : current + 1);

    };

    const prevSlide = (e) => {
        e.preventDefault();
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slide-mobile-container' >
            <button className={current === 0 ? "slide-arrow-btn left_arrow arrow_disable " : "slide-arrow-btn left_arrow"}
                onClick={prevSlide}
                disabled={current === 0}
            >
                <ReactSVG src={arrow} />
            </button>

            <div className='slide-mobile-wrapper'
            // style={{ left: `-${current * 100}%` }}

            >
                {slides.map((slide, index) => {
                    return (
                        <HouseCard
                            key={index}
                            data={slide}
                            style={index === current ? { opacity: 1 } : { opacity: 0 }}
                        />
                    );
                })}
            </div>
            <button
                className={current === length - 1 ? "slide-arrow-btn arrow_disable " : "slide-arrow-btn"}
                onClick={nextSlide}
                disabled={current === length - 1}
            >
                <ReactSVG src={arrow} />
            </button>
        </section>
    );
}

export default SliderMobile;