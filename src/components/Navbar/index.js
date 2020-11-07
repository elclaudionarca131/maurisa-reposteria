import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
      <NavLink to="/">Maurisa Pastelería</NavLink>
      <NavIcon onClick={toggle}>
        <p>Menu</p>
        <Bars/>
      </NavIcon>
    </Nav>
    </>
  );
};

export default Navbar;