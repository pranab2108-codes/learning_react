import { useState, useContext } from "react";
import { CountContext } from './TeleportThroughContext.jsx';


function ContextAPI() {                          

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
  
  return <div>

            <CountRerenderer/>
            <Buttons setCount={setCount}/>

         </div>

}

function CountRerenderer() {                                          /* Now when the state variable count need to be teleport in another component genuinely we use the hook "useContext". */
  
  const value = useContext(CountContext);

  return <div>
          
            The count is: {value}
        
         </div>
  
}

function Buttons({ setCount }) {  

  const value = useContext(CountContext);                             /* Total 2 buttons are avialable here, one is for increment and other one is for decrement. */
                                                                      /* The name of state variable may or may bot be same as the variable which uses the useContext, which proves here by using "value" instead of "count". */
  return <div>   

            <button onClick={() => {

                setCount(value + 1);

              }} style={{backgroundColor: "green", color: "white"}}>Increase count

            </button>
            
            <button onClick={() => {

                setCount(value - 1);

              }} style={{backgroundColor: "red", color: "white"}}>Decrease count

            </button>

         </div>                                                       /* All these indicating the prop drilling, means where one component is need to be return here or lie inside of another component. */

}

export default ContextAPI;


// import { StrictMode } from 'react'                                 /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ContextAPI from '../ContextAPI/ContextAPI.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <ContextAPI/>
          
// );