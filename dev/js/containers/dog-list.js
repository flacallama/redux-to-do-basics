import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectDog} from '../actions/index';

class DogList extends Component {

  createDogListItems(){
    console.log('dog-list', this.props)
    return this.props.dogs.map(dog => {
      return (
        <li
          key={dog.id}
          onClick={() => this.props.selectDog(dog)}
          >
          {dog.name}
        </li>
      )
    })
  }

  render() {

    return (
      <ul>
        {this.createDogListItems()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    dogs: state.dogs
  }
}

function matchDispatchToProps(dispatch){
  bindActionCreators({selectDog: selectDog}, dispatch)

}

export default connect(mapStateToProps)(DogList);
