import React from 'react';
import { ReactSVG } from 'react-svg';

import Input from '../../../shared/components/formElements/Input';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from '../../../shared/util/validators'


import viber from '../../../assets/icons/viber.svg';
import telegram from '../../../assets/icons/telegram.svg';
import whatsapp from '../../../assets/icons/whatsapp.svg';

import './SuccessForm.css'
function SuccessForm(props) {
    return (
        <div className="house_selections_container success_container">
            <h3 className='inputs-title'>Мы получили данные и приступаем к расчетам</h3>
            <p className="input_name">Укажите куда выслать расчет стоимости?</p>
            <div className="success_form_social_links_wrapper">
                <div className="success_form_social_link">
                    <div className="success_form_social_link_icon">
                        <ReactSVG src={telegram} />
                    </div>
                    <p className="input_name">Telegram</p>
                </div>
                <div className="success_form_social_link">
                    <div className="success_form_social_link_icon">
                        <ReactSVG src={viber} />
                    </div>
                    <p className="input_name">Viber</p>
                </div>
                <div className="success_form_social_link">
                    <div className="success_form_social_link_icon">
                        <ReactSVG src={whatsapp} />
                    </div>
                    <p className="input_name">What’s App</p>
                </div>
            </div>
            <div className="success_form_wrapper">

            </div>

        </div>
    );
}

export default SuccessForm;