import React, { useContext, useEffect } from "react";
import Item from "./Item";
import { useSelector, useDispatch } from 'react-redux';

function DoneList({ todoList }) {
  console.log('Print ' + todoList.length);
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

export default DoneList;
