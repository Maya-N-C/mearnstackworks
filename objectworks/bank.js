class Bank{
    createAccount(acno,pName,pan,branch,phone,bal){
        this.acnumbr=acno;
        this.name=pName;
        this.pan=pan;
        this.branch=branch;
        this.phone=phone;
        this.bal=bal;
    }
    withdraw(amount){
        if(amount>this.bal){
            console.log(`transaction failed insufficient balance on your ${this.acnumbr}`);
        }
        else{
            this.bal-=amount
            console.log(`your account ${this.acnumbr}has been debited with${amount}your availble balance${this.bal}`);
        }
    }
    deposite(amount){
        this.bal+=amount;
        console.log(`your account ${this.acnumbr}has been credited with${amount}your availble balance${this.bal}`);

    }
    balanceenqiry(){
        console.log(`your available balance ${this.bal}`);
    }
}
var bank=new Bank();
bank.createAccount(122,"maya",123,"velur",566867,8000)
bank.withdraw(10000)
bank.deposite(10000)
bank.balanceenqiry()