import { memo, useCallback, useEffect, useMemo, useState } from "react";


function UseCallback3() {                                       

  const [counter, setCounter] = useState(0);

  var a = useCallback( () =>{                                    /* This will avoid those unneccessary rerendering. */

    console.log("Let see");                                      /* Beacuse of this empty dependecy array this function name "a" will get create only once, and then it store it's reference if later will be in use. */

  },[]);

  return (

    <div>

      <button onClick={() => {

          setCounter(counter + 1);

        }} style={{backgroundColor: "brown",color:"whitesmoke"}}
      >Counter ({counter})
      </button>
      <Demo a={a} />                                             

    </div>

  );                                                             /* Even though we click the button each time, whole application of UseCallback3 get rerender, the Demo component will get pass with same reference so in Demo neither hi there will rerender nor the word rerender will get print again in console. */

}

const Demo = memo(function ({ a }) {

  console.log("rerender");
  return <div>hi there</div>

});

export default UseCallback3;


// import { StrictMode } from 'react'                            /* This should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseCallback3 from '../UseCallback/UseCallback3.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <UseCallback3 />
    
// );