import React, { useContext, useState } from 'react';
import { CartContext } from '../../../shared/context/CartContext';
import RadioButton from '../../../shared/components/formElements/RadioButton'


function ConstructionDay(props) {
    const cart = useContext(CartContext)
    const [isRadio, setIsRadio] = useState(null);

    const handleChange = (e) => {
        setIsRadio(+e.currentTarget.value);
        cart.addOneToCart('c_day', e.currentTarget.name)
    };
    return (
        <div style={props.style} className="house_selections_container house_construction_slide">
            <h3 className='inputs-title'>Есть ли у вас участок?</h3>
            <ul className="inputs_wrapper">
                <li className={isRadio === 1 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='input_radio'
                        value='1'
                        id='c_day1'
                        name='В ближайшее время'
                        handleChange={handleChange}
                        checked={isRadio === 1}
                    />
                    <p className='input_name'>В ближайшее время</p>
                </li>
                <li className={isRadio === 2 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='2'
                        id='c_day2'
                        name='В этом году'
                        handleChange={handleChange}
                        checked={isRadio === 2}
                    />
                    <p className='input_name'>В этом году</p>
                </li>
                <li className={isRadio === 3 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='3'
                        id='c_day3'
                        name='В следующем году'
                        handleChange={handleChange}
                        checked={isRadio === 3}
                    />
                    <p className='input_name'>В следующем году</p>
                </li>
                <li className={isRadio === 4 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='flats_input_radio'
                        value='4'
                        id='c_day4'
                        name='Еще не определились'
                        handleChange={handleChange}
                        checked={isRadio === 4}
                    />
                    <p className='input_name'>Еще не определились</p>
                </li>
            </ul>
        </div>
    );
}

export default ConstructionDay;