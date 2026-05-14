import { useState, useMemo } from "react";
const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];

for(let i = 0; i < TOTAL_LINES; i++) {                                            /* Here we are generating total 1000 sentences, by using all these 8 words only, which have been mentioned in this array named words. */

  let sentence = "";                                                              /* First we are creating an empty sentence. */
  for(let j = 0; j < words.length; j++) {

    sentence += (words[Math.floor(words.length * Math.random())]);                /* This random function will give us the number between 0(include) and 1(include), and our length of array(words) is 8 so after multiplying this the result can be with total 8 possibilities, those are: 0,1,2,3,4,5,6,7. */         
    sentence += " ";                                                              /* So we are taking a word from array(words) and attach to sentence and then attach a space. */

  }
  ALL_WORDS.push(sentence);

}

export function Assignment2() {

  const [sentences, setSentences] = useState(ALL_WORDS);
  const [filter, setFilter] = useState("");

  const filteredSentences = useMemo(() => {                                       /* This costly operation can't be run on every render, that's why we used useMemo here. */

    return sentences.filter((x) => x.includes(filter));

  }, [sentences, filter]);                                                        /* Even a single parameter change cause a rerender. */

  return <div>

          <input type="text" onChange={(event) => setFilter(event.target.value)}></input>
          {filteredSentences.map((word) => {

            return (

              <div>

                {word}

              </div>

            );

          })}

         </div>

};


// import { StrictMode } from 'react'                                             /* It should be written in src/main.jsx. */
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { Assignment2 } from '../HooksAssignment/Assignment2.jsx';

// createRoot(document.getElementById('root')).render(
  
//   <Assignment2/>
    
// );