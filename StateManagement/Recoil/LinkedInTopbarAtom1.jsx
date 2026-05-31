import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "../Store/LinkedInTopbar/linkedInTopbarAtomAndSelector.js";
import './linkedInTopbar.css';

function LinkedInTopbarAtom1() {

  return <RecoilRoot>

            <MainAppComponent/>

         </RecoilRoot>

}

function MainAppComponent() {

  console.log("Me got rerender");
  const networkAtomCount = useRecoilValue(networkAtom);                                           /* We use the useRecoilValue hook only at that time when we know we only need the state variable which is also called as an atom in this Recoil case, so no updater function need here at all. */
  const jobAtomCount = useRecoilValue(jobsAtom);
  const MessagingAtomCount = useRecoilValue(messagingAtom);
  const [notificationAtomCount, setNotificationAtomCount] = useRecoilState(notificationsAtom);    /* Here we use useRecoilState hook only that time when we know we use both the state variable or atom and it's updater function, not in case either we need only atom or it's updater function. */

  return (

    <>

      <button>Home</button>
      <button>My network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messaging ({MessagingAtomCount})</button>
      <button>Notifications ({notificationAtomCount})</button>
      <button onClick={() => {                                                                    /* Let's suppose each time we get clicked the Me button it incrementing the notificationAtomCount, so here we need notificationAtomCount atom and it's updater function setNotificationAtomCount, that's why above we had to mentioned the useRecoilState hook for this case. */

          setNotificationAtomCount(notificationAtomCount + 1);

        }}>Me
        
      </button>
      <ButtonUpdater/>                                              

    </>                                                                                           /* When this MainAppComponent get rerender it forcely rerender the ButtonUpdater also because react's main rerender logic is if parent get rerender then child also get rerencer. */
                                                                                                  /* Doesn't matter whether the ButtonUpdater does not read atom value or it only gets updater function. */
  );

}

function ButtonUpdater() {

  console.log("Let's check got rerender");
  const setMessagingAtomCount = useSetRecoilState(messagingAtom);                                 /* Here in another independent component we are defining to update the MessagingAtomCount. */

  return (
  
    <button onClick={() => {                                                                      /* Let's suppose each time we get clicked the Let's check button it incrementing the MessagingAtomCount, so here we need only it's updater function setMessagingAtomCount, that's why above we had to mentioned the useSetRecoilState hook for this case. */

        setMessagingAtomCount((count) => count + 1);                                              /* Here count is refering to the state variable of messagingAtom, particularly it says to the Recoil to take the function definition and do the calculation of state variable or atom of messagingAtom, we are doing like this because we dont want this button to get rerender at all at each rerender. */

      }}>Let's check
              
    </button>                                                                                     /* Here one thing we can clearly see we declared only useSetRecoilState in this ButtonUpdater so if ever we click this Let's check button it shouldn't rerender the MainComponent. */
  
  );
                                                                                                  /* But here when we click this Let's check button it changing the value of messagingAtom whose value got read by Recoil inside of the MainComponent and as we know if a variable using the useRecoilValue then React will automatically rerender that component where it has been lying. */
}

export default LinkedInTopbarAtom1;


// import { StrictMode } from 'react';                                                            /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import LinkedInTopbarAtom1 from '../StateManagement/Recoil/LinkedInTopbarAtom1.jsx';

// createRoot(document.getElementById('root')).render(
   
//     <LinkedInTopbarAtom1/>
          
// );