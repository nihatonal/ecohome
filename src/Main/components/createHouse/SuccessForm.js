import React,{useContext} from 'react';
import { ReactSVG } from 'react-svg';
import { CartContext } from '../../../shared/context/CartContext';
import { useForm } from "../../../shared/hooks/form-hook";
import Input from '../../../shared/components/formElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_PHONE } from '../../../shared/util/validators'


import viber from '../../../assets/icons/viber.svg';
import telegram from '../../../assets/icons/telegram.svg';
import whatsapp from '../../../assets/icons/whatsapp.svg';
import { BsFillPlayFill } from "react-icons/bs";
import './SuccessForm.css'
function SuccessForm(props) {
    const cart =useContext(CartContext)
    const [formState, inputHandler] = useForm(
        {
            name: {
                value: "",
                isValid: false,
            },
            phone: {
                value: "",
                isValid: false,
            },
            email: {
                value: "",
                isValid: true,
            },
        },
        false
    );

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(cart.items)
    }

    return (
        <div style={props.style} className="house_selections_container success_container">
            <h3 className='inputs-title'>Мы получили данные и приступаем к расчетам</h3>
            <p className="input_name">Укажите куда выслать расчет стоимости?</p>
            <div className="success_form_social_links_wrapper">
                <a href='https://twitter.com' className="success_form_social_link">
                    <div className="success_form_social_link_icon">
                        <ReactSVG src={telegram} />
                    </div>
                    <p className="input_name">Telegram</p>
                </a>
                <a href='https://www.viber.com' className="success_form_social_link">
                    <div className="success_form_social_link_icon">
                        <ReactSVG src={viber} />
                    </div>
                    <p className="input_name">Viber</p>
                </a>
                <a href='https://web.telegram.org' className="success_form_social_link">
                    <div className="success_form_social_link_icon">
                        <ReactSVG src={whatsapp} />
                    </div>
                    <p className="input_name">What’s App</p>
                </a>
            </div>
            <div className="success_form_wrapper">
                <form onSubmit={submitHandler}>
                    <Input
                        id="name"
                        element="input"
                        type="text"
                        validators={[VALIDATOR_REQUIRE()]}
                        onInput={inputHandler}
                        placeholder='Ваше имя'
                        initialValue={formState.inputs.name.value}
                        initialValid={formState.inputs.name.isValid}
                    />
                    <Input
                        id="phone"
                        classInput='input_phone'
                        element="input"
                        type="tel"
                        validators={[VALIDATOR_REQUIRE(), VALIDATOR_PHONE()]}
                        onInput={inputHandler}
                        placeholder='Телефон'
                        initialValue={formState.inputs.phone.value}
                        initialValid={formState.inputs.phone.isValid}
                    />
                    <Input
                        id="email"
                        classInput="email_input"
                        element="input"
                        type="email"
                        validators={[VALIDATOR_EMAIL()]}
                        onInput={inputHandler}
                        placeholder='Электронная почта (не обязательно)'
                        initialValue={formState.inputs.email.value}
                        initialValid={formState.inputs.email.isValid}
                    />

                    <button
                        className={!formState.isValid ? 'submit_button' : 'submit_button active_submit_button'}
                        type='submit'
                        disabled={!formState.isValid}
                    >
                        <BsFillPlayFill />  Оставить заявку
                    </button>
                    <p className="submit_text">
                        Нажимая на кнопку, вы соглашаетесь с условиями политики
                        конфиденциальности и обработки персональных данных
                    </p>
                </form>
            </div>

        </div>
    );
}

export default SuccessForm;