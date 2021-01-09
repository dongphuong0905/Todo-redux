import React, { useState } from "react";
import Item from "./Item";

function TodoList({ todoList }) {
  console.log('Print ' + todoList.length);
  // const not = [];
  // const doing = [];
  // const done = [];
  // if (todoList.length > 0) {
  //   todoList.map(item => {
  //     if (item.todoStatus === "1") {
  //       not.push(item);
  //     } else if (item.todoStatus === "2") {
  //       doing.push(item);
  //     } else {
  //       done.push(item);
  //     }
  //   });
  // }
  return (
    <div>
      {todoList.length ? (
        <ul className="list">
          {todoList.map(item => {
            return <Item item={item} key={item.todoID} />;
          })}
        </ul>
      ) : (
          <div className="no-tasks">No Tasks</div>
        )}
    </div>
  );
};

export default TodoList;
