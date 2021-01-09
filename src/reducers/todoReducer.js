import React from 'react';
import { ACTION } from '../constants/ActionTypes';
import services from '../services/TodoService';


const initialState = {
    list: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.ADD_TODO:
            return {
                ...state,
                list: action.payload
            }
        case ACTION.DELETE_TODO:
            return state;
        case ACTION.MODIFY_TODO:
            return state;
        case ACTION.GET_ALL_TODO:
            return{
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}

export default todoReducer;