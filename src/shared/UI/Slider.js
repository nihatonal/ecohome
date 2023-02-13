import React, { useState, useRef, useEffect, useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { CartContext } from '../context/CartContext';
import arrow from '../../assets/icons/right_arrow.svg';
import HouseCard from '../../shared/UI/HouseCard';
import './Slider.css';
const Slider = ({ slides }) => {
    const ref = useRef(null);
    const cart = useContext(CartContext);
    const length = slides.length;
    const [widthSlide, setWidthSlide] = useState(0);
    const [counter, setCounter] = React.useState(0);
    const intervalRef = React.useRef(null);
    useEffect(() => {
        setWidthSlide(ref.current.offsetWidth)
    }, []);
    useEffect(() => {
        return () => stopCounter(); // when App is unmounted we should stop counter
    }, []);

    const startCounter = () => {
        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 100);
    };
    const decreaseCounter = () => {

        if (intervalRef.current) return;
        intervalRef.current = setInterval(() => {
            setCounter((prevCounter) => prevCounter - 1);
        }, 100);
    };

    const stopCounter = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {

        if (counter === 0 || cart.slideId === slides[length - 1].id) {
            stopCounter()
        }
    }, [counter])


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className='slide-container' >
            <div className="slider_filter"
                style={counter === 0 ? { opacity: 0 } : null}></div>
            <div
                className="slider_filter slider_filter_right"
                style={{ left: `${widthSlide - 353}px` }}
            ></div>
            <button className={counter === 0 ? "slide-arrow-btn left_arrow arrow_disable " : "slide-arrow-btn left_arrow"}
                onClick={decreaseCounter}
                onMouseDown={decreaseCounter}
                onMouseUp={stopCounter}
                onMouseLeave={stopCounter}
                disabled={counter === 0}
            >
                <ReactSVG src={arrow} />
            </button>


            <div ref={ref} className='slide-wrapper'
                style={{ left: `${-counter * 50}px` }}
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
                        <HouseCard
                            key={index}
                            data={slide}
                        />
                    );
                })}
            </div>
            <button
                className={cart.slideId === slides[length - 1].id ? "slide-arrow-btn arrow_disable " : "slide-arrow-btn"}
                onClick={startCounter}
                onMouseDown={startCounter}
                onMouseUp={stopCounter}
                onMouseLeave={stopCounter}
                disabled={cart.slideId === slides[length - 1].id}
            >
                <ReactSVG src={arrow} />
            </button>
        </section>
    );
};

export default Slider;