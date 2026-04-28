import { useEffect, useRef, useState } from 'react'

function UseRef2() {

  const [incomeTax, setIncomeTax] = useState(2000);
  const divRef = useRef(0);                                                   /* This is how we define useRef, here also we can put the initial value, the way we put inside of useState. */

  useEffect(() => {

    setTimeout(() => {

      console.log(divRef.current);                                            /* Through this we can see actually it is pointing to the DOM element which we want to override or not. */
      divRef.current.innerHTML = 20;                                          /* We have to use the current here somehow, the useRef does't affect to rerendering. */
    
    }, 5000);

  }, []);
                                                                              /* The ref is a special React prop. */
  return (

    <div>

      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    
    </div>

  );                                                                          /* Not neccessary to put this ref variable inside div container. */

}

export default UseRef2;


// import { StrictMode } from 'react'                                         /* This should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseRef2 from '../UseRef/UseRef2';
// createRoot(document.getElementById('root')).render(
  
//     <UseRef2/>
    
// );