const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArray = [];

// function for creating manager profile
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's id number?",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
    ]).then(res => {
        const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.officeNumber)
        teamArray.push(manager);
        console.log(teamArray);
        createTeam();
    }) 
}

// function for creating team
function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "Which type of employee are you adding?",
            choices: ["Engineer", "Intern", "I'm done"],
        },
    ]).then(res => {
        switch (res.choice) {
            case "Engineer":
              createEngineer();
              break;
            case "Intern":
              createIntern();
              break;
            default:
              makeHTML();
        }
    })
}

// function for creating engineer profile
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's id number?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github username?"
        }
    ]).then(res => {
        const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.github)
        teamArray.push(engineer);
        console.log(teamArray);
        createTeam();
    })
}

// function for creating intern profile
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id number?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email address?",
        },
        {
            type: "input",
            name: "school",
            message: "What school does the intern go to?"
        }
    ]).then(res => {
        const intern = new Intern(res.internName, res.internId, res.internEmail, res.school)
        teamArray.push(intern);
        console.log(teamArray);
        createTeam();
    })
}

// Function to make the html file using fs and render function
function makeHTML() {
    fs.writeFileSync(outputPath, render(teamArray));
}

createManager();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
