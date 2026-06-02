import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './todosAtomFamily.js';
import { useEffect } from 'react';


function TodoAtomFamily2() {

  return <RecoilRoot>

            <Todo id={1}/>                                   
            <Todo id={2}/>
            <Todo id={3}/>
            <TodoUpdater id={3}/>
            
         </RecoilRoot>

}

function Todo({ id }) {

  const currentTodo = useRecoilValue(todosAtomFamily(id));          /* In this way we can fetch a particular todo by it's id, so we have to . */
                                                                    /* So the only problem here is, we are not fetching the data from server or backend till now, we were only fetching these todos from memory. */
  return (

      <>

        <h1><b>{currentTodo.title}</b></h1>
        <h3>{currentTodo.description}</h3>

      </>

    );

}

function TodoUpdater({ id }) {

  const updateTodo = useSetRecoilState(todosAtomFamily(id));

  useEffect(() => {

    setTimeout(() => {

      updateTodo({

        id: 3,
        title: "She dumped me 😭😭😭",
        description: "So hit back gym again"

      });

    }, 5000);

  }, []);

}

export default TodoAtomFamily2;


// import { StrictMode } from 'react';                              /* It should be writen in src/main.jsx. */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import TodoAtomFamily2 from '../StateManagement/Recoil/AtomFamily/TodoAtomFamily.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <TodoAtomFamily2/>
          
// );