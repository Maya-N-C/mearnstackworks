var expenses=[10000,200000,30000,40000,50000];
maxExp=0;
for(let amount of expenses){
    if(maxExp<amount){
        maxExp=amount;
    }
}
console.log(maxExp);