var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]
// q1 total number accounts
//    console.log(accounts.length);
//q2 print all account numbers whose ac-type savings
// accounts.filter(ac=>ac.ac_type=="savings").forEach(ac=>console.log(ac.acno))
//q3 print balance of acno=1000
// var balance=accounts.find(data=>data.acno==1000).balance
// console.log(balance);
//q4 print all g-pay transaction details
// var gpaytransactions=accounts.map(data=>data.transactions).flat().filter(trans=>trans.method=="phone-pay")
// console.log(gpaytransactions);
//q4print all transactions whose transaction aount >500
// var transaction=accounts.map(data=>data.transactions).flat().filter(trns=>trns.amount>500)
// console.log(transaction);
//q5 print credit transcation's of 1002

var credit=accounts.map(data=>data.transactions).flat().filter(t=>t.to==1002)
console.log(credit);
var debit=accounts.find(data=>data.acno==1002).transactions
// console.log(debit);

//q6 print highest balance account details
// var highbal=accounts.reduce((d1,d2)=>d1.balance>d2.balance?d1:d2)
// console.log(highbal);

//q7 print transaction history of 1002
// var transactionHistory={debitTrans:debit,creditTrans:credit}
// console.log(transactionHistory);
var transactionHistory=[...credit,...debit]