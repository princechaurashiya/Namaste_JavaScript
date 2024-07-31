/*******Block****** */

// {
// //Compund statement
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
//  }

 //console.log(a); //easly axcess bcz a is not a block variable , it is globle variable 

//console.log(b); //it is not axcess outside the block bcz it is a block variable;

//console.log(c);//it is not axcess outside the block bcz it is a block variable;


// if(true) {
//     console.log(true);
//     console.log("correct");
// }



/*********Shadowing************/

/*
var a = 100;
let b = 200;
const c = 300;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
    
}
console.log(a);
console.log(b);
console.log(c);

*/

/*********illegal Shadowing******* */

// let a = 20;
// {
//     var a = 20;
// }


// const a = 20;
// {
//     var a = 20;
// }


// // this is legal showding

// let b = 20;
// {
//     let b = 20;
// }

// const b = 20;
// {
//     const b = 20;
// }


// var a = 20;
// {
//     const a = 20;
// }


 let b = 20;
function x(){
        var b = 20;
}

