import { useEffect, useState } from 'react';


function UseMemo4() {

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

  console.log("Hey");
  const cryptoReturns = exchange1Data.returns + exchange2Data.returns;                      /* In initially exchange1Data and exchange2Data has not been set any value of object so undefined that's why it will show us Nan. */
  console.log("Everyone");                                                                  /* After the first render only exchange1Data.returns will be avialable, but another is still in schedule so still undefined, so after the second time rerender happen then the both exchange1Data.returns and exchange2Data will get available completely so we can say this calculation for cryptoReturns got ran 3 times(included render or initial render), but because of the modern React updates close together and often automatically batched into a single rerender so it will show 2 times here. */
  const incomeTax = (cryptoReturns + bankData.income) * 0.3;                                /* But after the 5 seconds when setBankData get trigger hence whole UseMemo4 get rerender, at that moment this costly operation of calculating the cryptoReturns will run again which was already got calculated in it's previous rerender, because of this time total "Hey" and "Everyone" will be print in console 3 times. */
                                                                                            /* So we should use the "useMemo" hook here. */
  return (

    <div>

      Hi there, your income tax returns are {incomeTax}

    </div>

  );

}

export default UseMemo4;


// import { StrictMode } from 'react'                                                       /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseMemo4 from '../UseMemo/UseMemo4.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <UseMemo4 />
    
// );