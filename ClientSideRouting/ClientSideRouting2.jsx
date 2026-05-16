import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './Components/Dashboard.jsx';
import { Landing } from './Components/Landing.jsx';


function ClientSideRouting2() {
                                                                                /* This 'window.location.href = "/..."' is also does hard reload means we can say this each time from server a new HTML, CSS and JAVASCRIPT files are coming, so this is not at all the clientsiderouting. */
  return (                                                                      /* We have made here a same thing like the way in LinekdIn the top bar in blue colour doesn't change even we press any button which turns into switching the route and change everything which supposed to be chnage in that route. */

    <div>

      <div style={{backgroundColor: "blue", color: "white"}}> 

        Hi this is the topbar
        <button onClick={() => {

            window.location.href = "/";

          }}>Landing page

        </button>
        
        <button onClick={() => {

            window.location.href = "/dashboard";

          }}>Dashboard page

        </button>

      </div>
  
      <BrowserRouter> 

        <Routes>

          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/" element={<Landing/>}></Route>

        </Routes>

      </BrowserRouter>

    </div>
                                                                                /* Here we are pressing the button so we can switch to the another route, this is also hard reloading not using clientsiderouting so it still does a full page reloading. */
  );                                                                            /* Here the "BrowserRouter" is just a component which render based on the current given route so we can say that, it is that which holds all routes and it's logics inside of it. */

}

export default ClientSideRouting2;