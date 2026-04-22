import { useState } from "react";
import { useEffect } from "react";


function UseMemo2() {

  const [counter, setCounter] = useState(0);                                            /* Here this counter is showing the counting of button. */
  const [inputValue, setInputValue] = useState(1);                                      /* Here the inputValue is for to finding the sum from 1 to the number or inputValue. */
  const [total, setTotal] = useState(1);                                                /* The useEffect never return a value or calculated any value, because it is been used for side effects like fetch data, setTimeout, event listeners, DOM manipulation, subscription. */
  useEffect( () => {                                                                    /* That's why we are taking a new state here so that the sum can be store. */                                                               

    let sum =0;                                                                         /* when the button is getting rerender the whole application UseMemo1 also rerender so we have kept this for loop inside of useEffect, so that it can run only on certain conditions. */
    for (let i = 1; i <= inputValue; i++) {                                             /* Now the only problem is, it is not using memoization. */

        sum +=  i;

    }
    setTotal(sum);                                                                      /* When the inputValue will change the sum should be calculated again means it should rerender the whole application */

  },[inputValue]);                                                                      /* This is the condition, when the inputValue get change, at that moment only this for loop will run. */                  

  return (

    <div>

      <input onChange={function (e) {

          setInputValue(e.target.value);

        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br /><br />

      Sum from 1 to {inputValue} is {total}
      <br /><br />

      <button onClick={() => {

          setCounter(counter + 1);

        }} style={{backgroundColor: "yellow"}}
      >Counter ({counter})
      </button>

    </div>

  );

}

export default UseMemo2;


// import { StrictMode } from 'react'                                                   /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseMemo2 from '../UseMemo/UseMemo2.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <UseMemo2 />
    
// );