var num=4;
var i=1;
fact=1;
while(i<=num) //1<=4 t 2<=4 t 3<=4  t 4<=4 t
{  
    fact*=i; //1*1=1  1*2=2  2*3=6 6*4=24
    i++;
}
console.log(fact);