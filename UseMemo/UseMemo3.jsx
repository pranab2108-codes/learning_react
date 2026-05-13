import { useMemo, useState } from "react";


function UseMemo3() {

  const [counter, setCounter] = useState(0);                                            /* Here this counter is showing the counting of button. */
  const [inputValue, setInputValue] = useState(1);                                      /* Here the inputValue is for to finding the sum from 1 to the number or inputValue. */
  
  const total = useMemo(() => {                                                         /* The useEffect couldn't return any value so that's why a better approach is to use useMemo. */

    let sum = 0;                                                                        /* when the button is getting rerender the whole application UseMemo1 also rerender so we have kept this for this inside of useEffect, so that it can run only on certain conditions. */
    for (let i = 1; i <= inputValue; i++) {                                             /* Here it is using memoization. */

        sum +=  i;

    }
    return sum;

  }, [inputValue]);

  return (

    <div>

      <input onChange={function (e) {

          setInputValue(e.target.value);

        }} placeholder={"Find sum from 1 to n"}>

      </input>
      <br /><br />

      Sum from 1 to {inputValue} is {total}
      <br /><br />

      <button onClick={() => {

          setCounter(counter + 1);

        }} style={{backgroundColor: "aquamarine"}}>Counter ({counter})
        
      </button>

    </div>

  );

}

export default UseMemo3;


// import { StrictMode } from 'react'                                                   /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseMemo3 from '../UseMemo/UseMemo3.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <UseMemo3 />
    
// );