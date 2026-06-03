import { RecoilRoot, useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { todosAtomFamily } from './todosSelectorFamily.js';
import { useEffect } from 'react';

function UseRecoilValueLoadable() {

  return <RecoilRoot>

            <Todo id={21}/>                                   
            <Todo id={4}/>
            <Todo id={33}/>
            <TodoUpdater id={3}/>
            
         </RecoilRoot>

}

function Todo({ id }) {
                                                                            /* Here useRecoilValueLoadable is also being used because as we know when the frontend asynchronously fetching the data like todos here from backend it might take few times, so in mean time the frontend need to make sure it still should engage the end user untill it give the data back to user. */
  const currentTodo = useRecoilValueLoadable(todosAtomFamily(id));          /* The useRecoilStateLoadable not gives the todo only it comes with an object structure like where it contains contents, state. */         
                                                                            /* The only difference is we use "useRecoilStateLoadable" at there, when we know we might need to do update also, means the state variable/atom. */
  if(currentTodo.state === "loading") {                                     /* Otherwise when we know we only want the value, we might not need to update the state variable/atom, we can use "useRecoilValueLoadable". */

    return <div>

              Loading...😔😔😔

           </div>

  }else if(currentTodo.state === "hasValue") {

    return (

      <>

        <h1><b>{currentTodo.contents.todo}</b></h1>                                     
        <h3>{currentTodo.contents.completed ? "Completed" : "Not completed"}</h3>

      </>

    );

  }

}

function TodoUpdater({ id }) {

  const updateTodo = useSetRecoilState(todosAtomFamily(id));

  useEffect(() => {

    setTimeout(() => {

      updateTodo({

        id: 3,
        todo: "So this is useRecoilStateLoadable",
        completed: true,
        userId: 1

      });

    }, 5000);

  }, []);

}

export default UseRecoilValueLoadable;


// import { StrictMode } from 'react';                                      /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import export default UseRecoilValueLoadable from '../StateManagement/Recoil/AtomFamily/UseRecoilValueLoadable.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <UseRecoilValueLoadable/>
          
// );