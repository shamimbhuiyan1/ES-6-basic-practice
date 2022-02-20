//  inheritance ,extends,super 

class TeamMember{
    name;
    designation= 'Support web dev ';
    address ='BD';
    constructor(name,address){
         this.name=name;
         this.address=address;
    }
}


class Support extends TeamMember{
    
    /* name;
    designation= 'Support web dev ';
    address ='BD';
    constructor(name,address){
         this.name=name;
         this.address=address;
    } */

    groupSupportTime;
    constructor(name,address,time){
        super(name,address)
        this.groupSupportTime=time;
    }
    startSession(){
        console.log('start a support session');
    }
 }

 class StudentCare extends TeamMember{
    /* name;
    designation= 'Sudent care of web dev ';
    address ='BD';
    constructor(name,address){
         this.name=name;
         this.address=address;
    } */
    groupSupportTime;
    constructor(name,address,time){
        super(name,address)
        this.groupSupportTime=time;
    }

   bultRoutine(student){
        console.log(this.name,'Build a Routine',student);
    }
 }


 class NeptuneDev extends TeamMember{
    /* name;
    designation= 'Sudent care of web dev ';
    address ='BD';
    constructor(name,address){
         this.name=name;
         this.address=address;
    } */

    codeEditor;
    constructor(name,address,editor){
        super(name,address);
        this.codeEditor=editor;
    }
   releaseApp(version){
        console.log(this.name,'Build a Routine',version);
    }
 }




 const nick = new Support('shamim bhuiyan','BD', 5);
 const salaman = new Support('ayman bhuiyan','Dubai',9);
 
 const alia = new StudentCare('alia kappor','Mumbai',7);
 const priyanka = new NeptuneDev('priyanka jonas','Rajsthan','Android Studio');

 console.log(salaman)
 console.log(nick)
 console.log(alia)
 console.log(priyanka)



 nick.startSession();