let state = {                                                                   /* This is how exactly happen inside of the React. */

    count: 0

};

function onButtonPress() {                                                      /* This part in React we need to write. */

    state.count++;
    buttonComponentReRender();                                                  /* This calling of buttonComponentReRender also handled by React. */

}

function buttonComponentReRender() {                                            /* This part and the calling of the buttonComponentReRender is being handled by React itself in React. */

    document.getElementById("buttonParent").innerHTML = "";                     /* If we don't empty this, then each time we press the button a new button will get create with increment value. */
    const component = buttonComponent(state.count);
    document.getElementById("buttonParent").appendChild(component);
        
}

function buttonComponent(count) {                                               /* In this part we also need to write in React. */

    const button = document.createElement("button");
    button.setAttribute("id", "btn");    
    button.innerHTML = `Counter ${count}`;
    button.setAttribute("onclick", "onButtonPress()");
    return button;
        
}
buttonComponentReRender();