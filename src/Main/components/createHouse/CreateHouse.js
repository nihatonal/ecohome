import React, { useContext, useState, useEffect } from 'react';
import { ReactSVG } from 'react-svg';
import { CartContext } from '../../../shared/context/CartContext';
import TypeOfHouse from './TypeOfHouse';
import Flats from './Flats';
import PlotOfHouse from './PlotOfHouse'
import SizeOfHouse from './SizeOfHouse';
import ConstructionDay from './ConstructionDay';
import StyleOfHouse from './StyleOfHouse';
import AdditionalBuildings from './AdditionalBuildings';
import SuccessForm from './SuccessForm';

import { BsFillPlayFill } from "react-icons/bs";
import './CreateHouse.css';
function CreateHouse(props) {
    const cart = useContext(CartContext);
    const [activeId, setActiveId] = useState(1);

    const data = [
        {
            id: "item_1",
            item: <TypeOfHouse />
        },
        {
            id: "item_2",
            item: <Flats />
        },
        {
            id: "item_3",
            item: <PlotOfHouse />
        },
        {
            id: "item_4",
            item: <SizeOfHouse />
        },
        {
            id: "item_5",
            item: <ConstructionDay />
        },
        {
            id: "item_6",
            item: <StyleOfHouse />
        },
        {
            id: "item_7",
            item: <AdditionalBuildings />
        },
        {
            id: "item_8",
            item: <SuccessForm />
        },
    ]

    const nextHandlder = () => {
        setActiveId(activeId + 1)

    }
    return (
        <div className='create-house-container p-52' >
            <p className="section-suptitle" >Пройдите бесплатный тест-калькулятор и</p>
            <h3 className="section-title">Получите предварительный расчет стоимости дома за 1 минуту</h3>
            <div className="create-house-content-wrapper" id='construct_house'>
                {data.map((el) =>
                    <div key={el.id}
                        className={el.id === `item_${activeId}` ?
                            'create_house_section_wrapper slide__in' :
                            'create_house_section_wrapper slide__out'}
                        id={el.id}>
                        {el.item}
                    </div>
                )}

                {activeId !== 8 && <div className={'create-house-nav-wrapper'}>
                    <div className={'create-house-line_bar'}>
                        <span
                            className={'create-house-line_fill'}
                            style={{ width: `${14.285*activeId}%`}}
                        ></span>
                    </div>
                    {/* <input type='range' min='1' max='7' /> */}
                    <p className={'create-house-nav-info'}>
                        <span className='create-house-nav-info_active'>{activeId}</span>/<span>07</span>
                    </p>
                    <button
                        onClick={nextHandlder}
                        className={cart.items.length === activeId ? "create-house-nav_button create-house-nav_button_active" : "create-house-nav_button"}
                        disabled={cart.items.length !== activeId}

                    >
                        Далее <BsFillPlayFill />
                    </button>
                </div>}
            </div>

        </div >
    );
}

export default CreateHouse;