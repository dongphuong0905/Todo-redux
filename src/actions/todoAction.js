import {ACTION} from '../constants/ActionTypes';
import services from '../services/TodoService';

export function addItem(itemValue){
    return(dispatch) => {
        services.addItem(itemValue).then((res)=>{
            dispatch(addItemSuccess(res.data));
            dispatch(getAll());
        });
    }
}

export function addItemSuccess(todoValue){
    return{
        type: ACTION.ADD_TODO,
        payload: todoValue
    }
}

export function deleteItem(id){
    return(dispatch) => {
        services.deleteItem(id).then((res)=>{
            dispatch(deleteItemSuccess(res.data));
            dispatch(getAll());
        });
    }
}

export function deleteItemSuccess(id){
    return{
        type: ACTION.DELETE_TODO,
        payload: id
    }
}

export function modifyItem(id, editValue){
    return(dispatch) =>{
        services.modifyItem(id, editValue).then((res)=>{
            dispatch(modifyItemSuccess(res.data));
            dispatch(getAll());
        });
    }
}

export function modifyItemSuccess(item){
    return{
        type: ACTION.MODIFY_TODO,
        payload: item
    }
}

export function getAll(){
    return(dispatch) => {
        services.getList().then((res)=>{
            dispatch(getAllSuccess(res.data));
        });
    }
}

export function getAllSuccess(list){
    return{
        type: ACTION.GET_ALL_TODO,
        payload: list
    }
}

export function changeStatus(id, status){
    return(dispatch) => {
        services.changeStatus(id, status).then((res)=>{
            dispatch(changeStatusSuccess(res.data));
            dispatch(getAll());
        });
    }
}

export function changeStatusSuccess(item){
    return{
        type: ACTION.MODIFY_TODO,
        payload: item
    }
}