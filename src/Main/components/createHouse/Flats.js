import React, { useState, useContext } from 'react';
import { CartContext } from '../../../shared/context/CartContext';
import RadioButton from '../../../shared/components/formElements/RadioButton'

function Flats() {
    const cart = useContext(CartContext)
    const [isRadio, setIsRadio] = useState(null);

    const handleChange = (e) => {
        // console.log(e.currentTarget.value);
        setIsRadio(+e.currentTarget.value);
        cart.addOneToCart('flat', e.currentTarget.name)
    };
    return (
        <div className="house_selections_container">
            <h3 className='inputs-title'>Сколько этажей вам нужно?</h3>
            <ul className="inputs_wrapper">
                <li className={isRadio === 1 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='input_radio'
                        value='1'
                        id='flat1'
                        name='1 этаж'
                        handleChange={handleChange}
                        checked={isRadio === 1}
                    />
                    <p className='input_name'>1 этаж</p>
                </li>
                <li className={isRadio === 2 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='2'
                        id='flat2'
                        name='1 этаж + мансарда'
                        handleChange={handleChange}
                        checked={isRadio === 2}
                    />
                    <p className='input_name'>1 этаж + мансарда</p>
                </li>
                <li className={isRadio === 3 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='3'
                        id='flat3'
                        name='2 этажа'
                        handleChange={handleChange}
                        checked={isRadio === 3}
                    />
                    <p className='input_name'>2 этажа</p>
                </li>
                <li className={isRadio === 4 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='4'
                        id='flat4'
                        name='2 этажа + мансарда'
                        handleChange={handleChange}
                        checked={isRadio === 4}
                    />
                    <p className='input_name'>2 этажа + мансарда</p>
                </li>
                <li className={isRadio === 5 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='5'
                        id='flat5'
                        name='3 этажа'
                        handleChange={handleChange}
                        checked={isRadio === 5}
                    />
                    <p className='input_name'>3 этажа</p>
                </li>
                <li className={isRadio === 6 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='6'
                        id='flat6'
                        name='Еще не определились'
                        handleChange={handleChange}
                        checked={isRadio === 6}
                    />
                    <p className='input_name'>Еще не определились</p>
                </li>
            </ul>
        </div>
    );
}

export default Flats;