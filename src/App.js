import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputItem from './components/InputItem';
import TodoList from './components/TodoList';
import { useEffect } from 'react';
import { getAll } from './actions/todoAction';
import StartBoard from './views/StartBoard';


function App() {
  const todoList = useSelector(state => state.todo.list);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = getAll();
    dispatch(action);
  }, [dispatch]);

  console.log("Todo list: ", todoList);
  return (
    <div>
      <div >
        <center><h1 >Todo list</h1></center>
      </div>

      <InputItem />
      <StartBoard todoList={todoList} />
    </div>
  );
}

export default App;
