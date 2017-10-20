import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';
import { fetchThings, stateProps, acts } from '../reducers';



class Campuses extends Component {

    componentDidMount() {
        this.props.fetchInitialData();
    }

    render() {
        return <div className="campuses center">
            <h2>Campuses</h2>
            <ul>
                {this.props.campuses.map(campus => <li key={campus.id}>
                    <NavLink to={`/campuses/${campus.id}`}>
                        <div className="col-sm-6 campus center">
                            {campus.name}
                            <img src={campus.image} className="img-responsive" />
                            </div>
                        </NavLink>
                    </li>
                )}
            </ul>
        </div>
    }
}

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

export default withRouter(connect(mapState, mapDispatchToProps)(Campuses));