const classes = require("./classes.js");
const Manager = classes.Manager();
const Engineer = classes.Engineer();
const Intern = classes.Intern();

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");

let team = [];
​

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
        team.manager = new Manager(answer.mName, answer.mID, answer.mEmail, answer.mOffice)
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
        team.manager = new Engineer(answer.Name, answer.ID, answer.Email, answer.github)
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
        team.manager = new Intern(answer.Name, answer.ID, answer.Email, answer.School)
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
        if(answer.employeeType === ""){
            renderTeam();
        }
    })
}

function renderTeam(){
    
}
​createManager();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```