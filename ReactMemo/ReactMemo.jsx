import React from "react";
import { useState } from "react";


function ReactMemo() {

  const [title, setTitle] = useState("my name is Pranab");

  function updateTitle() {

    setTitle("my name is " + Math.random());

  }
                                                                                    /* Here we can see the "Kanhu" and "Piyush" not getting changed so these won't rerender. */
  return (

    <div>

      <Header title="Kanhu"></Header> 
      <Header title="Piyush"></Header>
      <Header title={title}></Header>
      <button onClick={updateTitle}>Update the title</button>

    </div>

  );

}

const Header = React.memo(function Header({ title }) {                              /* It create React component with Memoization. */
                                                                                    /* It makes Header smarter so it skips unnecessary re-renders when props have not changed, so we don't need to pushed our state down to another component. */
  return <div>{title}</div>

});

export default ReactMemo;


// import { StrictMode } from 'react'                                               /* It should be written inside src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ReactMemo from '../ReactMemo/ReactMemo.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <ReactMemo />
    
// );