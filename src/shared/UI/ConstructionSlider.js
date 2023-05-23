import React from 'react';

import image_item from '../../assets/images/construction_1.png';
import image_item2 from '../../assets/images/construction_2.png';
import image_item3 from '../../assets/images/construction_3.png';
import image_item4 from '../../assets/images/construction_4.png';
import image_item5 from '../../assets/images/construction_5.png';
import './ConstructionSlider.css'
function ConstructionSlider({ data, active }) {
    return (
        <div className="constructionSlider_wrapper">
            {data.map((el) =>
                <div
                    style={{ backgroundImage: `url(${el.image})` }}
                    className={active === el.id ? "constructionSlider_item active_constructionSlide" : "constructionSlider_item"}>
                </div>
            )}
            {/* <div
                style={{ backgroundImage: `url(${props.image})` }}
                className="constructionSlider_item">
            </div> */}
        </div>
    );
}

export default ConstructionSlider;