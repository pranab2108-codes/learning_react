import { memo, useCallback, useState } from "react";


function UseCallback4() {

  const [count, setCount] = useState(0);

  const logSomething = useCallback(() => {                             /* The useCallback mainly works for functions not variables. because we know when functions will be passed as props they pass their reference. */

    console.log("Child clicked");

  }, []);

  return (

    <div>

      <button onClick={() => {

          setCount(count + 1);

        }} style={{backgroundColor: "black", color: "white"}}>Click me {count}
      
      </button>
      <ButtonComponent inputFunction={logSomething}/>

    </div>

  );

}

const ButtonComponent = memo(({ inputFunction }) => {

  console.log("Child render");
  return (

    <div>

      <button onClick={inputFunction} style={{backgroundColor: "lime"}}>Button clicked</button>
    
    </div>

  );                                                                   /* Here this button is doing it's work meaning printing in console that child clicked, this process not related to memo. */

});

export default UseCallback4;


// import { StrictMode } from 'react'                                  /* This should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseCallback4 from '../UseCallback/UseCallback4.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <UseCallback4 />
    
// );