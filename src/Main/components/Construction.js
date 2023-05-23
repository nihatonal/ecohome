import React, { useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';
import { useInView } from "react-intersection-observer";
import image_item from '../../assets/images/construction_1.png';
import image_item2 from '../../assets/images/construction_2.png';
import image_item3 from '../../assets/images/construction_3.png';
import image_item4 from '../../assets/images/construction_4.png';
import image_item5 from '../../assets/images/construction_5.png';

import arrowfromup from '../../assets/icons/arrow_fromup.svg';
import arrowfromdown from '../../assets/icons/arrow_fromdown.svg';
import ConstructionSlider from '../../shared/UI/ConstructionSlider';
import './Construction.css';
function Construction(props) {
    const [activeId, setActiveId] = useState('step-1');
    const navs = [
        {
            id: 'step-1',
            text: "Фундамент",
            image:require('../../assets/images/construction_1.png')
        },
        {
            id: 'step-2',
            text: "Сборка и Монтаж дома",
            image:require('../../assets/images/construction_2.png')
        },
        {
            id: 'step-3',
            text: "Инженерные системы",
            image:require('../../assets/images/construction_3.png')
        },
        {
            id: 'step-4',
            text: "Отделка",
            image:require('../../assets/images/construction_4.png')
        },
        {
            id: 'step-5',
            text: "Отзыв клиента",
            image:require('../../assets/images/construction_5.png')
        }

    ];
    const { ref, inView } = useInView({
        /* Optional options */
        rootMargin: '0px',
        threshold: 0.8
    });
    useEffect(() => {
        if (inView) {
            // document.location.replace('/#construction')
        }

    }, [inView])
    return (
        <div ref={ref} id='construction' className='construction-container'>
            <h3 className="section-title">Ход строительства</h3>
            <div className="construction-wrapper">
                <ul className="construction-navbar">
                    {navs.map((item, index) =>
                        <li
                            key={index}
                            className={activeId === item.id ? "construction-nav-item active-construction-nav-item" : "construction-nav-item "}
                            id={item.id}
                            onClick={() => setActiveId(item.id)}

                        >
                            {item.text}
                        </li>
                    )}

                </ul>
                <div className="construction_content-wrapper">
                    <ConstructionSlider data={navs} active ={activeId}/>
                    {/* <div
                        style={activeId === 'step-5' ? { zIndex: '8' } : null}
                        className={activeId === 'step-1' ? 'construction_content-item active_construction_item' : "construction_content-item slide__out"}
                    >
                        {activeId === 'step-1' && <div className="step_wrapper step4">
                            <div className="step_info">
                                <p>Этап 4</p>
                                <p>Заливка бетона</p>
                            </div>
                            <ReactSVG className='step_arrow' src={arrowfromup} />
                        </div>}
                        {activeId === 'step-1' && <div className="step_wrapper step3">
                            <div className="step_info">
                                <p>Этап 3</p>
                                <p>Устройство опалубки</p>
                            </div>
                            <ReactSVG className='step_arrow' src={arrowfromup} />
                        </div>}
                        <img src={image_item} alt={"image_item"} />
                        {activeId === 'step-1' && <div className="step_wrapper step2">
                            <ReactSVG className='step_arrow' src={arrowfromdown} />
                            <div className="step_info">
                                <p>Этап 2</p>
                                <p>Армирование</p>
                            </div>
                        </div>}
                        {activeId === 'step-1' && <div className="step_wrapper step1">
                            <ReactSVG className='step_arrow' src={arrowfromdown} />
                            <div className="step_info">
                                <p>Этап 1</p>
                                <p>Земельные работы</p>
                            </div>
                        </div>}
                    </div>
                    <div
                        className={activeId === 'step-2' ? 'construction_content-item active_construction_item' : "construction_content-item slide__out"}
                        style={activeId === 'step-1' ? { zIndex: '8' } : null}
                    >
                        <img src={image_item2} alt={"image_item"} />
                    </div>
                    <div
                        style={activeId === 'step-2' ? { zIndex: '8' } : null}
                        className={activeId === 'step-3' ? 'construction_content-item active_construction_item' : "construction_content-item slide__out"}
                    >
                        <img src={image_item3} alt={"image_item"} />
                    </div>
                    <div
                        style={activeId === 'step-3' ? { zIndex: '8' } : null}
                        className={activeId === 'step-4' ? 'construction_content-item active_construction_item' : "construction_content-item slide__out"}
                    >
                        <img src={image_item4} alt={"image_item"} />
                    </div>
                    <div
                        style={activeId === 'step-4' ? { zIndex: '8' } : null}
                        className={activeId === 'step-5' ? 'construction_content-item active_construction_item' : "construction_content-item slide__out"}
                    >
                        <img src={image_item5} alt={"image_item"} />
                    </div>
                    */}
                </div>
            </div>
        </div>
    );
}

export default Construction;