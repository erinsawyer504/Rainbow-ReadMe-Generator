//packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const Markdown = require('./utils/generateMarkdown.js');



// setting up inquirer prompt to ask user questions related to readme creation
const questions = [
    {
        type: "input",
        message: "Enter project title:",
        name: "title",
    },
    {
        type: "input",
        message: "Enter project's description",
        name: "description",
    },
    {
        type: "input",
        message: "Enter installation instructions",
        name: "install",
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage",
    },
    {
        type: "list",
        choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'zLib', 'Unlicense'],
        message: "Choose a license:",
        name: "license",
        //changing the value to all lower case in order to match the license options in the generateMarkDown
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "contribution",
    },
    {
        type: "input",
        message: "Enter test instructions",
        name: "test",
    },
    {
        type: "input",
        message: "Enter github username:",
        name: "gitHub",
    },
    {
        type: "input",
        message: "Enter email address",
        name: "email",
    }
];

//function to prompt questions for user to answer & to create the readme file in the main folder
function promptQuestions() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = Markdown.generateReadMe(answers);
            fs.writeFile('../README.md', mark, function(err) {
                if(err){
                    console.log('File not saved.');
                } else{
                    console.log("README Saved");
                }
            });
        })
        .catch((error) => {
            console.log(error)
        })
}

promptQuestions();

