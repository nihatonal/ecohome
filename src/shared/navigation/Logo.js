import React from 'react';

import { HashLink as Link } from "react-router-hash-link";

import './Logo.css'
function Logo(props) {
    return (
        <div className='logo-wrapper'>
            <Link
                className={'logo'}
                to="/"
                onClick={props.onClickNavItem}
                smooth
            >
                ЭкоДом
            </Link>
        </div>
    );
}

export default Logo;