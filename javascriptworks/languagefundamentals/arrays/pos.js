var arr=[10,2,4,5];
flag=0;
var element=1;
for(let index in  arr){
    if(element==arr[index]){
        console.log(index);
        flag=1;
        break;
    }
}
console.log(flag==0?"nf":"f");
