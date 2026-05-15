import { useState, useEffect } from 'react';
import { CreateTodo } from './Components.jsx';
import { Todos } from './Todos.jsx';


function TodosApp() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {                                                   /* Here the useEffect runs only 1 time, if we wouldn't used useEffect then, after fetching we are doing setTodos so it means state got change that's why the control again goes to the TodosApp where it will again do fetch, so this create a loop kind of structure. */

    fetch("http://localhost:3000/todos")
      .then(res => res.json())
      .then(data => setTodos(data.todos));

  }, []);
  
  return(

    <div>

      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>

    </div>

  );

}

export default TodosApp;