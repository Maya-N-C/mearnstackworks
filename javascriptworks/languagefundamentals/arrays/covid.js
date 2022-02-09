var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]
//+ve cases count
// console.log(coivd_data.map(count=>[count[2],count[1]]));

// q1 higest test + ve case district
    // var higest=coivd_data.reduce((data1,data2)=>data1[2]>data2[2]?data1:data2)
    // console.log(higest[1]);
// q2 district with higest 1 dose vaccination rate

var hidose=coivd_data.reduce((data1,data2)=>data1[5]>data2[5]?data1:data2)
var higestdose=coivd_data.reduce(data=>data[5]==hidose)
console.log(hi);

   
// q3 district with lowest death cases 

// q4 sort district with +ve cases
// coivd_data.sort((data1,data2)=>data2[2]-data1[2])
// console.log(coivd_data);

// q5 sort the districts based on 1st dose

// q6 is there any states with +ve cases > 60000

// q7 print trissur details
// var tsrdet=coivd_data.find(data=>data[1]=="thrissur")
// console.log(tsrdet);

// q8 total nu,ber of +ve cases

// q9 total number of cured cases

// q10 cured numbers of iduky
