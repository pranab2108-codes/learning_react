import { useMemo } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "../Store/Atoms/atom.js";


function Atom3() {                          
                                                                      
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

  const count = useRecoilValue(countAtom);

  const isEven = useMemo(() => {                            /* If ever the application rerender but the count is still the same then it shouldn't recalculate, that's why we had to use useMemo. */
                                                            /* Here we can optimize this problem by choosing the selector, so we don't need the useMemo hook here. */
    return count % 2 == 0;                                  /* Because here the isEven is completely depends on count, which is the actual benifit of using selector in this case. */

  }, [count]);

  return <div>

            {isEven ? "It is even" : null}
  
         </div>

}

function Buttons() {  

  console.log("Let's check whether buttons are rerendering or not!!!");
  const setCount = useSetRecoilState(countAtom);
  
  return <div>   

            <button onClick={() => {

                setCount((currentCount) => {                                          /* Here actually the Buttons component say to the Recoil that just run this function which is inside of the setCount and as the Recoil know the updater function setCount can be only use to update the atom which is countAtom in this case, so in this way the component Buttons not directly using the Recoil state variable, ofcourse which is called as an atom. */
                  
                  return currentCount + 1;

                });

              }} style={{backgroundColor: "orange", color: "white"}}>Increase count

            </button>
            
            <button onClick={() => {

                setCount((currentCount) => {
                  
                  return currentCount - 1;
                  
                });

              }} style={{backgroundColor: "#2f69ba", color: "white"}}>Decrease count

            </button>

         </div>

}

export default Atom3;


// import { StrictMode } from 'react'                                          /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Atom3 from '../StateManagement/Recoil/Atom3.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <Atom3/>
          
// );