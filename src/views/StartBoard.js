import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from '../components/TodoList';
import { useDispatch } from 'react-redux';
import { changeStatus } from '../actions/todoAction';

function StartBoard({ todoList }) {
    const not = [];
    const doing = [];
    const done = [];
    const dispatch = useDispatch();
    if (todoList.length > 0) {
        todoList.map(item => {
            if (item.todoStatus === "1") {
                not.push(item);
            } else if (item.todoStatus === "2") {
                doing.push(item);
            } else {
                done.push(item);
            }
        });

    }
    const onDragOver = (ev) => {
        ev.preventDefault();
        console.log('drag');
    }

    const onDrop = (ev, status) => {
        let id = ev.dataTransfer.getData("todoID");
        let statusNumber = "";
        if (status === "todo") {
            statusNumber = "1";
        } else if (status === "doing") {
            statusNumber = "2"
        } else if (status === "done") {
            statusNumber = "3"
        }
        const action = changeStatus(id, statusNumber);
        dispatch(action);
        console.log("drop: ", id, statusNumber);
    }
    return (
        <div class="container ">
            <div class="row " >
                <div class="col-md-4 shadow-lg bg-white rounded border border-danger">
                    <span class="d-flex justify-content-center bg-danger text-white rounded "><h2>To do</h2></span>
                    <div className='todo'
                        class="d-flex justify-content-center"
                        onDragOver={(e) => onDragOver(e)}
                        onDrop={(e) => onDrop(e, "todo")}>
                        <TodoList todoList={not} />
                    </div>

                </div>
                <div class="col-md-4 shadow-lg bg-white rounded border border-primary">
                    <span class="d-flex justify-content-center bg-primary text-white rounded"><h2>Doing</h2></span>
                    <div className='doing'
                        class="d-flex justify-content-center"
                        onDragOver={(e) => onDragOver(e)}
                        onDrop={(e) => onDrop(e, "doing")}>
                        <TodoList todoList={doing} />
                    </div>

                </div>
                <div class="col-md-4 shadow-lg bg-white rounded border border-success">
                    <span class="d-flex justify-content-center bg-success text-white rounded"><h2>Done</h2></span>
                    <div className='Done'
                        class="d-flex justify-content-center"
                        onDragOver={(e) => onDragOver(e)}
                        onDrop={(e) => onDrop(e, "done")}>
                        <TodoList todoList={done} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StartBoard

