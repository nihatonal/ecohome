import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import { CartContext } from '../../../shared/context/CartContext';
import TypeOfHouse from './TypeOfHouse';
import { BsFillPlayFill } from "react-icons/bs";
import './CreateHouse.css';
function CreateHouse(props) {
    const cart = useContext(CartContext)
    // console.log(cart.items)
    return (
        <div className='create-house-container p-52'>
            <p className="section-suptitle" >Пройдите бесплатный тест-калькулятор и</p>
            <h3 className="section-title">Получите предварительный расчет стоимости дома за 1 минуту</h3>
            <div className="create-house-content-wrapper">
                <TypeOfHouse />
                <div className={'create-house-nav-wrapper'}>
                    <input type='range' min='1' max='7' />
                    <p className={'create-house-nav-info'}>
                        <span className='create-house-nav-info_active'>01</span>/<span>07</span>
                    </p>
                    <button className="create-house-nav_button">
                        Далее <BsFillPlayFill/>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default CreateHouse;