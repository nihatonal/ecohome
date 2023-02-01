import React from 'react';
import { ReactSVG } from 'react-svg'
import { HashLink as Link } from "react-router-hash-link";
import { BsFillPlayFill } from "react-icons/bs";

import hero_image from '../../assets/images/hero_image.svg'
import './Hero.css';
function Hero() {

    return (
        <div className="hero-container">
            <div className="hero-wrapper">
                <div className="hero-content-wrapper">
                    <p className="hero_suptitle">
                        Свобода. Доступность. Уникальность
                    </p>
                    <h1 className="hero-title">
                        Построй дом <br />своей мечты
                    </h1>
                    <p className="hero_subtitle">
                        Мы построим тот дом, о котором вы мечтаете
                    </p>
                    <Link
                        className={'hero-btn'}
                        to="/#construct_house"
                        smooth
                    >
                        <BsFillPlayFill />
                        Построй свой дом
                    </Link>
                </div>
                <div className="hero-image-wrapper">
                    <ReactSVG src={hero_image} />
                </div>

            </div>
        </div>
    );
}

export default Hero;