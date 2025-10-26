// student class

class sTudent{
    constructor(name, roll, contact){
        this.name = name;
        this.roll = roll;
        this.contact = contact;
    }

    info(){
        let output = "<h2> Student Information </h2>";
        
        output += "Name : " + this.name + "<br>"; 
        output += "Roll : " + this.roll + "<br>"; 
        output += "Contact : " + this.contact + "<br>"; 

        return output;
    }
}