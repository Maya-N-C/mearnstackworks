var num=153;
var sum=0;
while(num!=0) //153!=0 15!=0 1!=0
{
    let digit=num%10; //153%10=3 15%10=5 1%10=1
    sum+=digit**3; //sum=0+27 27+125=152 +1=153
    num=Math.floor(num/10);//153/10=15.3=15 15/10=1.5=1 1/10=0.1
}
console.log(sum);