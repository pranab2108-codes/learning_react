import { RecoilRoot, useRecoilValue } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "../Store/LinkedInTopbar/linkedInTopbarAtomAndSelector.js";
import './linkedInTopbar.css';
import { useMemo } from "react";

function LinkedInTopbarAtom2() {

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
  const totalNotificationCount = useMemo(() => {
                                                                                          /* Here each and every time when MainAppComponent getting rerendering this operation is running again and again, we should avoid it, so we can use useMemo and if this calculatio will be need by another component then also we have to declare and define this again. */
    return networkAtomCount + jobAtomCount + MessagingAtomCount + notificationAtomCount;

  }, [networkAtomCount, jobAtomCount, MessagingAtomCount, notificationAtomCount]);
                                                                                          /* But the optimized way is to use selector because we can see it clearly totalNotificationCount is fully depends on 4 things. */    
  return (                                                                                /* The problem of this approach is let's suppose in future there will be another variable which depends on totalNotificationCount and something among these then when we call these things again in another file or component we have to declare again in there, so that's why we should use selector. */

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

export default LinkedInTopbarAtom2;


// import { StrictMode } from 'react';                                                    /* It should be written inside of src/main.jsx. */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import LinkedInTopbarAtom2 from '../StateManagement/Recoil/LinkedInTopbarAtom2';

// createRoot(document.getElementById('root')).render(
   
//     <LinkedInTopbarAtom2/>
          
// );