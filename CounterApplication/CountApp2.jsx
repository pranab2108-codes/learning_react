import { useState } from "react";


function CountApp2() {                                                              /* Here CountApp2 is a component but this is the root component, a component can have many component. */

  const [count, setCount] = useState(0); 

  return (
                                                                                    /* Here we can see one of the biggest feature of component which is reusability. */
    <div style={{backgroundColor: "orange", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flex: "wrap", alignContent: "center"}}>

    	<CustomButton count={count} setCount={setCount} style={{color:"white"}}></CustomButton>                
			<CustomButton count={count+1} setCount={setCount} style={{color:"white"}}></CustomButton> 
			<CustomButton count={count-2} setCount={setCount} style={{color:"white"}}></CustomButton>
			<CustomButton count={count*3} setCount={setCount} style={{color:"white"}}></CustomButton>               
                                                                                    
    </div>                                                                          /* Here this component CountApp2 returning a function called CustomButton, inside of this it is returning a button. */
                                                                                    /* Count and setCount are parameters to this CustomButton. */
  );

}

function CustomButton(props) {                                                      /* This is also a component but this one is the child component of the parent component CountApp2. */
                                                                                    /* Here props have the inputs, or parameters which were passed to it. */
  function onClickHandler() {

    props.setCount(props.count + 1);

  }

  return (

    <button onClick={onClickHandler} style={{backgroundColor:props.style.color, color: "green", fontWeight: "bolder", height: "100px", width: "100px", display: "flex", justifyContent: "center", alignItems: "center"}}>Counter {props.count}</button>
  
  );

}

export default CountApp2;


// import { StrictMode } from 'react';                                              /* We have to write all these into src/main.jsx */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import CountApp2 from '../CounterApplication/CountApp2.jsx';

// createRoot(document.getElementById('root')).render(                              /* This is where the rendering and re-rendering is happening. */

//   <CountApp2 />

// );