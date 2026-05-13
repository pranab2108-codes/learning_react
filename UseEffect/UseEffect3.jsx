import { useState } from 'react';


function UseEffect3() {

  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});

  setTimeout(() => {
    
    console.log("Everyone");
    setBankData({income: 100});                                                       /* We might have to wait 10 days before we can talk to the bank manager. */

  }, 10000);
                                                                                      /* Here after 1 sec because of the setExchangeData get hit the state will updated even before setBankData, because setBankData will run after 10sec. */
  setTimeout(() => {                                                                  /* 1st time render the setExchaneData so new 1sec of setExchangeData and 10sec of setBankData will get created, and so on upto 9sec of 1st setBankData which was created at first,then the first setBankData will get trigger because of 10sec spent, so in between all those setBankData which were got created newly start to implement also. */

    console.log("Hey");
    setExchangeData({returns: 100});                                                  /* We might have to go to our exchange broker's office to get our trading information, before that we have to wait for 1 day tot talk. */

  }, 1000);                                                                           /* When we get either one of the data, the whole component or our application of UseEffect3 get trigger/rerender again, hence another data will trigger again which is unneccessary. */

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;                   /* In this part initially bankData.income and exchangeData.returns is undefined so ans would be NaN. */
                                                                                      /* This unneccessary thing can be only done through a 'hook' called 'useEffect'. */
  return (

    <div>

      Hi there, your income tax returns are {incomeTax}
    
    </div>

  );

}

export default UseEffect3;


// import { StrictMode } from 'react'                                                 /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import UseEffect3 from '../UseEffect/UseEffect3.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <UseEffect3 />
    
// );