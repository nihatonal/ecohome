import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

import './ScrollButton.css';
const ScrollButton = () => {



    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)

        }
    };

    const scrollToTop = () => {
        const scrolled = window.pageYOffset;
        console.log(scrolled)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
        console.log(scrolled)
        if (scrolled <= 800) {
            console.log('scrolled')
            setTimeout(() => {
                document.location.replace('/#')
            }, 500)

        }
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className="scroll-btn" style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop}>
            <FaArrowUp className='scroll-btn-icon' />
        </button>
    );
}

export default ScrollButton;
