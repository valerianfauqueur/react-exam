/**
 * Created by thomashourlier on 2/26/17.
 */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import jedi from 'redux/modules/jedi';

const reducer = combineReducers({
  jedi,
});

export default createStore(reducer, applyMiddleware(thunk));
