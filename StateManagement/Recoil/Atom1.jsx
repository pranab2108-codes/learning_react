import { RecoilRoot, useRecoilValue, useRecoilState } from "recoil";
import { countAtom } from "../Store/Atoms/atom.js";


function Atom1() {                          
                                                                      
  return (                                                       /* Normally we know RecoilRoot should wrap that component which used the state variable or useState, because only these 2 can make the rerender in Recoil and Recoil won't rerender the setFunction for updating the state variable, earlier the way react rerendering using setFunction. */                                                       

    <div>

      <RecoilRoot>

        <Count/>

      </RecoilRoot>
      
    </div>
  
  );

}

function Count() {                                               /* But in this Count component we are nowhere using a state or useSate at all, so why still we are using the RecoilRoot to wrap the component Count. */                                  
                                                                 /* We could've only used the RecoilRoot to wrap the components CountRerenderer and Buttons because it is visible clearly they are the only components which are using the state or useState. */
  console.log("Let's see now whether rerendering is still there or not!!!");
  return <div>

            <CountRerenderer/>
            <Buttons/>

         </div>                                                  /* Because in real world application main app consist so many components, among them few use the state or useState of Recoil and few not using them and among them who are using, some of them directly using and some of them have child components who are using them. */
                                                                 /* So it's better to write in top most component where all the components lies, instead of putting the RecoilRoot at different components who are using the state or useState. */
}

function CountRerenderer() {                                          
  
  const count = useRecoilValue(countAtom);

  return <div>
          
            The count is: {count}
        
         </div>
  
}

function Buttons() {  

  console.log("Buttons are rerendering");                        /* Here we will see a tiny problem and that is if ever we use this setCount then ofcourse this component Buttons get rerender, but here it is not needed to be rerender. */      
  const [count, setCount] = useRecoilState(countAtom);           /* As we can see here this component is only need of setCount to update the values of count so why don't we remove this count variable and we should use the "currentCount" variable which can take the value of count and help to update the count, without using the count state variable. */
  
  return <div>   

            <button onClick={() => {

                setCount(count + 1);

              }} style={{backgroundColor: "purple", color: "white"}}>Increase count

            </button>
            
            <button onClick={() => {

                setCount(count - 1);

              }} style={{backgroundColor: "#1F2937", color: "white"}}>Decrease count

            </button>

         </div>

}

export default Atom1;


// import { StrictMode } from 'react'                            /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import Atom1 from '..StateManagement/Recoil1/Atom1.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <Atom1/>
          
// );