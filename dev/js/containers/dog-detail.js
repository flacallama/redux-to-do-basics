import React, {Component} from 'react';
import {connect} from 'react-redux';

class DogDetail extends Component {


  render () {
    console.log('dog-details', this.props)

    return (
      <div>
        <p>{this.props.dog}</p>

      </div>

    )



  }
}

function mapStateToProps(state) {
  return {
    dog: state.activeDog
  };
}

export default connect(mapStateToProps)(DogDetail)
