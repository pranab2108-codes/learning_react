import { useEffect, useState, useMemo } from 'react';


function UseMemo5() {

  const [exchange1Data, setExchange1Data] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    
    setExchange1Data({returns: 100});

  }, []);

  useEffect(() => {
    
    setExchange2Data({returns: 100});

  }, []);

  useEffect(() => {
    
    setTimeout(() => {

      setBankData({income: 100});

    }, 5000);

  }, []);

  const cryptoReturns = useMemo(() => {

    console.log("Hey");
    return exchange1Data.returns + exchange2Data.returns;                            /* Here now because of useMemo the recalculation got avoided. */
  
  }, [exchange1Data, exchange2Data]);                                                /* It means it only get run when the exchange1Data or exchange2Data get change. */

  console.log("Everyone");
  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (

    <div>

      Hi there, your income tax returns are {incomeTax}

    </div>

  );

}

export default UseMemo5;


// import { StrictMode } from 'react'                                                /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseMemo5 from '../UseMemo/UseMemo5.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <UseMemo5 />
    
// );