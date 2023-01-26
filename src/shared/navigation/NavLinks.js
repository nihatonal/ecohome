import React from 'react';
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import './NavLinks.css';
function NavLinks(props) {
    const location = useLocation();
    return (
        <div className="nav-items-wrapper">
            <div className="nav-item-wrapper" onClick={props.close}>
                <Link
                    className={
                        location.hash === "#aboutcompany" ? `nav-item active-nav-item` : `nav-item`
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
                        location.hash === "#construction" ? `nav-item active-nav-item` : `nav-item`
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
                        location.hash === "#works" ? `nav-item active-nav-item` : `nav-item`
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
                        location.hash === "#contacts" ? `nav-item active-nav-item` : `nav-item`
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