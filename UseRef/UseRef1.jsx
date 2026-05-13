import { useEffect, useState } from 'react';

function UseRef1() {

  const [incomeTax, setIncomeTax] = useState(2000);                             /* As we are defining the state here with it's updater. */

  useEffect(() => {

    setTimeout(() => {

      document.getElementById("incomeTaxContainer").innerHTML = 10;             /* Here we are using DOM manipulation to override incomeTax, but this is not a good practice, we shouldnt do like this. */
    
    }, 5000);

  }, []);

  return (

    <div>

      Hi there, your income tax returns are <div id="incomeTaxContainer">{incomeTax}</div>
    
    </div>

  );

}

export default UseRef1;


// import { StrictMode } from 'react'                                           /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseRef1 from '../UseRef/UseRef1';

// createRoot(document.getElementById('root')).render(
  
//   <UseRef1 />
    
// );