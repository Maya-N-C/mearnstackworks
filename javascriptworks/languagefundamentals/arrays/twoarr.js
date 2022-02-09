var arr=[2,3,4,5]
arr.sort((n1,n2)=>n1-n2)
var pairnum=7;
var low=0;
var upp=arr.length-1;
flag=0;
while(low<upp){
    let crtsum=(arr[low]+arr[upp])
    if(pairnum==crtsum){
        flag=1;
      console.log(`pairs(${arr[low]},${arr[upp]})`);
      break;
    }
    else if(crtsum<pairnum){
        low++;
    }
    else if(crtsum>element)
    {
        upp--;
    }
}
if(flag==0){
    console.log("no pairs found");
}