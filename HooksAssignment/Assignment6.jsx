import { useEffect, useRef } from "react";


export function Assignment6() {

    const inputRef = useRef();

    useEffect(() => {

        inputRef.current.focus();

    }, [inputRef]);

    const handleButtonClick = () => {                                           /* Whenever the button will get clicked the focus or the cursor will point to the text field automatically. */

        inputRef.current.focus();

    };

    return (

        <div>

            <input ref={inputRef} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        
        </div>

    );

};


// import { StrictMode } from 'react'                                           /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { Assignment6 } from '../HooksAssignment/Assignment6.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <Assignment6/>
    
// );