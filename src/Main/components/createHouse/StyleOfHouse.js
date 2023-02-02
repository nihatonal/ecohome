import React, { useContext, useState } from 'react';
import { CartContext } from '../../../shared/context/CartContext';
import RadioButton from '../../../shared/components/formElements/RadioButton'
import style_1 from '../../../assets/images/style_1.png';
import style_2 from '../../../assets/images/style_2.png';
import style_3 from '../../../assets/images/style_3.png';
import style_4 from '../../../assets/images/style_4.png';
import style_5 from '../../../assets/images/style_5.png';
import style_6 from '../../../assets/images/style_6.png';
import style_7 from '../../../assets/images/style_7.png';
import style_8 from '../../../assets/images/style_8.png';

function StyleOfHouse(props) {
    const cart = useContext(CartContext)
    const [isRadio, setIsRadio] = useState(null);

    const handleChange = (e) => {
        setIsRadio(+e.currentTarget.value);
        cart.addOneToCart('style', e.currentTarget.name)
    };
    return (
        <div style={props.style} className="house_selections_container house_construction_slide">
            <h3 className='inputs-title'>Какой стиль ближе?</h3>
            <ul className="inputs_wrapper stlyes_wrapper">
                <li className={"house_input_wrapper "}>
                    <img src={style_1} alt='style_1' />
                    <RadioButton
                        className='house_input_radio'
                        value='1'
                        id='style1'
                        name='Шале'
                        handleChange={handleChange}
                        checked={isRadio === 1}
                    />
                    <p className='input_name'>Шале</p>
                </li>
                <li className={"house_input_wrapper "}>
                    <img src={style_2} alt='style_2' />
                    <RadioButton
                        className='house_input_radio'
                        value='2'
                        id='style2'
                        name='Финская классика'
                        handleChange={handleChange}
                        checked={isRadio === 2}
                    />
                    <p className='input_name'>Финская классика</p>
                </li>
                <li className={"house_input_wrapper "}>
                    <img src={style_3} alt='style_3' />
                    <RadioButton
                        className='house_input_radio'
                        value='3'
                        id='style3'
                        name='Райт'
                        handleChange={handleChange}
                        checked={isRadio === 3}
                    />
                    <p className='input_name'>Райт</p>
                </li>
                <li className={"house_input_wrapper "}>
                    <img src={style_4} alt='style_4' />
                    <RadioButton
                        className='house_input_radio'
                        value='4'
                        id='style4'
                        name='Модерн'
                        handleChange={handleChange}
                        checked={isRadio === 4}
                    />
                    <p className='input_name'>Модерн</p>
                </li>
                <li className={"house_input_wrapper "}>
                    <img src={style_5} alt='style_5' />
                    <RadioButton
                        className='house_input_radio'
                        value='5'
                        id='style5'
                        name='Баухаус'
                        handleChange={handleChange}
                        checked={isRadio === 5}
                    />
                    <p className='input_name'>Баухаус</p>
                </li>
                <li className={"house_input_wrapper "}>
                    <img src={style_6} alt='style_6' />
                    <RadioButton
                        className='house_input_radio'
                        value='6'
                        id='style6'
                        name='Американский стиль'
                        handleChange={handleChange}
                        checked={isRadio === 6}
                    />
                    <p className='input_name'>Американский стиль</p>
                </li>
                <li className={"house_input_wrapper "}>
                    <img src={style_7} alt='style_7' />
                    <RadioButton
                        className='house_input_radio'
                        value='7'
                        id='style7'
                        name='Фахверк'
                        handleChange={handleChange}
                        checked={isRadio === 7}
                    />
                    <p className='input_name'>Фахверк</p>
                </li>
                <li className={"house_input_wrapper "}>
                    <img src={style_8} alt='style_8' />
                    <RadioButton
                        className='house_input_radio'
                        value='8'
                        id='style8'
                        name='Классический стиль'
                        handleChange={handleChange}
                        checked={isRadio === 8}
                    />
                    <p className='input_name'>Классический стиль</p>
                </li>
            </ul>
        </div>
    );
}

export default StyleOfHouse;