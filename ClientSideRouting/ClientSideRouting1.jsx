import { BrowserRouter, Routes, Route } from 'react-router-dom'; /* For doing client side routing we need to install react-router-dom. */
import { Dashboard } from './Components/Dashboard.jsx';
import { Landing } from './Components/Landing.jsx';

                                                                 /* Before React comes into the picture of tech industry there was server side routing, means let suppose in our application we want to go to Notifications, then we ofcourse need to hit with /Notifications so this request goes to the server and it will give one HTML, one CSS and one JAVASCRIPT files for that. */
function ClientSideRouting1() {                                  /* Each time we hit with a different route like /Home, /Messages or anyhting it always give back a one new HTML, one new CSS and one new JAVASCRIPT files corresponding to it's route. */
                                                                 /* So there will be full page reload each time, we manually type or hit with a different route, but client side routing makes it easier. */
  return (

    <BrowserRouter> 

      <Routes>

        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/" element={<Landing/>}></Route>

      </Routes>

    </BrowserRouter>                                             /* Here this is not still using the client side routing so still hard reloading or full reloading of page. */

  );                                                             /* Here because of react the client side routing makes increase the performance of loading pages, what it does is let suppose we log in to our application with a route then it will send this request to the srever and from server there will be one HTML, one CSS and one JAVASCRIPT bundle will come which contains all the routes logic, app logic, components and many more. */
                                                                 /* Whenever we need to hit with a different route let suppose then it will find from that bundle and give it to browser so the other things in browser which no need to change even in a reloading of page, remains same the way it was, so no more hard reloading happen. */
}                                                                

export default ClientSideRouting1;


// import { StrictMode } from 'react'                            /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import ClientSideRouting1 from '../ClientSideRouting/ClientSideRouting1.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <ClientSideRouting1/>
          
// );