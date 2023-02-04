//packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
//project title
//enter discription(Description), installation instructions (Installation), usage information(Usage), contribution guidelines, (Contributing) and test instructions(Tests)
//choose a liscense for application from list of options
//Badge for that liscense is added near the top of the readme and a notice is added to the section of readme (License) that explains which liscense the application is covered under
//enter github username - added to (Questions) with link to github profile
//enter email - added to (Questions) w insctructions on how to reach me with additional questions
//click on links in TOC and taken to corresponding section

const questions = [
    {
        type: "input",
        message: "Enter project title:",
        name: "title",
        validate: userInput,
    },
    {
        type: "input",
        message: "Enter project's description",
        name: "description",
        validate: userInput,
    },
    {
        type: "input",
        message: "Enter installation instructions",
        name: "install",
        validate: userInput,
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage",
        validate: userInput,
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "contribution",
        validate: userInput,
    },
    {
        type: "input",
        message: "Enter test instructions",
        name: "test",
        validate: userInput,
    },
    {
        type: "input",
        message: "Enter github username:",
        name: "gitHub",
        validate: userInput,
    },
    {
        type: "input",
        message: "Enter email address",
        name: "email",
        validate: userInput,
    },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
