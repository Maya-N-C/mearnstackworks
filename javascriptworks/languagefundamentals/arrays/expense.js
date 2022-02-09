var total;
var expenses=[25000,30000,35000,28000,27000];
a=expenses;
total=a[0]+a[1]+a[2]+a[3]+a[4];
//console.log(total);

var expenses=[25000,30000,35000,28000,87000];
var maxExp=0;
for(let amount of expenses){
    if(maxExp<amount){
        maxExp=amount;
    }
}
//console.log(maxExp)

  var expenses=[25000,300,35000,28000,27000];
var minExp=expenses[0];
for(let amount of expenses){
    if(amount<minExp){
        minExp=amount;
    }
}console.log(minExp);










