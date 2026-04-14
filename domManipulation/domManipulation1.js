function onButtonPress() {

    const currentValue = document.getElementById("btn").innerHTML;
    console.log(currentValue.split(" "))
    const currentCounter = currentValue.split(" ")[1];
    const newCounter = parseInt(currentCounter) + 1;                                         /* Here we are converting the 1th index element which is a character into int so that's why we are using parseInt. */
    document.getElementById("btn").innerHTML = "Counter " + newCounter;

}