import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaVk } from "react-icons/fa";
import { FaOdnoklassniki } from "react-icons/fa";
import footer_bg from '../../assets/images/ecohome.png'
import './Footer.css';
function Footer(props) {
    const data = [
        {
            title: 'О компании',
            list: ['Документы', 'О нас', 'Контроль качества и гарантии', 'Ход строительства', 'Отзывы', 'Вакансии', 'Партнеры', 'Выставочная площадка']
        },
        {
            title: 'Строительство',
            list: ['Каркасные дома', 'Кирпичные дома', 'Бани и сауны', 'Гаражи', 'Крыши']
        },
        {
            title: 'Продажа',
            list: ['Дома и коттеджи', 'Земельные участки', 'Объекты на карте']
        },
        {
            title: 'Проекты домов',
            list: ['Кирпичные дома', 'Каркасные дома', 'Бани', 'Хозблоки', 'Гаражи']
        },
        {
            title: 'Цены',
            list: ['Акции и скидки', 'Узнать цену онлайн', 'Хозблоки', 'Гаражи']
        },
        {
            list: ['Часто задаваемые вопросы', 'Кредитование', 'Наши работы']
        }
    ]

    return (
        <div className='footer-container'>
            <div className="footer-wrapper p-52 p_t-25">
                <div className="footer_top_content">
                    {data.slice(0, data.length - 1).map((item, index) =>
                        <div className="footer_top_bar_item" key={index}>
                            <p className="footer_link_item_title">{item.title}</p>
                            <div className="footer_link_items_wrapper" >
                                {item.list.map((el, index) =>
                                    <NavLink key={index} to='/' className="footer_link_item">{el}</NavLink>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="footer_top_bar_item">
                        {data[data.length - 1].list.map((item) =>
                            <NavLink className="footer_link_item_title">{item}</NavLink>
                        )}

                    </div>
                </div>
                <span className="footer_line"></span>
                <div className="footer_bottom_content">
                    <div className="footer_bottom_content-info">
                        <p className="footer_bottom_content-info-title">ЭкоДом</p>
                        <p className="footer_bottom_content-info-tel">+7 (474) 24 24 24</p>
                        <p className="footer_bottom_content-info-tel tel_2">8 (930) 014 24 78</p>
                        <div className="footer_bottom_content-social-links">
                            <a href='#' className="footer_bottom_content-social-link">
                                <FaYoutube />
                            </a>
                            <a href='#' className="footer_bottom_content-social-link">
                                <FaTelegramPlane />
                            </a>
                            <a href='#' className="footer_bottom_content-social-link">
                                <FaOdnoklassniki />
                            </a>
                            <a href='#' className="footer_bottom_content-social-link">
                                <FaWhatsapp />
                            </a>
                            <a href='#' className="footer_bottom_content-social-link">
                                <FaVk />
                            </a>
                        </div>
                        <p className="footer_bottom_content-subinfo">«Эко Дом» Строительство каркасных домов</p>
                        <p className="footer_bottom_content-subinfo">© 2012-2021 Все права защищены</p>
                    </div>
                    <img src={footer_bg} alt={'footer_bg'} />
                </div>
            </div>

        </div >
    );
}

export default Footer;