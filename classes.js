class Employee{
    constructor(name, ID, email){
        this.name = name;
        this.ID = ID;
        this.email = email;
    }

    getName(){
        console.log(this.name)
    }
    getID(){
        console.log(this.ID)
    }
    getEmail(){
        console.log(this.email)
    }
    getRole(){
        console.log(this.role)
    }
    
}

class Manager extends Employee{
    constructor(name, ID, Email, officeNumber){
        super(name, ID, Email);
        this.officeNumber = officeNumber;
    }
    getRole(){
        return "Manager";
    }

}

class Engineer extends Employee{
    constructor(name, ID, Email, githubUsername){
        super(name, ID, Email);
        this.githubUsername = githubUsername;
    }
    getGithub(){
        return this.githubUsername;
    }
    getRole(){
        return "Engineer";
    }

}

class Intern extends Employee{
    constructor(name, ID, Email, school){
        super(name, ID, Email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }

}

module.exports = {
    Manager : Manager,
    Engineer : Engineer,
    Intern : Intern
}