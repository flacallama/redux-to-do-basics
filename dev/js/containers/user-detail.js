import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component {

  render () {
    if(!this.props.user){
      return <h4>Select a user...</h4>
    }
    return (
      <div>
        <img src={this.props.user.image}></img>
        <h2>{this.props.user.first} {this.props.user.last}</h2>
        <h4>age: {this.props.user.first}</h4>
        <h4>about: {this.props.user.description}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.activeUser
  };
}

export default connect(mapStateToProps)(UserDetail);
