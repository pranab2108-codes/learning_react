import { useState } from "react";


export function CreateTodo() {

	const [title, setTitle] = useState("");                                                             /* These are the local states for storing the values temporarily, so we can track the current value, then again when we type for the new todo input it should change, so setTitle and setDescription is also there. */
	const [description, setDescription] = useState("");
																										                                                  /* Whenever the user will start to type inside of the input boxes the onChange() function will get trigger, and we can get that latest value with event.target.value. */
	return <div>
																									
						<input id="title" type="text" placeholder="Put the title" style={{padding: "10px", margin: "10px", border: "5px solid orange"}} onChange={function(event) {
									
							const value = event.target.value;
							setTitle(value);

						}}>

						</input><br /><br /> 

						<input id="description" type="text" placeholder="Put the description of your title" style={{padding: "10px", margin: "10px", border: "5px solid white"}} onChange={function(event) {
									
							const value = event.target.value;
							setDescription(value);

						}}>

						</input><br /><br />

						<button style={{padding: "10px", margin: "10px", border: "5px solid green"}} onClick={() => {

							fetch("http://localhost:3000/todo", {                                                   /* As we know this is a POST method in express, so we have to explicitly tell this request is a POST otherwise bydefault it will taken as GET. */
										
								method: "POST",
								body: JSON.stringify({                                                                /* It could have been easier if we would have used axios library. */

									title: title,                                                                       /* In DOM we were doing like "document.getElementById("title").innerHTML", but in React the main motive is to avoid these, so there is a slightly optimal way, not fully optimal way, and this is being used widely, we can create local states. */                                      
									description: description                                                        

								}),
								headers: {

									"content-type": "application/json"

								}

							})
								.then(async function(res) {

									const json = await res.json();
									alert("Todo added");

								});

						}}>Add a Todo 

						</button>

				 </div>

}