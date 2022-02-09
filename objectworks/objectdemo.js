//student object
var student={
    Roll_No:10,
    Name:"Maya",
    Course:"mearn stack",
    total:250
}
//print student name and course
console.log(student.Name);
console.log(student.Course);
//isthere gender key in student
console.log("gender"in student);
//add a new property and value
student["gender"]="female"
console.log(student);
//isvaccinated:true
student["isvaccinated"]=true
console.log(student);
//vaccine:covishield
student.vaccine="covishield"
console.log(student);
//update covaxin and 1000
student.vaccine="covaxin"
student.total=1000
console.log(student);
//add 50 in total
student.total+=50
console.log(student);
//iteration from student
for(let key in student){
    console.log(key);
    console.log(student[key]);
}

