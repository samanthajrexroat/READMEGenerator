// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a brief description of this project: ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the installation instructions for this project, if any: ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is this project used?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'How can others contribute to this project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Are there any test instructions?',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license should this project have?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPLv2','Other','GPLv3','BSD 3-clause','none'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('readme.md', (data), (err) => 
    {
        err ? console.error(err) : console.log ('File written');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(generateMarkdown(data));
    })
}

// Function call to initialize app
init();
