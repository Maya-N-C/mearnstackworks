var arr=[10,10,20,20,30,30,40,40,50,50,50]
var count={}
// for(let num of arr){
//     if(num in count){
//         count[num]+=1
//     }
//     else{
//         count[num]=1
//     }
// }
arr.map(num=>num in count?count[num]+=1:count[num]=1)
console.log(count);