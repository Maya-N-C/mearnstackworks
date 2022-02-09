var arr=[10,11,1,2,3,14]
var element=8;
flag=0;
for(let num of arr){
    if(element==num){  //2==10 2==10
        flag=1;
        break;
    }
}
console.log(flag==1?"found":"notfound");