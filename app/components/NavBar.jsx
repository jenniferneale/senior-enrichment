import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink, withRouter } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return <Nav bsStyle="tabs">
            <NavItem><NavLink activeClassName="active" to="/campuses">Home</NavLink></NavItem>
            <NavItem><NavLink activeClassName="active" to="/students">Students</NavLink></NavItem>
        </Nav>
    }
}

export default withRouter(connect(null,null)(NavBar))