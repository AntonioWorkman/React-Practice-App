import React from 'react'
import Logo from '../images/logo.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

import Home from '../Home/Home';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img class="h-12 w-12 rounded" src={Logo} alt="Logo" />
                </NavLink>
                <Bars>

                </Bars>
                <NavMenu>
                    <NavLink to="/home" activeStyle>Home</NavLink>
                    <NavLink to="/search" activeStyle>Search</NavLink>
                    <NavLink to="/post" activeStyle>Post</NavLink>
                    <NavLink to="/profile" activeStyle>Profile</NavLink>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/sign-in">Login</NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    )
}

export default Navbar;

