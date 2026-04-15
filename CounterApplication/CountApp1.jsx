import { useState } from "react";                                          /* Here the rendering or re-rendering logics are written. */

                                      
function CountApp1(){
                                                                           /* This is called array destructuring way, if let arr = [10,20], we access them like let first = arr[0]; let second = arr[1], but in destructuring way we can do let [fisrt, second] = arr. */
    const [count,setCount] = useState(0);                                  /* We can't initialize the state variable like let state = { count: 0 } because react always follow a certain way to initialize of the state, here 0 represent the  */
                                                                           /* Now react will look for the count variable which is a state variable, whenever it will change react will update this, in this form we can say that the 1st value will be stored to count and 2nd will be stored in setCount. */
    function onClickHandler(){

        setCount(count+1);                                                 /* We can't write count = count +1, it follow in a certain way. */
                                                                           /* Here because of the setCount got called, it's increment the state variable, so state change means rerender will get trigger, so it hanled by React itself under the hood. */
    }

    return (                                                               /* Here it act as component of React, but our CountApp1 is returning this, so we can call this function as Component. */

        <div style={{height: "100vh",backgroundColor: "aquamarine",display:"flex",justifyContent:"center",alignItems:"center"}}>
            
            <button onClick={onClickHandler} style={{color: "yellow",fontWeight:"bolder",height:"100px",width:"100px"}}>Counter {count}</button>       
         
        </div>                                                              /* In React whenever we use javascript variable, object or anything we always wrap that inside of curly braces. */

    )

}

export default CountApp1;

                                                                    
// import { StrictMode } from 'react';                                      /* We have to write all these into src/main.jsx */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import CountApp1 from '../CounterApplication/CountApp1.jsx';
// createRoot(document.getElementById('root')).render(                      /* This is where the rendering and re-rendering is happening. */

//     <CountApp1 />

// );