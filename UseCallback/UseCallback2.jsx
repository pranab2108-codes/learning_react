import { memo, useState } from "react";


function UseCallback2() {

  const [counter, setCounter] = useState(0);

  function a() {                                                 /* Now this a became a function not a primitive data anymore. */

    console.log("Hey everyone");

  }

  return (

    <div>

      <button onClick={() => {

          setCounter(counter + 1);

        }} style={{backgroundColor: "blue", color: "whitesmoke"}}>Counter ({counter})

      </button>
      <Demo a={a}/>

    </div>

  );                                                             /* Now whenever we will pass this a to Demo it will pass through the reference or it's address not by it's value. */

}
 
const Demo = memo(function ({ a }) {                             /* Now even when memo will compare with it's old reference and new reference it find it's different not same, that's why it will rerender hi there and also in console the word rerender. */

  console.log("Rerender");
  return <div>Hi there</div>

});

export default UseCallback2;


// import { StrictMode } from 'react'                            /* This should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseCallback2 from '../UseCallback/UseCallback2.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <UseCallback2 />
    
// );