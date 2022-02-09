//{thrissur:32,ekm:32,ktm:30,idk:20}
var data=[
    {districtname:"thrissur",weather:29},
    {districtname:"ekm",weather:32},
    {districtname:"ktm",weather:29},
    {districtname:"idk",weather:18},
    {districtname:"thrissur",weather:40},
    {districtname:"ekm",weather:30},
    {districtname:"ktm",weather:30},
    {districtname:"idk",weather:20},
]
var op={};
for(let record of data){ //    {districtname:"thrissur",weather:29},
 let disname=record["districtname"]
   let crntemp=record["weather"]
   if(disname in op){
      let oldtemp=op[disname]
      if(crntemp>oldtemp){
          op[disname]=crntemp
      } 
   }
   else{  
       op[disname]=crntemp
   }
}
console.log(op);
console.log(Object.entries(op).sort((r1,r2)=>r2[1]-r1[1]));  


