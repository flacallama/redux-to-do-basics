import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';



class UserList extends Component {

  createListItems(){
    return this.props.users.map(user => {
      return (
        <li
          key={user.id}
          onClick={(e) => this.props.selectUser(user)}
          >
          {user.first} {user.last}
        </li>
      )
    })
  }

  render () {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function matchDispatchToProps(dispatch){
  /* bind together the prop "selectUser" to the function "selectUser". now it's got the same name so we dont get confused and voila we can use the function*/
  return bindActionCreators({selectUser: selectUser}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);
