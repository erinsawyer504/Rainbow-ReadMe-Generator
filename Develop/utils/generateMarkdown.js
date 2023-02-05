// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

class Markdown {
    static generateReadMe(answers){
      return `
# ${answers.title}
## Description
${answers.description}
## Table of Contents
- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  
- [Constributing](#contributing)  
- [Tests](#tests)  
- [Questions](#questions)
## Installation
${answers.install}
## Usage
${answers.usage}
## License
This repository is covered under the ${answers.license} license.
## Contributing
${answers.contribution}
## Tests
${answers.test}
## Questions
GitHub username: ${answers.gitHub}
GitHub profile: (https://www.github.com/${answers.gitHub})    
Email address: ${answers.email}  
If you have additional questions, please feel free to email me.`;
    }
}


module.exports = Markdown;

