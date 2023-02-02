import React, { useContext, useState } from 'react';
import { CartContext } from '../../../shared/context/CartContext';
import RadioButton from '../../../shared/components/formElements/RadioButton'
import additional_1 from '../../../assets/images/additional_1.png';
import additional_2 from '../../../assets/images/additional_2.png';
import additional_3 from '../../../assets/images/additional_3.png';


function AdditionalBuildings(props) {
    const cart = useContext(CartContext)
    const [isRadio, setIsRadio] = useState(null);

    const handleChange = (e) => {
        setIsRadio(+e.currentTarget.value);
        cart.addOneToCart('additional', e.currentTarget.name)
    };
    return (
        <div style={props.style} className="house_selections_container house_construction_slide">
            <h3 className='inputs-title'>Нужны ли дополнительные строения на участке?</h3>
            <ul className="inputs_wrapper additionals_wrapper">
                <li className={"house_input_wrapper "}>
                    <img src={additional_1} alt='additional_1' />
                    <RadioButton
                        className='house_input_radio'
                        value='1'
                        id='additional1'
                        name='Шале'
                        handleChange={handleChange}
                        checked={isRadio === 1}
                    />
                </li>
                <li className={"house_input_wrapper "}>
                    <img src={additional_2} alt='additional_2' />
                    <RadioButton
                        className='house_input_radio'
                        value='2'
                        id='additional2'
                        name='Шале'
                        handleChange={handleChange}
                        checked={isRadio === 2}
                    />
                </li>
                <li className={"house_input_wrapper "}>
                    <img src={additional_3} alt='additional_3' />
                    <RadioButton
                        className='house_input_radio'
                        value='3'
                        id='additional3'
                        name='Шале'
                        handleChange={handleChange}
                        checked={isRadio === 3}
                    />
                </li>

            </ul>
        </div>
    );
}

export default AdditionalBuildings;