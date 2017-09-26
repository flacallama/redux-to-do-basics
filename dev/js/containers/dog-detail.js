import React, {Component} from 'react';
import {connect} from 'react-redux';

class DogDetail extends Component {


  render () {
    if(!this.props.dog){
      return <h4>Pick yo dog...</h4>
    }
    return (
      <div>
        <h2>{this.props.dog.name}</h2>
        <h4>age: {this.props.dog.age}</h4>
        <h4>breed: {this.props.dog.breed}</h4>
        <h4>disposition: {this.props.dog.disposition}</h4>
      </div>

    )



  }
}

function mapStateToProps(state) {
  console.log('statefromdogdeets', state)
  return {
    dog: state.activeDog
  };
}

export default connect(mapStateToProps)(DogDetail)
