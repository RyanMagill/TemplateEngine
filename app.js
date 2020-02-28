const classes = require("./classes.js");
const Manager = classes.Manager;
const Engineer = classes.Engineer;
const Intern = classes.Intern;

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./htmlRenderer");

let team = [];

function createManager() {
    
    inquirer.prompt([

    {
        type:"input",
        name: "mName",
        message: "What is your Managers name?",
    },    
    {
        type:"input",
        name: "mID",
        message: "What is your Managers ID Number?",
    },
    {
        type:"input",
        name:"mEmail",
        message:"what is your Managers email?",
    },
    {

        type:"input",
        name:"mOffice",
        message: "What is your managers office number?",
    },
    ]).then((answer)=>{
        team.push(new Manager(answer.mName, answer.mID, answer.mEmail, answer.mOffice));
        addTeamMember();
    })
    
}
function createEngineer() {
    
    inquirer.prompt([

    {
        type:"input",
        name: "Name",
        message: "What is your Engineer's name?",
    },    
    {
        type:"input",
        name: "ID",
        message: "What is your Engineer's ID Number?",
    },
    {
        type:"input",
        name:"Email",
        message:"What is your Engineer's email?",
    },
    {

        type:"input",
        name:"github",
        message: "What is your Engineer's github?",
    },
    ]).then((answer)=>{
        team.push(new Engineer(answer.Name, answer.ID, answer.Email, answer.github));
        addTeamMember();
    })
    
}
function createIntern() {
    
    inquirer.prompt([

    {
        type:"input",
        name: "Name",
        message: "What is your Intern's name?",
    },    
    {
        type:"input",
        name: "ID",
        message: "What is your Intern's ID Number?",
    },
    {
        type:"input",
        name:"Email",
        message:"What is your intern's email?",
    },
    {

        type:"input",
        name:"School",
        message: "What is your intern's office number?",
    },
    ]).then((answer)=>{
        team.push(new Intern(answer.Name, answer.ID, answer.Email, answer.School));
        addTeamMember();
    })
    
}

function addTeamMember(){
    inquirer.prompt([
        {
            type:"list",
            name: "employeeType",
            message: "what type of Team member would you like to add?",
            choices:[
                "Engineer",
                "Intern",
                "I dont want anymore team members",
            ]
        },
    ]).then((answer)=>{
        if(answer.employeeType === "Engineer"){
            createEngineer();
        }
        if(answer.employeeType === "Intern"){
            createIntern();
        }
        if(answer.employeeType === "I dont want anymore team members"){
            console.log(render(team));
            fs.writeFileSync(outputPath, render(team), "utf8");
        }
    })
}

createManager();