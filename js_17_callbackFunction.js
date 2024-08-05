// What is a callBack Function in javaScript

setTimeout(function(){
    console.log('Timer');
},5000);

function x(y){
    console.log('x');
    y();
}

x(function y(){
    console.log('y');
});
// javaScript is a synchronous and single-threaded language
// Blocking the main thread
// Power of Callbacks?
// Deep about Even liteners
// scope demo with Even listeners
// Garbage Collection & removeEventListeners

function attachEventListeners(){
    let count = 0;
document.getElementById("clickMe").addEventListener("click",function xyz(){
    console.log("Button Clicked",++count);
});

}
attachEventListeners(); 


