import React from 'react';
require('../../scss/style.scss')
import UserList from '../containers/user-list'
import UserDetail from '../containers/user-detail'
import DogList from '../containers/dog-list'
import DogDetail from '../containers/dog-detail'

const App = () => (

  <div>
    <h2>Username List:</h2>
    <UserList />
    <hr/>
    <h2>User Details:</h2>
    <UserDetail />
    <h2>Dogname List:</h2>
    <DogList />
    <DogDetail />
  </div>


)
;

export default App;
