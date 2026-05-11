import { useEffect, useState } from "react";


function useTodos() {                                        /* The customHooks are always start with "use" word. */
                                                             /* The custom hooks are only can be called either from component or by other custom hooks. */
  const [todos, setTodos] = useState([]);

  useEffect(() => {

    axios.get("https://sum-server.100xdevs.com/todos")
      .then((res) => {

        setTodos(res.data.todos);

      });

  }, []);

  return todos;

}

function CustomHook() {

  const todos = useTodos();

  return (

    <div>

      {todos}

    </div>

  );

}

export default CustomHook;


// import { StrictMode } from 'react'                        /* It should be written inside src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import CustomHook from '../CustomHook/CustomHook.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <CustomHook />
    
// );