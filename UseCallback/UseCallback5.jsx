import { useEffect, useMemo, useState, memo, useCallback } from 'react';


function UseCallback5() {

  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
   
    setExchange1Data({

      returns: 100

    });

  }, []);

  useEffect(() => {
    
    setExchange2Data({

      returns: 100

    });

  }, []);

  useEffect(() => {
   
    setTimeout(() => {

      setBankData({

        income: 100

      });

    }, 5000);

  }, []);

  const calculateCryptoReturns = useCallback(function () {                                           /* We know if the parent component is rerendering then it is also affecting the child component but sometimes the child component doesn't require the rerendering, so we use useCallback to avoid make rerendering to the child component. */

    return exchange1Data.returns + exchange2Data.returns;

  }, [exchange1Data, exchange2Data]);

  return(

    <div>

        <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns}/>

    </div>

  );

}

const CryptoGainsCalculator = memo(function ({ calculateCryptoReturns }) {                           /* This memo and useMemo both are significantly different, not same. */

    console.log("Crypto child rerender");                                                            /* Here memo tells that, if the props are not been changed at all, then it will never run, which helps to do less rerendering. */
    return (

        <div>

            Your crypto returns are  {calculateCryptoReturns()}

        </div>

    );

});

export default UseCallback5;


// import { StrictMode } from 'react'                                                                /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseCallback5 from '../UseCallback/UseCallback5';

// createRoot(document.getElementById('root')).render(
  
//   <UseCallback5 />
    
// );