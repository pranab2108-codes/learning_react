function onButtonPress() {

        const currentValue = document.getElementById("btn").innerHTML;                /* Here we got the element which we want to update, here it is button. */
        const currentCounter = currentValue.split(" ")[1];                            /* Split the only number part which will change time to time. */
        const newCounter = parseInt(currentCounter) + 1;                              /* Here we are doing incrementing. */
        document.getElementById("btn").innerHTML = "Counter: " + newCounter;          /* Finally attaching to DOM. */

}