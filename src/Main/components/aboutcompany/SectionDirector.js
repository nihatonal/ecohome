import React from 'react';

import profil_image from '../../../assets/images/director.png'
import './SectionDirector.css'
function SectionDirector(props) {
    return (
        <div className="section_director-wrapper p-36" style={props.style}>
            <img src={profil_image} alt='profil' />
            <h3 className="section_about-title">
                Здравствуйте, меня зовут Евгений Халипа
            </h3>

            <p className="section_about-content-text">
                Я, как руководитель отдела, гарантирую вам, что ваш дом будет построен качественно, в срок.
            </p>

        </div>
    );
}

export default SectionDirector;