import React, { useContext } from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { CartContext } from '../context/CartContext';
import './NavLinks.css';
function NavLinks(props) {
    const location = useLocation();
    const cart = useContext(CartContext);
    return (
        <div className="nav-items-wrapper">
            <div className="nav-item-wrapper" onClick={props.close}>
                <Link
                    className={
                        location.hash === "#aboutcompany" && cart.activeNav ? `nav-item active-nav-item` : `nav-item`
                    }
                    to="/#aboutcompany"
                    activeclassname="selected"
                    onClick={props.onClickNavItem}
                    smooth
                >
                    О компании
                </Link>
            </div>
            <div className="nav-item-wrapper" onClick={props.close}>
                <Link
                    className={
                        location.hash === "#construction" && cart.activeNav ? `nav-item active-nav-item` : `nav-item`
                    }
                    to="/#construction"
                    activeclassname="selected"
                    onClick={props.onClickNavItem}
                    smooth
                >
                    Строительство домов
                </Link>
            </div>
            <div className="nav-item-wrapper" onClick={props.close}>
                <Link
                    className={
                        location.hash === "#works" && cart.activeNav ? `nav-item active-nav-item` : `nav-item`
                    }
                    to="/#works"
                    activeclassname="selected"
                    onClick={props.onClickNavItem}
                    smooth
                >
                    Работы
                </Link>
            </div>
            <div className="nav-item-wrapper" onClick={props.close}>
                <Link
                    className={
                        location.hash === "#contacts" && cart.activeNav ? `nav-item active-nav-item` : `nav-item`
                    }
                    to="/#contacts"
                    activeclassname="selected"
                    onClick={props.onClickNavItem}
                    smooth
                >
                    Контакты
                </Link>
            </div>
        </div>
    );
}

export default NavLinks;