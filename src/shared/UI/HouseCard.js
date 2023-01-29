import React, { useEffect, useContext } from 'react';
import { useInView } from "react-intersection-observer";
import { CartContext } from '../context/CartContext';
import { ReactSVG } from 'react-svg';
import icon from '../../assets/icons/house_info_icon.svg';
import arrow from '../../assets/icons/right_arrow.svg';
import './HouseCard.css'
function HouseCard(props) {
    const data = props.data;
    const cart = useContext(CartContext)
    const { ref, inView } = useInView({
        /* Optional options */
        rootMargin: '0px',
        threshold: 0.8
    });
    useEffect(() => {
        if (inView) {
            cart.slideIDHandler(data.id)
        }
    }, [inView])
    return (
        <div className="house" ref={ref}>
            <img src={data.image} alt='travel' />
            <div className="house-content">
                <div className='house_info'>
                    <p className='house_name'>{data.name}</p>
                    <div className="house_info_items">
                        <div className="house_info_item">
                            <ReactSVG src={icon} />
                            Площадь: {data.square} м<sup>2</sup>
                        </div>
                        <div className="house_info_item">
                            <ReactSVG src={icon} />
                            Этажей: {data.flats}
                        </div>
                        <div className="house_info_item">
                            <ReactSVG src={icon} />
                            Комнат: {data.rooms}
                        </div>
                        <div className="house_info_item">
                            <ReactSVG src={icon} />
                            Размер: {data.size}
                        </div>
                    </div>
                </div>
                <span className="house_line"></span>
                <div className="house_price">
                    <p>Стоимость работ</p>
                    <p>3 146 400 руб</p>
                    <button>
                        <ReactSVG src={arrow} />
                    </button>
                </div>
            </div>

        </div>

    );
}

export default HouseCard;