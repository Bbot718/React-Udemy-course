//Old function syntax
/*
function oldPrintMyName(oldName){
    console.log(oldName);
}
oldPrintMyName("Ben");
*/

//New function syntax (with one argument)
const newPrintMyName = newName => {
    console.log(newName)
}
newPrintMyName("Max");

//New function syntax (with several argument)
const newPrintMyFullName = (firstName, LastName) => {
    console.log(firstName + " " + LastName);
}
newPrintMyFullName("Nora", "Botros");

//New function syntax (with return)
const multiply = (a, b) => {
    return a * b;
}
console.log(multiply(2, 3));

//New function syntax short form
const add = (x,y) => x + y;
console.log(add(1,1));