import { useState } from "react";                                          /* Here the rendering or re-rendering logics are written. */

                                      
function DomManipulation(){
                                                                           /* This is called array destructuring way, if let arr = [10,20], we access them like let first = arr[0]; let second = arr[1], but in destructuring way we can do let [fisrt, second] = arr. */
    const [count,setCount] = useState(0);                                  /* We can't initialize the state variable like let state = { count: 0 } because react always follow a certain way to initialize of the state, here 0 represent the  */
                                                                           /* Now react will look for the count variable which is a state variable, whenever it will change react will update this, in this form we can say that the 1st value will be stored to count and 2nd will be stored in setCount. */
    function onClickHandler(){

        setCount(count+1);                                                 /* We can't write count = count +1, it follow in a certain way. */

    }
    return (

        <div>
            
            <button onClick={onClickHandler}>Counter {count}</button>
        
        </div>

    )

}

export default DomManipulation;