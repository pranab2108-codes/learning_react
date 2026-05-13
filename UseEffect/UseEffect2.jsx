import { useState, useEffect } from "react";
import axios from "axios";


function UseEffect2() {
  
  const [selectedId, setSelectedId] = useState(0);
                                                                 /* When the first button get clicked the id or selectedId become 1, then for second button it become 2, and so on. */
  return (

    <div>

      <button onClick={function () {

          setSelectedId(1);

        }}>Button 1

      </button>

      <button onClick={function () {

          setSelectedId(2);

        }}>Button 2

      </button>

      <button onClick={function () {

          setSelectedId(3);

        }}>Button 3
        
      </button>
      <Todo id={selectedId}/>

    </div>

  );

}

function Todo({ id }) {

  const [todo, setTodo] = useState([]);

  useEffect(() => {

    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(function (response) {

        setTodo(response.data.todo);

    });

  }, [id]);                                                      /* Here it means if any button get clicked means id will change, so the endpoint/URL going to hit again which makes it fetch new todo, but if we would have not given the id means let it be an empty array, then doesn't matter how many times we click any button among these three, the todo will never get change means fetch will run only one time not anymore at all again. */

  return ( 
  
    <div>

        Id: {id}
        <h1>{todo.title}</h1>
        <h4>{todo.description}</h4>

    </div>

    );

}

export default UseEffect2;


// import { StrictMode } from 'react'                            /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseEffect2 from '../UseEffect/UseEffect2.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <UseEffect2 />
    
// );