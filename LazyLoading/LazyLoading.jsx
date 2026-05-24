import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
const Dashboard = lazy(() => import('./Components/Dashboard.jsx'));             /* Because of these Dashboard and Landing got export as default, that's why we are importing like this, we don't neeed to import like { Dashboard } and { Landing }, we can also rename here with anyname while import because of they got export as default. */
const Landing = lazy(() => import('./Components/Landing.jsx'));                 /* These lazy component loads asynchronously, that's why we have to use Suspense. */

                                                                                /* React always bundles the whole thing so when a prticular part will be needed later among them it can be use from there. */      
function LazyLoading() {                                                        /* Let's suppose in our application there are many pages like Home, Dashboard, Settings, Messages, Profile. */
                                                                                /* Normally React may bundle all pages together initially, browser downloads JavaScript for all pages, even though user only needs Home page right now, this makes initial loading heavier/slower. */                                                            
  return (
  
    <div>
  
      <BrowserRouter> 
  
        <Appbar/>
  
        <Routes>
  
          <Route path="/dashboard" element={<Suspense fallback={<div>loading...</div>}><Dashboard/></Suspense>}></Route>
          <Route path="/" element={<Suspense fallback={<div>loading...</div>}><Landing/></Suspense>}></Route>
  
        </Routes>
  
      </BrowserRouter>
  
    </div>                                                                      /* Here the lazy import is an asynchronous so react needs a fallback UI while waiting for the component file to download, that is exactly what Suspense provides. Suspense should wrap the lazy loaded component. */
  
  );                                                                            /* With Lazy Loading react loads components only when route is visited. */                                                                        
  
}
  
function Appbar() {
                                                                                /* Normally React bundles everything together, So even if the user only opens /, React still downloads Dashboard code, Settings code and all other pages codes also hence the bundle size get increase, but through lazy loading react loads components only when the user visits them. */
  const navigate = useNavigate();                                               /* Let suppose the user open '/' so only Landing page code loads, then later user open /dashboard so Dashboard component downloads at that moment, it never means it will hit the backend server each time. */
  
  return <div>
  
            <div style={{backgroundColor: "green", color: "white"}}>
        
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

export default LazyLoading;


// import { StrictMode } from 'react'                                           /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import LazyLoading from '../LazyLoading/LazyLoading.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <LazyLoading/>
          
// );