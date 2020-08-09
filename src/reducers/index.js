import { combineReducers } from 'redux';

import posts from './posts';
import employees from './employees';

export default combineReducers({
  posts,
  employees
});
