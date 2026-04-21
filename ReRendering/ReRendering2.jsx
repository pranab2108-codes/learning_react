import { useState } from "react";


function ReRendering2(){
                                                                                          /* Because of this ReRendering2 doesn't have the state the Header with the first nae pass in it will not rerender and whenever this HeaderWithButton get rerender it's paret(ReRendering2) will get affected, so it won't rerender. */
    return <div>

        <Header title="My first name is Pranab"></Header>                                       
        <HeaderWithButton></HeaderWithButton>

    </div>

}

function HeaderWithButton(){

    const [title, setTitle] = useState("My last is Sethi");                                /* Here the state variable got pushed to the down component so if ever this the setTitle get called it will starts to rerender agai the HeaderWithButton and the Header which will pass with the last name and Button also get rerender because of it's child. */
 
    function updateTitle(){

        setTitle("My last name is: " + Math.random());

    }

    return <div>

        <Header title={title}></Header>
        <button onClick={updateTitle}>Click me to see update of Title</button>

    </div>

}

function Header(props){

    return <div>

        {props.title}

    </div>

}

export default ReRendering2;


// import { StrictMode } from 'react'                                                      /* It should be done in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ReRendering2 from '../ReRendering/ReRendering2.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <ReRendering2 />
    
// );