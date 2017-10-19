import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { acts, stateProps, fetchThings, deleteThing } from '../reducers';

const mapState = ({ currentCampus }) => ({ currentCampus });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInitialData: () => {
            dispatch(fetchThings(stateProps.CAMPUSES, acts.GET_CAMPUS, ownProps.match.params.id));
        },
        handleUpdate: function (event) {

        },
        handleRemove: function (event) {
            var sure = confirm("Are you sure? Campuses should only be removed in event of alien attack or cataclysm resulting in total destruction.");
            if (sure) dispatch(deleteThing(stateProps.CAMPUSES, acts.REMOVE_CAMPUS, event.target.parentElement.getAttribute("class")));
        }
    }
};

class Campus extends Component {
    componentDidMount() {
        this.props.fetchInitialData();
        console.log("currentCampus "+Object.keys(this.props.currentCampus));
    }

    render() {
        const campus = this.props.currentCampus;
        if (campus && campus.Students) {
            return <p>{campus.name}, {campus.Students.length}</p>
        } else return <div></div>
        
    }
}

export default withRouter(connect(mapState, mapDispatchToProps)(Campus));