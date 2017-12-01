import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, NavLink, Link } from 'react-router-dom';
import { acts, stateProps, fetchThings, deleteThing } from '../reducers';

const mapState = ({ students }) => ({ students });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchInitialData: () => {            
            dispatch(fetchThings(stateProps.STUDENTS, acts.GET_STUDENTS));
        },
        handleAdd: function (event) {

        },
        handleRemove: function (event) {
            var sure = confirm("Are you sure? Students should only be removed in event of expulsion or untimely demise.");
            if (sure) dispatch(deleteThing(stateProps.STUDENTS, acts.REMOVE_STUDENT, event.target.parentElement.getAttribute("class")));            
        }
    }
};

class Students extends Component {

    componentDidMount() {
        this.props.fetchInitialData();
    }

    render() {
        return <div className="students">
            <h2>Students</h2>
            <table className="table table-striped table-hover col-sm-11">
                <thead>
                    <tr className="row">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Campus</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log(this.props.students)}
                    {this.props.students.map(student =>
                        <tr key={student.id} className="row">
                            <td>{student.id}</td>
                            <td><NavLink to={`/students/${student.id}`}>{student.name}</NavLink></td>
                            <td><NavLink to={`/campuses/${student.Campus.id}`}>{student.Campus.name}</NavLink></td>
                            <td className={student.id}><button className="btn btn-default" id="x" onClick={this.props.handleRemove}>X</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    }
}

export default withRouter(connect(mapState, mapDispatchToProps)(Students));