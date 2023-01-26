import React from 'react';

import why_image from '../../../assets/images/why_we.png'
import './SectionFaq.css';
function SectionFaq(props) {
    return (
        <div className="section_faq-wrapper p-52" style={props.style}>
            <img src={why_image} alt='profil' />
            <ul>
                <li className="section_about-content-text">
                    Отработаны процессы и накоплен огромный опыт.
                </li>
                <li className="section_about-content-text">
                    Строим под ключ: от геоизысканий участка до ландшафтных работ.
                </li>
                <li className="section_about-content-text">
                    Благодаря комплексному подходу с нами спокойно.
                </li>
                <li className="section_about-content-text">
                    Мы всегда дорабатываем проект дома под выбранный участок и потребности каждого из будущих жильцов.
                </li>
                <li className="section_about-content-text">
                    Строгое соблюдение ГОСТ, СНиП.
                </li>
                <li className="section_about-content-text">
                    Полный цикл — от лесозаготовки до готового дома под ключ.
                </li>
            </ul>

        </div>
    );
}

export default SectionFaq;