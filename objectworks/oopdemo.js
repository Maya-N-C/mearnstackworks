//create a new class student setStudent(rol,st_name,course,total)printDetails()
class student{
    constructor(rol,st_name,course,total){
        this.rolnum=rol;
        this.name=st_name,
        this.course=course,
        this.total=total
    }
    printDetails(){
        console.log(this.rolnum,this.name,this.course,this.total);
    }
}
var maya=new student(11,"maya","ms",13)
maya.printDetails()

var arish=new student(13,"arish","ms",15)
arish.printDetails()
//constructor
//duty=initilaize instance variables
//invoked while creating object