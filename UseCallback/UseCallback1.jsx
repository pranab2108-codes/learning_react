import { memo, useEffect, useMemo, useState } from "react";


function UseCallback1() {

  const [counter, setCounter] = useState(0);

  var a = 1;                                             /* This is not a state variable so each time the button will be clicked the whole application will rerender, so a new a will be created with the value of 1 but the address will be different. */

  return (

    <div>

      <button onClick={() => {

          setCounter(counter + 1);

        }} style={{backgroundColor: "coral"}}
      >Counter ({counter})
      </button>
      <Demo a={a} />                  

    </div>

  );                                                    /* We are passing the value of a in Demo component. */

}

const Demo = memo(function ({ a }) {                    /* Because of the memo written this part means hi there will only run one time in whole process, doesn't matter hoe many time the button will get clicked, in console also the rerender word will get print once only. */

  console.log("rerender");                              /* Because of the memo it will compare between old value of a and new value of a, if they will be same then it won't rerender. */
  return <div>hi there {a}</div>
                                                        /* We are passing a primitive(Number) data that's why it compare with the value not with it's reference or address. */
});

export default UseCallback1;


// import { StrictMode } from 'react'                   /* This should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseCallback1 from '../UseCallback/UseCallback1.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <UseCallback1 />
    
// );