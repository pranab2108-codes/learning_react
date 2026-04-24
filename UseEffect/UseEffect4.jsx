import { useEffect, useState } from 'react';


function UseEffect4() {

  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect( () => {                                                       /* It(Everyone) only render once, not anymore after that. */

    setTimeout(() => {

      console.log("Everyone");
      setBankData({income: 100});

    }, 10000);

  },[]);
  
  useEffect( () => {                                                       /* It(Hey) only render once, not anymore after that. */

    console.log("Hey");
    setTimeout(() => {

      setExchangeData({returns: 100});

    }, 1000);

  },[]);

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return (

    <div>

      hi there, your income tax returns are {incomeTax}
    
    </div>

  );

}

export default UseEffect4;


// import { StrictMode } from 'react'                                      /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseEffect4 from '../UseEffect/UseEffect4.jsx';
// createRoot(document.getElementById('root')).render(
  
//     <UseEffect4/>
    
// );