import { useState } from "react";


function ReRendering2() {
                                                                                          /* Because of this ReRendering2 doesn't have the state, so the Header with the first name passed in it will not rerender and whenever this HeaderWithButton get rerender it's paret(ReRendering2) will not get affected, so it(ReRendering2) won't rerender. */
  return <div>

            <Header title="My first name is Pranab"></Header>                                       
            <HeaderWithButton></HeaderWithButton>

         </div>                                                                           /* In "ReRendering1.jsx", we have seen the first name was unneccessarily rerendering, so here what we are exactly doing is putting the first name in there. where the state is not present, means the state is present only in there which suppose to be rerender, so the other things would not need to rerender. */
                                                                                          /* Here React won't recreate this "<HeaderWithButton></HeaderWithButton>" because the state is not present in "ReRendering2". */
}

function HeaderWithButton() {

  const [title, setTitle] = useState("My last name is Sethi");                            /* Here the state variable got pushed to the down component so if ever this setTitle get called it will starts to rerender again the HeaderWithButton and the Header which will pass with the last name and Button also get rerender because of it's(HeaderWithButton()) child. */
 
  function updateTitle() {

    setTitle("My last name is: " + Math.random());

  }

  return <div>

            <Header title={title}></Header>
            <button onClick={updateTitle}>Click me to see update of title</button>

         </div>

}

function Header(props) {

    return <div>

              {props.title}

           </div>

}

export default ReRendering2;


// import { StrictMode } from 'react'                                                     /* It should be done in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ReRendering2 from '../ReRendering/ReRendering2.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <ReRendering2 />
    
// );