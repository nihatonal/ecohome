import React from 'react';
import { ReactSVG } from 'react-svg';

import project from '../../assets/icons/project.svg';
import money from '../../assets/icons/money.svg';
import house from '../../assets/icons/house.svg';
import gov from '../../assets/icons/gov.svg';
import guarentee from '../../assets/icons/guarantee.svg';
import content_image from '../../assets/images/profit_house_icon_individual.png';
import './SectionProfit.css';
function SectionProtif(props) {
    return (
        <section className="section-profit-container p-138">
            <h3 className="section-title">
                Почему покупка дома - выгодней, чем покупка квартиры?
            </h3>
            <div className="section-profit-content">
                <div className="section-profit-content-items">
                    <div className="section-profit-content-item">
                        <ReactSVG src={project} />
                        <p>Индивидуальный проект</p>
                    </div>
                    <div className="section-profit-content-item">
                        <ReactSVG src={money} />
                        <p>Фиксированная стоимость строительства</p>
                    </div>
                    <div className="section-profit-content-item">
                        <ReactSVG src={house} />
                        <p>Комплектация домов с коммуникациями</p>
                    </div>
                    <div className="section-profit-content-item">
                        <ReactSVG src={gov} />
                        <p>Государственные программы</p>
                    </div>
                    <div className="section-profit-content-item">
                        <ReactSVG src={guarentee} />
                        <p>Гарантия на дом 5 лет, на кровлю 7 лет</p>
                    </div>

                </div>
                <img src={content_image} alt="content_image" />
            </div>
        </section>
    );
}

export default SectionProtif;