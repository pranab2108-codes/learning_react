import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './todosSelectorFamily.js';
import { useEffect } from 'react';


function UseRecoilStateLoadable() {

  return <RecoilRoot>

            <Todo id={5}/>                                   
            <Todo id={4}/>
            <Todo id={3}/>
            
         </RecoilRoot>

}

function Todo({ id }) {
                                                                                    /* Here useRecoilStateLoadable is being used because as we know when the frontend asynchronously fetching the data like todos here from backend it might take few times, so in mean time the frontend need to make sure it still should engage the end user untill it give the data back to user. */
  const [currentTodo, setCurrentTodo] = useRecoilStateLoadable(todosAtomFamily(id));/* The useRecoilStateLoadable not gives the todo only it comes with an object structure like where it contains contents, state. */         

  useEffect(() => {

    if(id === 3) {

      setTimeout(() => {

        setCurrentTodo({

          id: 3,
          todo: "So this is useRecoilStateLoadable",
          completed: true,
          userId: 1

        });

      }, 5000);

    }

  }, []);

  if(currentTodo.state === "loading") {

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

export default UseRecoilStateLoadable;


// import { StrictMode } from 'react';                                              /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import useRecoilStateLoadable from '../StateManagement/Recoil/AtomFamily/useRecoilStateLoadable.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <useRecoilStateLoadable/>
          
// );