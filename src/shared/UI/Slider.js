import React, { useState, useRef, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import arrow from '../../assets/icons/right_arrow.svg'
import './Slider.css';
const Slider = ({ slides }) => {
    const ref = useRef(null);
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const [widthSlide, setWidthSlide] = useState(0);

    useEffect(() => {
        setWidthSlide(ref.current.offsetWidth)
        console.log(ref.current.offsetWidth)
    }, []);

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section className='slide-container' >

            <button className={current === 0 ? "slide-arrow-btn left_arrow arrow_disable " : "slide-arrow-btn left_arrow"} onClick={prevSlide} disabled={current === 0}>
                <ReactSVG src={arrow} />
            </button>


            <div ref={ref} className='slide-wrapper'
                style={{ left: `${-380 * 3 * current}px` }}
            >
                {slides.map((slide, index) => {
                    return (
                        // <div
                        //     style={{ width: `${widthSlide}px` }}
                        //     className={index === current ? 'slide_mini active' : 'slide_mini'}
                        //     key={index}
                        // >
                        //     <img src={slide.image} style={{ width: `${widthSlide}px` }} alt='travel' className='slide-image' />
                        //     <div>

                        //     </div>

                        // </div>
                        <div className="slide_item">
                            <img src={slide.image} alt='travel' />
                        </div>
                    );
                })}
            </div>
            <button className={current === slides.length / 5 + 1 ? "slide-arrow-btn arrow_disable " : "slide-arrow-btn"} onClick={nextSlide} disabled={current === slides.length / 5 + 1}>
                <ReactSVG src={arrow} />
            </button>
        </section>
    );
};

export default Slider;