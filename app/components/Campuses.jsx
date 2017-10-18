import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapState = ({ campuses }) => ({ campuses });

const mapDispatchToProps = (dispatch, ownProps) => {
    return {        
        handleAdd: function (event) {

        }
    }
};

class Campuses extends Component {

    

    render() {
        return <div>
            <h2>Campuses</h2>
            <ul>
                {this.props.campuses.map(campus =>
                    <div key={campus.id}>
                        <h3>{campus.name}</h3>
                        <img src={campus.image} />
                    </div>
                )}
            </ul>
        </div>
    }
}

export default connect(mapState, mapDispatchToProps)(Campuses);