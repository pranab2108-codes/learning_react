import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "../Store/LinkedInTopbar/linkedInTopbarAtomAndSelector.js";
import './linkedInTopbar.css';

function LinkedInTopbarAtomAndSelector() {

  return <RecoilRoot>

            <MainAppComponent/>

         </RecoilRoot>

}

function MainAppComponent() {

  console.log("Me got rerender");
  const networkAtomCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobsAtom);
  const MessagingAtomCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);           /* Here we are using selector the second way of reducing the uses of this operation, so that if any other component will ever need this calculation so we don't need to declare and define again. */
                                                                  
  return (

    <>

      <button>Home</button>
      <button>My network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messaging ({MessagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>
      <button>Me ({totalNotificationCount})</button>                                             

    </>

  );

}

export default LinkedInTopbarAtomAndSelector;


// import { StrictMode } from 'react';                                                /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import LinkedInTopbarAtomAndSelector from '../StateManagement/Recoil/LinkedInTopbarAtomAndSelector.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <LinkedInTopbarAtomAndSelector/>
          
// );