
// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("Namaste javaScript");
// }
// x();



// Using late simple

// function x(){
//     for(let i = 1; i<=5; i++){
//         setTimeout (function(){
//             console.log(i);
//         },i * 1000);
//     }
//     console.log("Namaste JavaScript");
// }
// x();



// using var 
function x (){
    for(var i = 1; i<=5; i++){
        function close(i){
        
            setTimeout(function(){
                console.log(i);
            }, i* 1000);

        }
        close(i);
       
    }
    console.log("Namste javaScript");
}
x();