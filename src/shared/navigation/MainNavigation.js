import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


import Logo from './Logo';
import NavLinks from './NavLinks';
import Hamburger from './Hamburger';
import SideMenu from './SideMenu';

import './MainNavigation.css';
function MainNavigation(props) {
    const location = useLocation();

    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <div className='header-container p-52' style={location.pathname === '/' ? { position: 'absolute' } : null}>
            <Logo />
            <NavLinks />

            <Hamburger onClick={() => setShowSideMenu(!showSideMenu)} show={showSideMenu} />
            <SideMenu show={showSideMenu} close={() => setShowSideMenu(false)} />
        </div >
    );
}

export default MainNavigation;