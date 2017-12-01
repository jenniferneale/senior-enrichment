import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { acts, stateProps, fetchThings, deleteThing } from '../reducers';
import { Button } from 'react-bootstrap';

const mapState = ({ currentStudent, campuses }) => ({ currentStudent, campuses });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInitialData: () => {
            console.log('ownProps.match.params.id' + ownProps.match.params.id);
            dispatch(fetchThings(stateProps.STUDENTS, acts.GET_STUDENT, ownProps.match.params.id));
            dispatch(fetchThings(stateProps.CAMPUSES, acts.GET_CAMPUSES));
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
        if(student && student.name) return <form onSubmit={this.props.handleUpdate} >
            <table>
                <tr><td><label>Name:</label></td><td><input type="text" defaultValue={student.name}></input></td></tr>
                <tr><td><label>Email:</label></td><td><input type="text" defaultValue={student.email}></input></td></tr>
                <tr><td><label>Campus:</label></td><td>
                    <select id="campusSelect">
                        {this.props.campuses.map(campus => {
                            <option key={campus.id} value={campus.id}>{campus.name}</option>
                        })}
                    </select> 
                </td></tr>
                <tr><td><label>Status:</label></td><td>
                    <select id="campusSelect">
                        <option value="In Good Standing">In Good Standing</option>
                        <option value="Alumnus">Alumnus</option>
                        <option value="Expelled">Expelled</option>
                        <option value="Deceased">Deceased</option>
                    </select>
                </td></tr>
            <Button className={`{student.id} btn`} onClick={this.props.handleRemove} > Delete</Button>
            <Button className={`{student.id} btn`} onClick={this.props.handleUpdate} > Update</Button>
                </table>
        </form>
        else return <div></div>
    }
}

export default withRouter(connect(mapState, mapDispatchToProps)(Student));