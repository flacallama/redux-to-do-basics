/* reducers combine reducers must be named 'index' */

import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import DogReducer from './reducer-dogs';
import ActiveDogReducer from './reducer-active-dog';


const allReducers = combineReducers({
  users:  UserReducer,
  activeUser: ActiveUserReducer,
  dogs: DogReducer,
  activeDog: ActiveDogReducer
})

export default allReducers;
