import { useState, useContext } from "react";
import { CountContext } from './TeleportThroughContext.jsx';


function StateManagement() {                          

  const [count, setCount] = useState(0);                              /* This main application component which is ContextAPI has count and setCount. */
                                                                      /* Wrap anyone that wants to use the teleported value inside a provider. */
  return (                                                            /* Here we are returning the component Count. */

    <div>

      <CountContext.Provider value={count}>

        <Count setCount={setCount}/>

      </CountContext.Provider>
      
    </div>                                                            /* Here in the Count component we had to pass the state variable count before contextAPI present because then only this state variable count would be pass to components like CountRerenderer and Buttons for printing the count number and need in setCount respectively. */
  
  );

}

function Count({ setCount }) {                                        /* Inside of this Count component which was only used to show the count number, now it is being use to also return a component called Buttons, but as per this component Count, it was never needed the setCount. */
  
  console.log("Let's see whether it is rerendering or not");          /* Here we can see the state variable count is not mentioned here, because of no need, but still this component is rerendering, which is not optimize at all, that's why we had to come up with state management. */
  return <div>

            <CountRerenderer/>
            <Buttons setCount={setCount}/>

         </div>

}

function CountRerenderer() {                                          /* Now when the state variable count need to be teleport in another component genuinely we use the hook "useContext". */
  
  const count = useContext(CountContext);

  return <div>
          
            The count is: {count}
        
         </div>
  
}

function Buttons({ setCount }) {  

  const count = useContext(CountContext);                             /* Total 2 buttons are avialable here, one is for increment and other one is for decrement. */
  
  return <div>   

            <button onClick={() => {

                setCount(count + 1);

              }} style={{backgroundColor: "green", color: "white"}}>Increase count

            </button>
            
            <button onClick={() => {

                setCount(count - 1);

              }} style={{backgroundColor: "red", color: "white"}}>Decrease count

            </button>

         </div>                                                       /* All these indicating the prop drilling, means where one component is need to be return here or lie inside of another component. */

}

export default StateManagement;


// import { StrictMode } from 'react'                                 /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import StateManagement from '../StateManagement/StateManagement.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <StateManagement/>
          
// );