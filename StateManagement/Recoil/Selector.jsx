import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "../Store/Selectors/selector.js";


function Selector() {                          
                                                                      
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

function CountRerenderer() {                                          
  
  const count = useRecoilValue(countAtom);

  return <div>
          
            The count is: {count}
            <EvenCountRerenderer/>
        
         </div>
  
}

function EvenCountRerenderer() {

  const isEven = useRecoilValue(evenSelector);                                     /* We could've used useMemo but why we are using the Selectors, because there might be same duplicate calculation need in another component or in the same component there might be some calculation which need a relevant calculation of evenSelector which it got inside of it, so how many times we need to put useMemo at different places. */
                                                                                   /* So that's why it's better to derive the calculation logic inside of Selectors and then use those Selectors as much as we can at different places. */
  return <div>

            {isEven ? "It is even number" : null}
            
         </div>

}

function Buttons() {  

  console.log("Let's check whether buttons are rerendering or not!!!");
  const setCount = useSetRecoilState(countAtom);
  
  return <div>   

            <button onClick={() => {

                setCount((currentCount) => {                                         
                  
                  return currentCount + 1;

                });

              }} style={{backgroundColor: "#de26db", color: "white"}}>Increase count

            </button>
            
            <button onClick={() => {

                setCount((currentCount) => {
                  
                  return currentCount - 1;
                  
                });

              }} style={{backgroundColor: "#3a28df", color: "white"}}>Decrease count

            </button>

         </div>

}

export default Selector;


// import { StrictMode } from 'react';                                             /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import Selector from '../StateManagement/Recoil/Selector.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <Selector/>
          
// );