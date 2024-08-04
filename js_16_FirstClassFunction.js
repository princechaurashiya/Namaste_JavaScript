// Function Statement  aka Function Declaration
function a(){
    console.log("a called");
}
a();
// Function Expression
var b = function (){
    console.log("b called");
}
b();

// Anonymous Function
// a function without name;
// function  () {

// }

// Named Function Expression

var c = function xyz (){
    console.log("c called")
}
c();
// Difference Between Parameters & Arguments ?
var b = function ( parm1 , parm2){  // parm1 and parm2 are parameter
    console.log("b called");
}
b( a , b );  // a and b are arguments

// First Class Functions

// the ability of function to be used as value and can be passed as an argument to another function and can be returned from the function is this ability is known as First Class Java Function or First Class Citizens.

// Arrow Functions
//we studey in seperate class.
