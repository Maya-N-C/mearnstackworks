var expenses=[10000,2000,30000,40000];
minExp=expenses[0];
for(let amount of expenses){
    if(minExp>amount){
        minExp=amount
    }
}
console.log(minExp);