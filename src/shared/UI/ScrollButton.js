import React, { useState, useContext } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import './ScrollButton.css';
const ScrollButton = () => {

    const cart = useContext(CartContext)

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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
                in place of 'smooth' */
        });
        cart.resetNavbar(false)

    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className="scroll-btn" style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop}>
            <FaArrowUp className='scroll-btn-icon' />
        </button>
    );
}

export default ScrollButton;
