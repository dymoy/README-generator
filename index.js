// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

function validateInput(answer) {
    if (answer.length > 1) {
        return true;
    } else {
        console.log('\x1B[31mPlease enter a title name with more than 1 character.\x1B[31');
        return false;
    }
}

// Create an array of questions for user input including Title, Description, Installation instructions, Usage instructions, Contribution Guidelines, Test Instructions, and License.
const questions = 
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
            validate: validateInput
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description explaining the what, why, and how of your project. What is the purpose or motivation?',
            validate: validateInput
        },
        // {
        //     type: 'input',
        //     name: 'installation',
        //     message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
        // },
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: 'Provide instructions and examples for use.'
        // },
        // {
        //     type: 'input',
        //     name: 'contribution',
        //     message: 'Is this project open for contribution? If so, provide guidelines on how others can contribute!'
        // },
        // {
        //     type: 'input',
        //     name: 'test',
        //     message: 'Did you write any test scripts? If so, provide instructions on how to run them!',
        // },
        // {
        //     type: 'list',
        //     name: 'license',
        //     message: 'What license should we add to this project?',
        //     choices: [
        //         'Apache License 2.0',
        //         'BSD 3-Clause License',
        //         'GNU Affero General Public License (AGPL) v3.0',
        //         'GNU General Public License (GPL) v3',
        //         'GNU Lesser General Public License (LGPL) v3.0',
        //         'MIT',
        //         'Mozilla Public License 2.0,',
        //         'The Unlicense'
        //     ],
        //     default: 'MIT'
        // }
    ];

// Create a function to write README file
function writeToFile(fileName, content) {
    // TODO: Parse JSON file to write in .md format 
    fs.writeFile(`./output/${fileName}`, content, (err) => {
        err ? console.log(err) : console.log(`Success! Data written to: ./output/${fileName}`);
    });
}

// Create a function to initialize app
function init() {
    console.log("Welcome to the README Generator. Let's get started with some information about your project!");
    
    // Retrieve user's input using the inquirer package
    inquirer.prompt(questions)
    .then((data) => {
        // Call the writeToFile function to write the content into the output file
        const fileName = 'README.md';
        const content = generateMarkdown(data);
        writeToFile(fileName, content);
    });
}

// Function call to initialize app
init();
