import React, { useState, useCallback, useRef } from 'react';

                                                                             /* This solve the problem of how many times, it rerendering. */
export function Assignment7() {

    const [count, setCount] = useState(0);
    const numberOfTimesReRendered = useRef(0);

    const handleReRender = () => {

        setCount(count + 1);

    };
    numberOfTimesReRendered.current = numberOfTimesReRendered.current + 1;

    return (

        <div>

            <p>This component has rendered {numberOfTimesReRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        
        </div>

    );

};


// import { StrictMode } from 'react'                                            /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { Assignment7 } from '../HooksAssignment/Assignment7.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <Assignment7/>
    
// );