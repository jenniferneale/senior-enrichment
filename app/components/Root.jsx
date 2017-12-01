import React, { Component } from 'react';
import WinterJokes from './WinterJokes';
import NavBar from './NavBar';
import createHistory from 'history/createBrowserHistory';
import Campuses from './Campuses';
import Students from './Students';
import Campus from './Campus';
import Student from './Student';
import { fetchThings, stateProps, acts } from '../reducers';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter, Link } from 'react-router';

class Root extends Component {

    render() {
        return <div>
            <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
            <NavBar />
            <aside><WinterJokes /></aside>
            <Switch>                
                <Route exact path='/campuses' component={Campuses} />
                <Route exact path='/students' component={Students} />
                <Route path='/campuses/:id' component={Campus} />
                <Route path='/students/:id' component={Student} />
                <Redirect to='/campuses' />
            </Switch>
        </div>
    }
}



export default withRouter(connect(null, null)(Root));