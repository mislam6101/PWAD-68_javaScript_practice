class formData{
    constructor(name, email, gender, skills, address, division){
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.skills = skills;
        this.address = address;
        this.division = division;
    }

    dataDisplay(){
        let Output = "<h3> Information </h3>";
        Output += "Name :" + this.name + "<br>";
        Output += "Email :" + this.email + "<br>";
        Output += "Gender :" + this.gender + "<br>";
        Output += "Skills :" + this.skills + "<br>";
        Output += "Address :" + this.address + "<br>";
        Output += "Division :" + this.division + "<br>";

        return Output;
    }
}