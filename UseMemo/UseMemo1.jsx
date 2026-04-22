import { useState } from "react";


function UseMemo1() {

  const [counter, setCounter] = useState(0);                                            /* Here this counter is showing the counting of button. */
  const [inputValue, setInputValue] = useState(1);                                      /* Here the inputValue is for to finding the sum from 1 to the number or inputValue. */
  let sum = 0;                                                                          /* Here the only problem is when the button is getting rerender the whole application UseMemo1 also get rerender so for that reason the for loop also run which is costly. */
  for (let i = 1; i <= inputValue; i++) {

    sum +=  i;

  }

  return (

    <div>

      <input onChange={function (e) {

          setInputValue(e.target.value);

        }}
        placeholder={"Find sum from 1 to n"}
      ></input>
      <br /><br />

      Sum from 1 to {inputValue} is {sum}
      <br /><br />

      <button onClick={() => {

          setCounter(counter + 1);

        }} style={{backgroundColor:"violet"}}
      >Counter ({counter})
      </button>

    </div>

  );

}

export default UseMemo1;


// import { StrictMode } from 'react'                                                   /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseMemo1 from '../UseMemo/UseMemo1.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <UseMemo1 />
    
// );