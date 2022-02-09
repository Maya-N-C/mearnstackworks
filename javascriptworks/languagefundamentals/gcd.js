var num1=12;
var num2=48;
var gcd=1;
for(let i=1;i<=48;i++)
    {
        if(num1%i==0 && num2%i==0)
        gcd=i;
    }
    console.log(gcd);