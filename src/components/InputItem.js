import React, { useContext, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { addItem, getAll } from '../actions/todoAction';
import { useDispatch } from "react-redux";

const InputItem = () => {
    const [val, setVal] = useState("");
    const dispatch = useDispatch();

    const changeInput = e => {
        setVal(e.target.value);
    }
    const submitItem = e => {
        e.preventDefault();
        const itemEdit = null;
        if (itemEdit === null) {
            // const item = {
            //     todoID: 1,
            //     todoValue: val,
            //     todoCreateTime: "2020/12/05 11:00 PM",
            //     todoStatus: "1"
            // }
            const action = addItem(val);
            dispatch(action);
            const action2 = getAll();
            dispatch(action2);
            setVal("");
        } else {

            // modifyItem(val, itemEdit.todoID);
        }
    }

    return (
        <form onSubmit={submitItem}>
            <div class="input-group mb-2 ">
                <input
                    onChange={changeInput}
                    value={val}
                    type="text"
                    class="form-control col-xs-4"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2" 
                    size="50"  />
                <div class="input-group-append">
                    <button class="btn btn-outline-info" type="submit">Add</button>
                </div>
            </div>
        </form>
    );

};

export default InputItem;