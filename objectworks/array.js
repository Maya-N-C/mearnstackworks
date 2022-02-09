// var arr=[
//     [10,20,[1,2]],
//     [30,31,[[12,12,[10,20]]]]
// ]
// console.log(arr.flat(4));
// function add(a1,a2){
// return a1+a2
// }



// function add(a1,a2,a3)
// return(a1+a2+a3) 
//add numbers
// function add(...args){
// return args.reduce((n1,n2)=>n1+n2)
// }
// console.log(add(10,20));


//find max number
function findmax(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(findmax(12,75,3));



