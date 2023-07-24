import React from 'react';

import './ConstructionSlider.css'
function ConstructionSlider({ data, active,onClick }) {
    return (
        <div className="constructionSlider_wrapper">
            {data.map((el) =>
                <div className="constructionSlider_item-wrapper" onClick={onClick} >
                    <div
                        style={{ backgroundImage: `url(${el.image})` }}
                        id={el.id}
                        className={active === el.id ? "constructionSlider_item active_constructionSlide" : "constructionSlider_item"}>
                    </div>
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