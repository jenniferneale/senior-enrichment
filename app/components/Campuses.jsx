import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router';
import { fetchThings, stateProps, acts } from '../reducers';

const mapState = ({ campuses }) => ({ campuses });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInitialData: () => {
            dispatch(fetchThings(stateProps.CAMPUSES, acts.GET_CAMPUSES));            
        },
        handleAdd: function (event) {

        }
    }
};

class Campuses extends Component {

    componentDidMount() {
        this.props.fetchInitialData();
    }

    render() {
        return <div className="campuses center">
            <h2>Campuses</h2>
            <ul>
                {this.props.campuses.map(campus => <li key={campus.id}>
                    <a href={`/campuses/${campus.id}`}>
                            <div className="col-sm-6 campus center">
                            {campus.name}
                                <img src={campus.image} className="img-responsive" />
                            </div>
                        </a>
                    </li>
                )}
            </ul>
        </div>
    }
}

export default withRouter(connect(mapState, mapDispatchToProps)(Campuses));