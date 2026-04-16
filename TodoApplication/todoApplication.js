let globalId = 1;
let todoState = [];
let oldTodoState = [];


function createChild(title, description, id) {

    const child = document.createElement("div");
    const firstGrandChild = document.createElement("div");
    firstGrandChild.innerHTML = title;
    const secondGrandChild = document.createElement("div");
    secondGrandChild.innerHTML = description;
    const thirdGrandChild = document.createElement("button");
    thirdGrandChild.innerHTML = "Mark as done";
    thirdGrandChild.setAttribute("onclick", `markAsDone(${id})`);
    child.appendChild(firstGrandChild);
    child.appendChild(secondGrandChild);
    child.appendChild(thirdGrandChild);
    child.setAttribute("id", id);
    return child;

}

function markAsDone(id) {

    const parent = document.getElementById(id);
    parent.children[2].innerHTML = "Done!";

}


function addTodoToDom(todo) {

    const parent = document.getElementById("todos");
    parent.appendChild(createChild(todo.title, todo.description, todo.id));

}

function removeTodoFromDom(todo) {

    const element = document.getElementById(todo.id);
    element.parentNode.removeChild(element);

}

function updateTodoInDom(oldTodo, newTodo) {

    const element = document.getElementById(oldTodo.id);
    element.children[0].innerHTML = newTodo.title;
    element.children[1].innerHTML = newTodo.description;

}


function updateState(newTodos) {

    const added = [];
    const deleted = [];
    const updated = [];

    for (let i = 0; i < newTodos.length; i++) {                                             /* This loop will get trigger whenever a new todo get add in todoState. */

        let found = false;
        for (let j = 0; j < oldTodoState.length; j++) {

            if (newTodos[i].id === oldTodoState[j].id) {

                found = true;

            }

        }
        if (!found) {

            added.push(newTodos[i]);

        }

    }

    for (let i = 0; i < oldTodoState.length; i++) {                                         /* Let suppose we have done pop() opeartion from todoSate then ofcourse it should be delete from oldTodoState also because then only we can make comparision between newTodos which is our todoState and oldTodoState, at that time this loop will get trigger. */

        let found = false;
        for (let j = 0; j < newTodos.length; j++) {

            if (oldTodoState[i].id === newTodos[j].id) {

                found = true;

            }

        }
        if (!found) {

            deleted.push(oldTodoState[i]);

        }

    }

    for (let i = 0; i < newTodos.length; i++) {                                             /* Let suppose we have changed the title or description of a particular todo then it should be updated in onlTodoState ofcourse then only comparision can be possible, at that time this loop will get trigger. */

        for (let j = 0; j < oldTodoState.length; j++) {

            if (newTodos[i].id === oldTodoState[j].id) {

                if (newTodos[i].title !== oldTodoState[j].title || newTodos[i].description !== oldTodoState[j].description) {

                    updated.push({

                        oldTodo: oldTodoState[j],
                        newTodo: newTodos[i]

                    });

                }

            }

        }

    }

    for (let i = 0; i < added.length; i++) {                                                /* These 3 loops will run at that moment when make changes in todoState like if we add or remove or update then it should reflect in DOM also, so that's why we are storing in oldTodoState so we can know which needs to be add, delete and updated. */
                                                                                            /* Here we are doing like this because we dont need to put our new list of todos again in DOM each time, means only those parts will change which need to be change. */
        addTodoToDom(added[i]);

    }                                                                                       

    for (let i = 0; i < deleted.length; i++) {

        removeTodoFromDom(deleted[i]);

    }

    for (let i = 0; i < updated.length; i++) {

        updateTodoInDom(

            updated[i].oldTodo,
            updated[i].newTodo

        );

    }
    oldTodoState = [...newTodos];

}


function addTodo() {

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    todoState.push({

        title: title,
        description: description,
        id: globalId++

    });
    updateState(todoState);

}