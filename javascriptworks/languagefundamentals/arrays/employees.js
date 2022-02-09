var employees=[
    [1000,"ram","developer","kochi",25000,1],
    [1000,"ravi","developer","kochi",35000,2],
    [1000,"arjun","qa","tvm",34000,1],
    [1000,"tom","qa","tvm",45000,2],
    [1000,"jim","ba","banglore",55000,3],
    [1000,"tinu","ba","banglore",35000,2],
    [1000,"fred","sales","mumbai",45000,2],
    [1000,"abi","sales","mumbai",65000,5],

]
//name of emp who have low exp

//total salary
// var empsal=employees.map(data=>data[4])
// var totalsalary=empsal.reduce((sal1,sal2)=>sal1+sal2)
// console.log(totalsalary);
// var totalsalary=employees.map(data=>data[4]).reduce((sal1,sal2)=>sal1+sal2)
// console.log(totalsalary);

//minimum salary
// var min=employees.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1[4]:emp2[4])
// console.log(min);
//  var minsal=employees.map(data=>data[4]).reduceRight((emp1,emp2)=>(emp1[4]<emp2[4])?emp1:emp2)
//  console.log(minsal);
//maximum salary
//high exp emp
// var total=employees.reduce((emp1,emp2)=>emp1[4]+emp2[4])
// console.log(total);
//employees.sort((emp1,emp2)=>emp1[5]-emp2[5])
  //  console.log(employees);
  //emp names print
  //(1)var empname=employees.map(emp=>emp[1])
  //console.log(empname);
  //(2)console.log(employees.map(emp=>emp[1]));
  //(3)for(let employee of employees){
   // console.log(employee[1]);












//  employees.sort((emp1,emp2)=>emp2[4]-emp1[4])
//  console.log(employees);







//print developers details only
//var developers=employees.filter(emp=>"developer"==emp[2])
//console.log(developers);

//console.log(employees.length);
// for(let employee of employees){
//     if(employee[2]=="developer"){
//         console.log(employee);
//     }
// }
 

// for(let employee of employees){
//     if(employee[4]>30000){
//         console.log(employee);
//     }
// }
// console.log(employees.filter(salary=>salary[4]>30000));

// for(let employee of employees){
//     if(employee[1]=="arjun"){
//         console.log(employee);
//     }
// }
// console.log(employees.find(emp=>emp[1]=="arjun"));

