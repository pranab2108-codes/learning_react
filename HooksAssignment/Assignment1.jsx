import { useState,useMemo } from "react";

export function Assignment1() {

  const [input, setInput] = useState(0);

  const expensiveValue = useMemo(() => {

    let value = 1;
    for (let i = 1; i <= input; i++) {

      value *= i;

    }
    return value;
    
  }, [input]);                                                                /* When this input will change, then only this expensive/costly function of calculating factorial will run. */
  
  return (

    <div>

      <input type="number" onChange={(event) => setInput(Number(event.target.value))}/>
      <p>Calculated factorial is: {expensiveValue}</p>

    </div>

  );

};


// import { StrictMode } from 'react'                                         /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Assignment1 from '../HooksAssignment/Assignment1.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <Assignment1/>
    
// );