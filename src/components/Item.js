import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { deleteItem, changeStatus, modifyItem } from '../actions/todoAction';
const Item = ({ item }) => {
    const [editable, setEditable] = useState(false);
    const [valueEdit, setValueEdit] = useState('');
    const dispatch = useDispatch();

    const changeEdit = e => {
        setValueEdit(e.target.value);
    }
    const onDragStart = (ev, id) => {
        console.log('dragstart:', id);
        ev.dataTransfer.setData("todoID", id);
    }
    const clickEditButton = (id) => {
        if (editable === false) {
            setEditable(true);
        } else if (editable === true) {
            setEditable(false);
            const action = modifyItem(id, valueEdit);
            dispatch(action);
        }
    }
    return (
        <li key={item.todoID}
            class="list-group-item d-flex justify-content-between align-items-center rounded mt-3 shadow bg-white rounded"
            draggable
            onDragStart={(e) => onDragStart(e, item.todoID)}>
            <div>
                {
                    editable ? <input onChange={changeEdit} type='text' className='form-control' placeholder={item.todoValue} /> :
                        <div>{item.todoValue}</div>
                }
            </div>
            <div>
                {item.todoStatus === "1" ? (
                    <span class="badge badge-danger badge-pill"
                        onClick={() => dispatch(changeStatus(item.todoID, item.todoStatus))}>Not doing</span>
                ) : (item.todoStatus === "2" ? (
                    <span class="badge badge-primary badge-pill"
                        onClick={() => dispatch(changeStatus(item.todoID, item.todoStatus))}>Doing</span>
                ) : item.todoStatus === "3" ? (
                    <span class="badge badge-success badge-pill"
                        onClick={() => dispatch(changeStatus(item.todoID, item.todoStatus))}>Done</span>
                ) : <div></div>)}
                <button
                    onClick={() => clickEditButton(item.todoID)}
                    class="btn btn-info"> Edit</button>
                <button
                    onClick={() => dispatch(deleteItem(item.todoID))}
                    class="btn btn-secondary"> Delete</button>

            </div>
        </li >
    )
}

export default Item;