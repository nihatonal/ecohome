import React, { useContext, useState } from 'react';
import { CartContext } from '../../../shared/context/CartContext';
import RadioButton from '../../../shared/components/formElements/RadioButton'


function SizeOfHouse(props) {
    const cart = useContext(CartContext)
    const [isRadio, setIsRadio] = useState(null);

    const handleChange = (e) => {
        setIsRadio(+e.currentTarget.value);
        cart.addOneToCart('size', e.currentTarget.name)
    };
    return (
        <div style={props.style} className="house_selections_container house_construction_slide">
            <h3 className='inputs-title'>Выберете желаемые размеры дома</h3>
            <ul className="inputs_wrapper">
                <li className={isRadio === 1 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='input_radio'
                        value='1'
                        id='size1'
                        name='Дом до 100 кв.м'
                        handleChange={handleChange}
                        checked={isRadio === 1}
                    />
                    <p className='input_name'>Дом до 100 кв.м</p>
                </li>
                <li className={isRadio === 2 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='2'
                        id='size2'
                        name='До 100-150 кв.м'
                        handleChange={handleChange}
                        checked={isRadio === 2}
                    />
                    <p className='input_name'>До 100-150 кв.м</p>
                </li>
                <li className={isRadio === 3 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='3'
                        id='size3'
                        name='До 150-200 кв.м'
                        handleChange={handleChange}
                        checked={isRadio === 3}
                    />
                    <p className='input_name'>До 150-200 кв.м</p>
                </li>
                <li className={isRadio === 4 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='4'
                        id='size4'
                        name='Более 200 кв.м.'
                        handleChange={handleChange}
                        checked={isRadio === 4}
                    />
                    <p className='input_name'>Более 200 кв.м.</p>
                </li>
            </ul>
        </div>
    );
}

export default SizeOfHouse;