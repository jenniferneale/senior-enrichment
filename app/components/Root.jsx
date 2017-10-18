import React, { Component } from 'react';
import WinterJokes from './WinterJokes';
import NavBar from './NavBar';
import createHistory from 'history/createBrowserHistory';
import Campuses from './Campuses';
import { fetchThings, stateProps, acts } from '../reducers';

class Root extends Component {

    componentDidMount() {
        this.props.fetchInitialData();
    }

    render() {
        return <div>
            <h1>WHATWHAT BITCHES</h1>            
            <NavBar />
            <WinterJokes />
            <Campuses />
        </div>
    }
}

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
        dispatch(fetchThings('campuses',acts.GET_CAMPUSES));
        dispatch(fetchThings());
        // what other data might we want to fetch on app load?
    }
});

export default connect(null, mapDispatch)(Root);