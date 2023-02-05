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
        // validate: userInput(),
    },
    {
        type: "input",
        message: "Enter project's description",
        name: "description",
        // validate: userInput(),
    },
    {
        type: "input",
        message: "Enter installation instructions",
        name: "install",
        // validate: userInput(),
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage",
        // validate: userInput(),
    },
    {
        type: "list",
        choices: [
            {
                name: "Apache 2.0 License",
                value: "Apache 2.0 License,https://img.shields.io/badge/License-Apache_2.0-blue.svg"
            },
            {
                name: "Boost Software License 1.0",
                value: "Boost Software License 1.0,https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
            },
            {
                name: "Eclipse Public License 1.0",
                value: "Eclipse Public License 1.0,https://img.shields.io/badge/License-EPL_1.0-red.svg",
            },
            {
                name: "IBM Public License Version 1.0",
                value: "IBM Public License Version 1.0,https://img.shields.io/badge/License-IPL_1.0-blue.svg",
            },
            {
                name: "ISC License (ISC)",
                value: "ISC License (ISC),https://img.shields.io/badge/License-ISC-blue.svg8",
            },
            {
                name: "The MIT License",
                value: "The MIT License,https://img.shields.io/badge/License-MIT-yellow.svg",
            },
            {
                name: "Mozilla",
                value: "Mozilla,https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
            },
            {
                name: "The Perl License",
                value: "The Perl License,https://img.shields.io/badge/License-Perl-0298c3.svg",
            },
            {
                name: "The Artistic License 2.0",
                value: "The Artistic License 2.0,https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg", 
            },
            {
                name: "The Unlicense",
                value: "The Unlicense,https://img.shields.io/badge/license-Unlicense-blue.svg",
            },
            {
                name: "Zlib",
                value: "Zlib,https://img.shields.io/badge/License-Zlib-lightgrey.svg",
            },
        ],
        message: "Choose a license:",
        name: "license",
        // validate: userInput(),
    },
    {
        type: "input",
        message: "Enter contribution guidelines:",
        name: "contribution",
        // validate: userInput(),
    },
    {
        type: "input",
        message: "Enter test instructions",
        name: "test",
        // validate: userInput(),
    },
    {
        type: "input",
        message: "Enter github username:",
        name: "gitHub",
        // validate: userInput(),
    },
    {
        type: "input",
        message: "Enter email address",
        name: "email",
        // validate: userInput(),
    },
];

//Validating reponse to make sure user entered in a value
// function userInput(input){
//     if ( input === "" ){
//         console.log("Enter in a value.");
//         return false;
//     } else {
//         return true;
//     }
// }

//function to prompt questions for user to answer
function promptQuestions() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = Markdown.generateReadMe(answers);
            fs.writeFile('README.md', mark, function(err) {
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




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("The README has been generated");
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
