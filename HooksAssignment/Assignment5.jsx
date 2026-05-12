import { useState, useCallback } from "react";


export function Assignment5() {

  const [inputText, setInputText] = useState('');

  const showAlert = useCallback(() => {

    alert(inputText);

  }, [inputText]);

  return (

    <div>

      <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Enter some text"/>
      <Alert showAlert={showAlert} />

    </div>

  );

}

function Alert({ showAlert }) {

  return <button onClick={showAlert}>Show alert</button>

}


// import { StrictMode } from 'react'                                    /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { Assignment5 } from '../HooksAssignment/Assignment5.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <Assignment5/>
    
// );