// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)';
  }
  if (license === 'Apache 2.0') {
    return '![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  }
  if (license === 'GNU GPL v3.0') {
    return '![License: GNU GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  }
  if (license === 'None') {
    return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt';
  }
  if (license === 'Apache 2.0') {
    return 'http://www.apache.org/licenses/LICENSE-2.0';
  }
  if (license === 'GNU GPL v3.0') {
    return 'https://www.gnu.org/licenses';
  }
  if (license === 'None') {
    return 'A license was not selected';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  } else {
    return ` License: ${license}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
![Github license](https://img.shields.io/static/v1?label=License&message=${data.license}&color=brightgreen)
## Description 
${data.description}
## Screenshot
![]()
  
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
${data.installation}
  
  
## Usage
${data.usage}
   
  
## Credits
${data.credits}
  
  
## License
${data.license}
## Features
${data.features}
## How to Contribute
${data.contribute}  
(https://www.contributor-covenant.org/)
  
## Tests
${data.tests}
  
## Questions
Reach me at the links below with additional questions:
- Github: https://github.com/${data.github}
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
