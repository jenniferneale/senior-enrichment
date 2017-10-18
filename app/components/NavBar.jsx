import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
    return <Nav bsStyle="tabs">
        <NavItem><NavLink to="/campuses">Home</NavLink></NavItem>
        <NavItem><NavLink to="/students">Students</NavLink></NavItem>
    </Nav>
}