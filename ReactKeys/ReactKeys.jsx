import React from "react";
import { useState } from "react";
let id = 4;

                                                                                  /* Each child in a list should have a unique "key" prop. */
function ReactKeys() {

  const [todos, setTodos] = useState([

    {

      id: 1,
      title: "Go to Gym",
      description: "Go to gym today",

    },
    {

      id: 2,
      title: "Eat food",
      description: "Eat food now",

    },
    {

      id: 3,
      title: "Go to class",
      description: "Go to class at evening",

    },

  ]);
     
  function addTodo() {

    setTodos([...todos, {

      id:id++,
      title: Math.random(),
      description: Math.random()

    }]);

  }
                                                                                  /* Here key play an important role, if our todos ever been updated like id2 todo got replaced by id4 for some reason or few got removed totally or few got added so it help to optimally rerender otherwise React find the difference very difficultly and remove the whole DOM and add according to the new state. */
  return <div> 

            {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>)}
            <button onClick={addTodo}>Add a todo</button>

         </div>

}

function Todo({ title, description }) {

  return (

    <div>

      <h1>{title}</h1>
      <h4>{description}</h4>

    </div>

  );

}

export default ReactKeys;


// import { StrictMode } from 'react'                                             /* It should be written inside src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ReactKeys from '../ReactKeys/ReactKeys.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <ReactMemo />
    
// );