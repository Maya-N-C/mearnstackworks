var arr=[4,5,6] //[11,10,9]
var sum=0;var op=[];
for(let num of arr){
    sum+=num
}
for(let num of arr){
    op.push(sum-num)
}
console.log(op);