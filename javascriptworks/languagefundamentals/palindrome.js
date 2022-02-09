var num=523;
var str="";
while(num!=0){ //523!=0 t   52!=0 t 5!=0
    let lastdigit=num%10; // 523%10=3  52%10=2
    str+=lastdigit; // ""+=3 3+=2
    num=Math.floor(num/10);//523/10=52.3=52 52/10=5.2=5
}console.log(str);     






