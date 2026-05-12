import React, { useState, useMemo } from 'react';


export const Assignment3 = () => {

  const [items, setItems] = useState([

    { name: 'Chocolates', value: 10 },
    { name: 'Chips', value: 20 },
    { name: 'Onion', value: 30 },
    { name: 'Tomato', value: 30 },

  ]);

  const totalValue = useMemo(() => {

    let value = 0;
    for (let i = 0; i < items.length; i++) {

      value = value + items[i].value;

    }
    return value;

  }, [items]);                                                           /* Whenever the items getting changes, then only this costly operation should run. */

  return (

    <div>

      <ul>

        {items.map((item, index) => (

          <li key={index}>{item.name} - Price: ${item.value}</li>

        ))}

      </ul>
      <p style={{marginLeft: "40px"}}>Total Value: {totalValue}</p>

    </div>

  );

};


// import { StrictMode } from 'react'                                    /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { Assignment3 } from '../HooksAssignment/Assignment3.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <Assignment3/>
    
// );