// var products=[
//     [100,"oreo",40,50],
//     [101,"goodday",30,50],
//     [102,"hidendseek",50,0],
//     [103,"moms's",20,10],
//     [104,"treat",70,5],
//     [105,"oreo",50,80],
//     [106,"oreo",70,50],


// ]
//sort,find,filter,some,forEach,reduce,map


// print costly product detail reduce
// var costproduct=products.reduceRight((item1,item2)=>item1[2]>item2[2]?item1:item2)
// console.log(costproduct);
// print outofstock products filter
// var outofstock=products.find(item=>item[3]==0)
// console.log(outofstock);
// print oreo details find
// var oreo=products.find(item=>item[1]=="oreo")
// console.log(oreo);
// sort products based on available stock order by desc sort
// var desc=products.sort((item1,item2)=>item2[3]-item1[3] )
// console.log(desc);
// print product details having maximum available stock reduce
// var maxstock=products.reduce((item1,item2)=>item1[3]>item2[3]?item1:item2);
// console.log(maxstock);
//is there any products with available stock greater than 100
// var isavailableStock=products.some(item=>item[3]>100)
// console.log(isavailableStock);
//is there any products available in range (10-20)
// var isavailable=products.some(item=>item[2]>=10 && item[2]<=20)
// console.log(isavailable);
//print all prdct details in range(10-20)
//  var isavailable=products.filter(item=>item[2]>=10 && item[2]<=20) 
//  console.log(isavailable);
//names using foreach
// products.forEach(item=>console.log(item[1]))


// var arr=[
//     [10,50],
//     [20,60],
//     [1,2],
//     [5,8],
//     [30,40]
// ]
// // for(let array of arr){
// // for(let sarray of array){
// //     if(sarray>10){
// //         console.log(sarray);
// //     }
// //  }
// //  }
// //print all numbers >10
// //console.log(arr.flat());
// // arr.flat().filter(num=>num>10).forEach(num=>console.log(num))
// //print squares of all numbers
// // arr.flat().map(num=>num**2).forEach(num=>console.log(num))
// //print total sum
// // var total=arr.flat().reduce((num1,num2)=>num1+num2)
// // console.log(total);
// //print higest element
// var highest=arr.flat().reduce((num1,num2)=>num1>num2?num1:num2)
// console.log(highest);


 //convert string to array
 var string="hello";
 Array.from(string).map(char=>char.toUpperCase()).forEach(char=>console.log(char))