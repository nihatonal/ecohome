import React, { useState } from 'react';
import { ReactSVG } from 'react-svg';

import './ArgumentOfHouse.css'
function ArgumentOfHouse(props) {
    const [activeId, setActiveId] = useState('argument-1');
    const navs = [
        {
            id: 'argument-1',
            text: "Дома",
            image: require('../../assets/icons/house_icon.svg')
        },
        {
            id: 'argument-2',
            text: "Гаражи",
            image: require('../../assets/icons/garage_icon.svg')
        },
        {
            id: 'argument-3',
            text: "Бани",
            image: require('../../assets/icons/bathroom_icon.svg')
        }

    ];

    return (
        <div className="argumentofhouse-container">
            <div className="argumentofhouse-wrapper">
                <div className="argument-navbar">
                    {navs.map((item, index) =>
                        <div
                            key={index}
                            className="argument-nav-item"
                            id={item.id}
                            onClick={() => setActiveId(item.id)}

                        >
                            <div className={activeId === item.id ? "argument-nav-item-icon active_argument_bg" : "argument-nav-item-icon"}>
                                <ReactSVG src={item.image} />
                            </div>
                            <p className={activeId === item.id ? "active_argument_color" : ""}>{item.text}</p>
                        </div>
                    )}

                </div>
                <div className="argument-content-wrapper">
                    <div
                        className={activeId === 'argument-1' ? "argument-content-item slide_in" : "argument-content-item slide_out"}
                    // style={activeId === 'argument-1' ? style_active : style_inactive}
                    >
                        <div className="argument-content-info">
                            <p>Мы строим загородные дома
                                <br></br>
                                <span>любой архитектуры</span>
                            </p>
                            <p>Мы беремся за самые сложные работы, для того, чтобы построить дом вашей мечты</p>
                            <p>Мы под ваш бюджет построим: Дом, баню и так далее</p>
                        </div>
                        <div className="argument-media-wrapper"></div>
                    </div>
                    <div
                        className={activeId === 'argument-2' ? "argument-content-item slide_in" : "argument-content-item slide_out"}
                    // style={activeId === 'argument-2' ? style_active : style_inactive}
                    >
                        <div className="argument-content-info">
                            <p>Мы строим гараж
                                <br></br>
                                <span>любой архитектуры</span>
                            </p>
                            <p>Laborum tenetur repellat provident, eos fugit, tempora suscipit explicabo aperiam debitis dolor inventore ad officiis laudantium. Officia error neque atque deserunt suscipit.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="argument-media-wrapper"></div>
                    </div>
                    <div
                        className={activeId === 'argument-3' ? "argument-content-item slide_in" : "argument-content-item slide_out"}
                    // style={activeId === 'argument-3' ? style_active : style_inactive}
                    >
                        <div className="argument-content-info">
                            <p>Мы строим bathroom
                                <br></br>
                                <span>любой архитектуры</span>
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam earum impedit error nulla fugit molestiae modi quibusdam?</p>
                            <p>Repudiandae animi deleniti inventore praesentium atque? Esse ipsa nisi id veritatis quo sunt suscipit culpa reprehenderit.</p>
                        </div>
                        <div className="argument-media-wrapper"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ArgumentOfHouse;