import {combineReducers} from 'redux';
import {useReducer} from 'react';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    todo: todoReducer 
});

export default rootReducer;