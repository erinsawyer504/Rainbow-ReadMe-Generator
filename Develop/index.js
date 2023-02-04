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
        type: "list",
        choices: [
            {
                name: "Apache 2.0 License",
                value: "Apache 2.0 License, https://img.shields.io/badge/License-Apache_2.0-blue.svg"
            },
            {
                name: "Boost Software License 1.0",
                value: "Boost Software License 1.0, https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
            },
            {
                name: "Eclipse Public License 1.0",
                value: "Eclipse Public License 1.0, https://img.shields.io/badge/License-EPL_1.0-red.svg",
            },
            {
                name: "IBM Public License Version 1.0",
                value: "IBM Public License Version 1.0, https://img.shields.io/badge/License-IPL_1.0-blue.svg",
            },
            {
                name: "ISC License (ISC)",
                value: "ISC License (ISC), https://img.shields.io/badge/License-ISC-blue.svg8",
            },
            {
                name: "The MIT License",
                value: "The MIT License, https://img.shields.io/badge/License-MIT-yellow.svg",
            },
            {
                name: "Mozilla",
                value: "Mozilla, https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
            },
            {
                name: "The Perl License",
                value: "The Perl License, https://img.shields.io/badge/License-Perl-0298c3.svg",
            },
            {
                name: "The Artistic License 2.0",
                value: "The Artistic License 2.0, https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg", 
            },
            {
                name: "The Unlicense",
                value: "The Unlicense, https://img.shields.io/badge/license-Unlicense-blue.svg",
            },
            {
                name: "Zlib",
                value: "Zlib, https://img.shields.io/badge/License-Zlib-lightgrey.svg",
            },
        ],
        message: "Choose a license:",
        name: "license",
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
