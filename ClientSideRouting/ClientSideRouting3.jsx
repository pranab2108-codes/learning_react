import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Dashboard } from './Components/Dashboard.jsx';
import { Landing } from './Components/Landing.jsx';


function ClientSideRouting3() {

  return (

    <div>

      <BrowserRouter> 

        <Appbar/>

        <Routes>

          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/" element={<Landing/>}></Route>

        </Routes>

      </BrowserRouter>

    </div>

  );                                                                         

}

function Appbar() {
                                                                     /* This is a right way to do clientsiderouting by using "useNavigate" hook, but we have to use this inside of a component and that component should lie inside of "BrowserRouter". */
  const navigate = useNavigate();

  return <div>

            <div style={{backgroundColor: "rgb(10, 102, 194)", color: "white"}}>

              Hi this is the topbar
              <button onClick={() => {

                  navigate("/");

                }}>Landing page

              </button>
              
              <button onClick={() => {

                  navigate("/dashboard");

                }}>Dashboard page

              </button>

            </div>

         </div>    
                                                                     /* Now because of this we don't see any hard reloading. */
}

export default ClientSideRouting3;