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
                                                        /* If we would have not used the memo here then whenever the button will get clicked it will rerender the application UseCallback1, inside of it's Demo component is present, and we know this thing, if parent get rerender then child will also rerender even if the props of child not changed, so to avoid this unneccessary rerendering we use memo. */
const Demo = memo(function ({ a }) {                    /* Because of the memo written this part means hi there will only run one time in whole process, doesn't matter how many times the button will get clicked, in console also the rerender word will get print once only. */
                                                        /* The useMemo and memo are different things because, meo prevent rerendering but useMemo prevent recalculation, meo used for child components, but useMemo used for expensive logic. */
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