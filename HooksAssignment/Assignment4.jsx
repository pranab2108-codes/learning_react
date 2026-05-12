import { useState, useCallback, memo } from "react";


export function Assignment4() {

  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {

    setCount(function(currentCount) {                  /* Here we are using the setCount in this way because, we don't want to affect the count each time. */

      return currentCount + 1;

    });

  }, []);

  const handleDecrement = useCallback(() => {

    setCount((currentCount) => {                       /* This setCount and previous setCount of handleIncrement both are acting same. */

      return currentCount - 1;

    });

  }, []);                                              /* Because of these type of using setCount we don't need to use count which state variable in dependency array anymore. */

  return (

    <div>

      <p>Count: {count}</p>
      <CounterButtons onIncrement={handleIncrement} onDecrement={handleDecrement}/>

    </div>

  );

}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (

  <div>

    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>

  </div>

));


// import { StrictMode } from 'react'                  /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { Assignment4 } from '../HooksAssignment/Assignment4.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <Assignment4/>
    
// );