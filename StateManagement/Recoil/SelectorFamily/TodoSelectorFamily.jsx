import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './todosSelectorFamily.js';
import { useEffect } from 'react';


function TodoSelectorFamily() {

  return <RecoilRoot>

            <Todo id={1}/>                                   
            <Todo id={2}/>
            <Todo id={3}/>
            <TodoUpdater id={3}/>
            
         </RecoilRoot>

}

function Todo({ id }) {

  const [currentTodo, setCurrentTodo] = useRecoilState(todosAtomFamily(id));          

  return (
                                                                                /* The URL from where we are exactly fetching is DummyJSON todos, so in there it not mentioned anything title and description. */
      <>

        <h1><b>{currentTodo.todo}</b></h1>                                     
        <h3>{currentTodo.completed ? "Completed" : "Not Completed"}</h3>

      </>
                                                                                /* It shows in a way like it have id, todo(same as title), completed and userID field only, no any other fields. */
    );

}

function TodoUpdater({ id }) {

  const updateTodo = useSetRecoilState(todosAtomFamily(id));

  useEffect(() => {

    setTimeout(() => {

      updateTodo({

        id: 3,
        todo: "So i learned about selectorFamily",
        completed: true,
        userId: 1

      });

    }, 5000);

  }, []);

}

export default TodoSelectorFamily;


// import { StrictMode } from 'react';                                          /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import TodoSelectorFamily from '../StateManagement/Recoil/AtomFamily/TodoSelectorFamily.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <TodoSelectorFamily/>
          
// );