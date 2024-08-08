console.log("start");
setTimeout(function a (){
    console.log("after 5 sec");
},5000);



document.getElementById("clickMe").addEventListener("click",function b(){
    console.log("Button clicked ");
});

fetch("https://dummyjson.com/products").then(function c(){
    console.log("Completed")
});

//Promises & mutation observer are come in micro queue.
//rest all comes in call Back queue or Task Queue

// micro queue has more priority than callBack Queue

// when micro queue has more job or task then callBack queue are not execute for long period of time .

// then this problem is knownn as starvation.