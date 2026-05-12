import { useState } from 'react';


function ReRendering1() {                                                        /* Here the state variable is lies inside of parent that's why when the state change the parent(ReRendering1) is getting rerender, and because of it's returning 3 childrens which are 2 Header and 1 Button will get affected and rerender, even though we are not passing the state in this line "<Header title="My first name is Pranab"></Header>". */

  const [title, setTitle] = useState("My last name is Sethi");                   /* Here we are updating the title or surname or last name through the setTitle. */
                                                    
  function updateTitle() {                 

    setTitle("My last name is: " +Math.random());                                /* Any time we call this setTitle the whole app which is ReRendering here, would get rerender and irrespectively the childs will also rerender doesn't matter they are using the title which is a state variable here or not. */

  }
                                                                                 /* Here we only want the last name should be updated, but unfortunately when button getting click the whole application ReRendering1 is rerendering so the first "Header" component which is holding the first name only, never getting updated also rerendering unneccessarily. */
  return <>
    
          <Header title="My first name is Pranab"></Header>                         
          <Header title={title}></Header>                                       
          <button onClick={updateTitle}>Update the title</button>

         </>                                                                     /* The main rerendering happening because of this updater function "updateTitle" which is use to update the state for state variable title. */

}

function Header({ title }) {

  return <div>

            {title}

         </div>

}

export default ReRendering1;


// import { StrictMode } from 'react'                                            /* It should be done in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ReRendering1 from '../ReRendering/ReRendering1.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <ReRendering1 />
  
// );