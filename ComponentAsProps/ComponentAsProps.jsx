function ComponentAsProps(){
                                                                     /* Here we are passing the component as input/props/parameter to another component. */
    return <div>

               <Wrapper1 innerComponent={<TextComponent />}></Wrapper1>
               <Wrapper2><div>Hi There.</div></Wrapper2>
               <Wrapper2><Wrapper1 innerComponent={<TextComponent />}></Wrapper1></Wrapper2>
    
           </div>
                                                                     /* After the "Wrapper2" whatever written in there all those can be consider as a child, a child can be either a component or an XML expression also. */
}

function TextComponent(){

    return <div>

               Hey people.

           </div>

}

function Wrapper1({innerComponent}){

    return <div style={{border:"2px solid black", padding:"20px"}}>

               {innerComponent}

           </div>

}

function Wrapper2({children}){

    return <div style={{border:"2px solid red", padding:"20px"}}>

               {children}

           </div>

}

export default ComponentAsProps;


// import { StrictMode } from 'react'                                /* This should be writte inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ComponentAsProps from '../ComponentAsProps/ComponentAsProps.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <ComponentAsProps />
    
// );