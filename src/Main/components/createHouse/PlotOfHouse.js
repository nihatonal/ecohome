import React, { useContext, useState } from 'react';
import { CartContext } from '../../../shared/context/CartContext';
import RadioButton from '../../../shared/components/formElements/RadioButton'


function PlotOfHouse(props) {
    const cart = useContext(CartContext)
    const [isRadio, setIsRadio] = useState(null);

    const handleChange = (e) => {
        setIsRadio(+e.currentTarget.value);
        cart.addOneToCart('plot', e.currentTarget.name)
    };
    return (
        <div style={props.style} className="house_selections_container plot">
            <h3 className='inputs-title'>Есть ли у вас участок?</h3>
            <ul className="inputs_wrapper">
                <li className={isRadio === 1 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='input_radio'
                        value='1'
                        id='plot1'
                        name='Участок есть, в черте города'
                        handleChange={handleChange}
                        checked={isRadio === 1}
                    />
                    <p className='input_name'>Участок есть, в черте города</p>
                </li>
                <li className={isRadio === 2 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='input_radio'
                        value='2'
                        id='plot2'
                        name='Участок есть за городом далее 100 км'
                        handleChange={handleChange}
                        checked={isRadio === 2}
                    />
                    <p className='input_name'>Участок есть за городом далее 100 км</p>
                </li>
                <li className={isRadio === 3 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='input_radio'
                        value='3'
                        id='plot3'
                        name='Участок есть за городом до 100 км'
                        handleChange={handleChange}
                        checked={isRadio === 3}
                    />
                    <p className='input_name'>Участок есть за городом до 100 км</p>
                </li>
                <li className={isRadio === 4 ? "input_wrapper checked_flat" : "input_wrapper"}>
                    <RadioButton
                        className='input_radio'
                        value='4'
                        id='plot4'
                        name='Участка нет'
                        handleChange={handleChange}
                        checked={isRadio === 4}
                    />
                    <p className='input_name'>Участка нет</p>
                </li>
            </ul>
        </div>
    );
}

export default PlotOfHouse;