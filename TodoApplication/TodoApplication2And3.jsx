import { useState } from "react";


function TodoApplication2() {

  const [todos2, setTodos2] = useState([{

    title: "Goto Gym",
    description: "From 6:00 AM - 8:00 AM",
    completed: false,

  },{

    title: "Goto Study DSA",
    description: "From 9:00 AM - 12:00 PM",
    completed: true,

  }]);

  function addTodo2() {

    let newTodos = [];

    for(let i = 0; i < todos2.length; i++){

      newTodos.push(todos2[i]);

    }
    newTodos.push({

      title: "Hey",
      description: "I am just checking"

    });
    setTodos2(newTodos);

  }

  return (

    <div>       

      <Todo2 title="Pranab" description="Software Engineer"></Todo2>                                                         
      <Todo2 title="Deepak" description="Software Engineer"></Todo2>
      <Todo2 title="Souvik" description="Sr. Developer"></Todo2>
      <Todo2 title={todos2[0].title} description={todos2[0].description}></Todo2>                       
      <Todo2 title={todos2[1].title} description={todos2[1].description}></Todo2>
      {todos2[2] ? (<Todo2 title={todos2[2].title} description={todos2[2].description}/>) : null}            
      <button onClick={addTodo2}>Adding a random todo</button>

    </div>

  );

}

function Todo2(props) {

  return <div style={{background: "blue"}}>

            <h1 style={{color: "red"}}>{props.title}, {props.description}</h1>

         </div>

}
    

function TodoApplication3() {

  const [todos3, setTodos3] = useState([{

    title: "Goto Kitchen",
    description: "From 12:00 PM - 2:00 PM",
    completed: true,

  },{

    title: "Goto Shop Market",
    description: "From 5:00 PM - 6:00 PM",
    completed: true,

  }]);

  function addTodo3() {
        
    setTodos3([...todos3, {

      title: "Now study CP",
      description: "From TLE Eliminators"

    }]);
    setTodos3([...todos3, {           
                                                                                                      /* Here we are doing setTodos again below of one setTodos so order matters here, now only the 2nd one get render each time. */
      title: "Now time for System Design",
      description: "Learn it from Coder Army "

    }]);

  }

  return (

    <div>           

      {todos3.map(function(todo) {

        return <Todo3 title={todo.title} description={todo.description}></Todo3>

      })}
      <button onClick={addTodo3}>Adding a random todo</button>
            
    </div>
    
  )

}

function Todo3(props) {

  return <div style={{background: "green"}}>

            <h1 style={{color: "aquamarine"}}>{props.title}, {props.description}</h1>

         </div>

}

export { TodoApplication2 , TodoApplication3 };                                                       /* When there will be more than 1 functions to export we shouldn't use default. */


// import { StrictMode } from 'react';                                                                /* It should be written inside src/main.jsx. */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import  { TodoApplication2, TodoApplication3 } from '../TodoApplication/TodoApplication2And3';

// createRoot(document.getElementById('root')).render(
  
//   <> 

//     <TodoApplication2 />
//     <TodoApplication3 />

//   </>

// );