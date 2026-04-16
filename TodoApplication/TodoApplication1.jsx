import { useState } from "react";


function TodoApplication1(){

    const [todos, setTodos] = useState([{

        title: "Goto Gym",
        description: "From 6:00 AM - 8:00 AM",
        completed: false,

    },{

        title: "Goto Study DSA",
        description: "From 9:00 AM - 12:00 PM",
        completed: true,

    }]);
                                                                                                      /* We can't directly put the todos because it won't run because in JavaScriptXml React can render directly few things like Strings, Numbers, JSX elements, Array of JSX elements, and here todos is an array of objects. */
    return (

        <div>

            {JSON.stringify(todos)}    

        </div> 
                                                                                                      /* That's why we had to do strigifyso that we can render it. */
    );

}

export default TodoApplication1;


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import TodoApplication1 from '../TodoApplication/TodoApplication1';
// createRoot(document.getElementById('root')).render(
  
//     <> 
//     <TodoApplication2 />
//     <TodoApplication3 />
//     </>

// );