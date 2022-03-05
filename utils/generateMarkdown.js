
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none'){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }else{
    return "";
  }
}


// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    return `\n* [License](#license)\n`
  }else{
    return "";
  }
}


// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none'){
    return `\n ## License \n ${license}`
  }else{
    return "";
  }
}

// Function to create markdown file.
function generateMarkdown(data) {
return `
${renderLicenseBadge(data.license)}
# ${data.title}

## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseLink(data.license)}
    
## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
If you have any questions about this project, please contact me at ${data.email}.<br>
To see more of my projects, visit: https://github.com/${data.github}
`;
}
// Allowing other files to access this info
module.exports = generateMarkdown;
