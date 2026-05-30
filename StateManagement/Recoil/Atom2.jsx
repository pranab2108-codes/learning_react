import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "../Store/Atoms/atom.js";


function Atom2() {                          
                                                                      
  return (                                                            

    <div>

      <RecoilRoot>

        <Count/>

      </RecoilRoot>
      
    </div>
  
  );

}

function Count() {                                        
  
  console.log("Let's see now whether rerendering is still there or not!!!");
  return <div>

            <CountRerenderer/>
            <Buttons/>

         </div>

}

function CountRerenderer() {                                                       /* So now this is the only component which is getting rerender not any other component. */                                     
  
  const count = useRecoilValue(countAtom);

  return <div>
          
            The count is: {count}
        
         </div>
  
}

function Buttons() {  

  console.log("Let's check whether buttons are rerendering or not!!!");
  const setCount = useSetRecoilState(countAtom);                                   /* Here exactly the way we can solve the problem of rerendering, we used the setCount only and used currentCount to change the value of state variable count. */
  
  return <div>   

            <button onClick={() => {

                setCount((currentCount) => {
                  
                  return currentCount + 1;

                });

              }} style={{backgroundColor: "grey", color: "white"}}>Increase count

            </button>
            
            <button onClick={() => {

                setCount((currentCount) => {
                  
                  return currentCount - 1;
                  
                });

              }} style={{backgroundColor: "#cdc71e", color: "white"}}>Decrease count

            </button>

         </div>

}

export default Atom2;


// import { StrictMode } from 'react'                                              /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Atom2 from '..StateManagement/Recoil/Atom2.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <Atom2/>
          
// );