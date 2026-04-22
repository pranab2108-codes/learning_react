import { useState } from "react";                                    /* UseState let us to describe the state of our application whenever state updates, it triggers a re-render which finally results in a DOM update. */


function UseState(){                                                 

    const [count, setCount] = useState(0);                           

    return <div>
    
        <button onClick={function (){

            setCount(count+1);

        }} style={{backgroundColor: "red"}}>Click me {count}</button>

    </div>

}

export default UseState;


// import { StrictMode } from 'react'                                /* It should be present in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseState from '../UseState/UseState.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <UseState />
    
// );