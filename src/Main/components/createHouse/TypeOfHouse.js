import React, { useState, useContext } from 'react';
import { CartContext } from '../../../shared/context/CartContext';
import house_1 from '../../../assets/images/house_1.png';
import house_2 from '../../../assets/images/house_2.png';
import house_3 from '../../../assets/images/house_3.png';
import house_4 from '../../../assets/images/house_4.png';
import house_5 from '../../../assets/images/house_5.png';
import house_6 from '../../../assets/images/house_6.png';

import RadioButton from '../../../shared/components/formElements/RadioButton'
import './TypeOfHouse.css';

function TypeOfHouse(props) {
    const cart = useContext(CartContext)
    const [isRadio, setIsRadio] = useState(null);
    const handleChange = (e) => {
        // console.log(e.currentTarget.value);
        setIsRadio(+e.currentTarget.value);
        cart.addOneToCart('house_type', e.currentTarget.name)
    };
    return (
        <div className="houses_container">
            <h3 className='inputs-title'>Какой дом вы хотите построить?</h3>
            <ul className="houses_wrapper">
                <li className="house_input_wrapper">
                    <img src={house_1} alt='house_1' />
                    <p className='input_name'>Дом из блоков</p>
                    <RadioButton
                        className='house_input_radio'
                        value='1'
                        id='house1'
                        name='Дом из блоков'
                        handleChange={handleChange}
                        checked={isRadio === 1}
                    />

                </li>
                <li className="house_input_wrapper">
                    <img src={house_2} alt='house_2' />
                    <p className='input_name'>Каркасный дом</p>
                    <RadioButton
                        className='house_input_radio'
                        value='2'
                        id='house2'
                        name='Каркасный дом'
                        handleChange={handleChange}
                        checked={isRadio === 2}
                    />
                </li>
                <li className="house_input_wrapper">
                    <img src={house_3} alt='house_3' />
                    <p className='input_name'>Кирпичный дом</p>
                    <RadioButton
                        className='house_input_radio'
                        value='3'
                        id='house3'
                        name='Кирпичный дом'
                        handleChange={handleChange}
                        checked={isRadio === 3}
                    />
                </li>
                <li className="house_input_wrapper">
                    <img src={house_4} alt='house_4' />
                    <p className='input_name'>Дом из профилированного бруса</p>
                    <RadioButton
                        className='house_input_radio'
                        value='4'
                        id='house4'
                        name='Дом из профилированного бруса'
                        handleChange={handleChange}
                        checked={isRadio === 4}
                    />
                </li>
                <li className="house_input_wrapper">
                    <img src={house_5} alt='house_5' />
                    <p className='input_name'>Дом из цилиндринованного бруса</p>
                    <RadioButton
                        className='house_input_radio'
                        value='5'
                        id='house5'
                        name='Дом из цилиндринованного бруса'
                        handleChange={handleChange}
                        checked={isRadio === 5}
                    />
                </li>
                <li className="house_input_wrapper">
                    <img src={house_6} alt='house_6' />
                    <p className='input_name'>Дом из SIP-панелей</p>
                    <RadioButton
                        className='house_input_radio'
                        value='6'
                        id='house6'
                        name='Дом из SIP-панелей'
                        handleChange={handleChange}
                        checked={isRadio === 6}
                    />
                </li>
            </ul>
        </div>
    );
}

export default TypeOfHouse;