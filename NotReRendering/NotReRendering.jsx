import { useState } from "react";
import { useEffect } from "react";


function NotReRendering() {

  let a = 1;
  window.setInterval(() =>{

    a++;
    console.log(a);                                                   /* Because of this we can see in console how the a is getting incrementing. */

  },3000);

  return <DummyButton a={a}></DummyButton>;                           /* Even after we pass the a to child component named as DummyButton it still can't re render because it is not a state in React and also we are not setting any updater function which would look after the state. */

}

function DummyButton(props) {

  return <div>{props.a}</div>;                                        /* It only render one time, then it can never re render it. */

}

export default NotReRendering;


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import NotReRendering from '../notReRendering/NotReRendering';
// createRoot(document.getElementById('root')).render(

//     <NotReRendering />

// );