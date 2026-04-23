import { useState } from "react";
import { useEffect } from "react";                                        /* The useState allow us to perform side effects in function components, side effects are the operations that can affect other components or can't be done during rendering, such as fetching, subscription, or manually changing the DOM in React components. */


function UseEffect1() {                                                   /* If we fetch something from any site and we do rendering that, then it will act as a loop, it will keep rerender the application and do fetch each time. */

  const [todos, setTodos] = useState([]);

  useEffect(() => {

    fetch("https://sum-server.100xdevs.com/todos")
      .then(async function (res) {

        const json = await res.json();
        setTodos(json.todos);                                             /* Whenever the setTodos get called this application will again rerender if we would haven't used this useEffect then the fetch call would have called again which is unneccessary, and it's making the whole situation look like a loop. */

      });                                                                 /* In a F1 car race there are 100laps but the car need to stop in pit stop under some condition only, not all the time unneccessarily. */

  }, []);                                                                 /* This empty array is being called as dependency array, it says this fetch call will only render once and not rerender again at all, so basically it is define for when should the callback function run, it only take input as state variable. */

  return (

    <div>

      {todos.map((todo) => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    
    </div>

  );

}

function Todo(){

    return <div>

        <h1>{title}</h1>
        {description}

    </div>

}

export default UseEffect1;


// import { StrictMode } from 'react'                                     /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseEffect1 from '../UseEffect/UseEffect1.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <UseEffect1 />
    
// );