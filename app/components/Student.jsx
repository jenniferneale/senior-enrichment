import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { acts, stateProps, fetchThings, deleteThing } from '../reducers';

const mapState = ({ currentStudent }) => ({ currentStudent });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInitialData: () => {
            console.log('ownProps.match.params.id' + ownProps.match.params.id);
            dispatch(fetchThings(stateProps.STUDENTS, acts.GET_STUDENT, ownProps.match.params.id));
        },
        handleUpdate: function (event) {

        },
        handleRemove: function (event) {
            var sure = confirm("Are you sure? Students should only be removed in event of expulsion or untimely demise.");
            if (sure) dispatch(deleteThing(stateProps.STUDENTS, acts.REMOVE_STUDENT, event.target.parentElement.getAttribute("class")));
        }
    }
};

class Student extends Component {
    componentDidMount() {
        this.props.fetchInitialData();
    }

    render() {
        const student = this.props.currentStudent;
        return <form onSubmit={this.props.handleUpdate} >
            <label>Name: {student.name}</label>
            <label>Email: {student.email}</label>
            <label>Campus: {student.Campus.name}</label>
            <label>Status: {student.status}</label>
            <button className={`{student.id} btn`}  onClick={this.props.handleRemove} > Delete</button>
            </form>
    }
}

export default withRouter(connect(mapState, mapDispatchToProps)(Student));