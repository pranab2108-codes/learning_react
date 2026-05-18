import { useState } from "react";


function PropDrilling() {

  const [count, setCount] = useState(0);                             /* This main application component which is PropDrilling has count and setCount. */

  return (                                                           /* Here we are returning the component Count. */

    <div>

      <Count count={count} setCount={setCount}/>

    </div>

  );

}

function Count({ count, setCount }) {                                /* Inside of this Count component which was only used to show the count number, now it is being use to also return a component called Buttons, but as per this component Count, it was never needed the setCount. */
  
  return <div>

            The count is: {count}
            <Buttons count={count} setCount={setCount}/> 
          
         </div>                                                      /* But we ae drilling this setCount or passing this setCount in to the component Count, because the Buttons component need it to do either increment or decrement. */
                                                                     /* So we can say this, the component Count never needed the setCount still it is being passed, so it is unneccessary. */
}

function Buttons({ count, setCount }) {                              /* Total 2 buttons are avialable here, one is for increment and other one is for decrement, which ofcourse need the setCount. */
  
  return <div> 

            <button onClick={() => {

                setCount(count + 1);

              }} style={{backgroundColor: "green", color: "white"}}>Increase count

            </button>
            
            <button onClick={() => {

                setCount(count - 1);

              }} style={{backgroundColor: "red", color: "white"}}>Decrease count

            </button>

         </div>                                                      /* All these indicating the prop drilling, means where one component is need to be return here so lie inside of another component. */

}

export default PropDrilling;


// import { StrictMode } from 'react'                                /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import PropDrilling from '../PropDrilling/PropDrilling.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <PropDrilling/>
          
// );