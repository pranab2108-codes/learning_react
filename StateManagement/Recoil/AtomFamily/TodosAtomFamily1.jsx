import { RecoilRoot, useRecoilValue } from 'recoil';
import { todoAtom1, todoAtom2 } from './todoAtom.js';


function TodosAtomFamily1() {                                 /* We know this, there can be multiple todos, our main problem definition was we need to create a comonent which will take the todo id as input and renders the todo. */

  return <RecoilRoot>

            <Todo id={1}/>                                   
            <Todo id={2}/>
            
         </RecoilRoot>

}

function Todo({ id }) {

  const currentTodo1 = useRecoilValue(todoAtom1);             /* Here we are creating 2 atoms for different todos, which restricting the todos to be dynamic, This does not scale well because every new todo would require creating a new atom manually. */
  const currentTodo2 = useRecoilValue(todoAtom2);             /* So in this way it is very difficult to create atoms for each todos, so it is very time taking. */

  if(id === 1) {                                              /* The earlier approach which we were thinking like putting all the todos inside of a single atom and render them is also a bad idea because let suppose we will update a single todo among them then ofcourse the atom change/updated so rerender fully. */
                                                              /* Even though we have not updated few todos also get rerender, which is unneccessary. */
    return <div>

              <h1><b>{currentTodo1.title}</b></h1>
              <h3>{currentTodo1.description}</h3>

           </div>

  }else if(id === 2) {
    
    return (

      <>

        <br/><br/>
        <h1><b>{currentTodo2.title}</b></h1>
        <h3>{currentTodo2.description}</h3>

      </>

    );

  }

}

export default TodosAtomFamily1;


// import { StrictMode } from 'react';                        /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import TodosAtomFamily1 from '../StateManagement/Recoil/AtomFamily/TodosAtomFamily1.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <TodosAtomFamily1/>
          
// );