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
    static renderLicenseBadge(license){
      const badge = {
        apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
        eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
        ibm: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
        isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
        zlib: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
        unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
      }
      return badge[license];
    }
    static renderLicenseInfo(license){
      const licenseInfo = {
        apache: `[Apache](https://opensource.org/licenses/Apache-2.0)`,
        boost: `[Boost](https://www.boost.org/LICENSE_1_0.txt)`,
        eclipse: `[Eclipse](https://opensource.org/licenses/EPL-1.0)`,
        ibm: `[IBM](https://opensource.org/licenses/IPL-1.0)`,
        isc: `[ISC](https://opensource.org/licenses/ISC)`,
        mit: `[MIT](https://opensource.org/licenses/MIT)`,
        mozilla: `[Mozilla](https://opensource.org/licenses/MPL-2.0)`,
        zlib: `[zLib](https://opensource.org/licenses/Zlib)`,
        unlicense: `[Unlicense](http://unlicense.org/)`,
      }

      return licenseInfo[license];

    }

    static generateReadMe(answers){
      return `
${this.renderLicenseBadge(answers.license)}
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
This repository is covered under the ${this.renderLicenseInfo(answers.license)} license.
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

