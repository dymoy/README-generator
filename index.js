/* Include packages needed for this application */
const inquirer = require('inquirer');
const fs = require('fs');

const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

/**
 * Validates that the parameter passed is greater than 1 character in length.
 * @param {String} answer - The String to be validated.
 * @return {Boolean} - Returns True if the param is longer than 1 character. Otherwise, returns False.
 */
function validateInput(answer) {
    if (answer.length > 1) {
        return true;
    } else {
        console.log('\x1B[31m Please enter a a string with more than 1 character. \x1B[31');
        return false;
    }
}

/**
 * Validates that the parameter passed is a valid email addressed based on the defined regex. 
 * @param {String} answer - The String to be validated.
 * @returns {Boolean} - Returns True if the param matches the defined regular expression. Otherwise, returns False.
 */
function validateEmail(answer) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(answer)) {
        return true;
    } else {
        console.log('\x1B[31m Please enter a valid email address. \x1B[31');
        return false;
    }
}

/** 
 * Create an array of questions for user input including the following sections:
 * Title, Description, Installation instructions, Usage instructions, Contribution Guidelines, Test Instructions, and License.
 */ 
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'May I have your GitHub username?',
        validate: validateInput
    },
    {
        type: 'input',
        name: 'email',
        message: "Now, what's your email?",
        validate: validateEmail
    },
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
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. Press Enter to default to N/A.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Press Enter to default to N/A.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Is this project open for contribution? If so, provide guidelines on how others can contribute! Press Enter to default to N/A.',
        default: 'N/A'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Did you write any test scripts? If so, provide instructions on how to run them!Press Enter to default to N/A.',
        default: 'N/A'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project!',
        choices: [
            'Apache 2.0',
            'BSD 3-Clause',
            'GNU Affero General Public (AGPL) v3.0',
            'GNU General Public (GPL) v3',
            'GNU Lesser General Public (LGPL) v3.0',
            'MIT',
            'The Unlicense'
        ],
        default: 'MIT'
    }
];

/**
 * Create a function to write the README file using fs.
 * @param {String} fileName - The name of the file to write to. 
 * @param {String} content - The content to write into the file.
 */
function writeToFile(fileName, content) {
    fs.writeFile(`./output/${fileName}`, content, (err) => {
        err ? console.log(err) : console.log(`Success! Your new README was written to: ./output/${fileName}`);
    });
}

/* Create a function to initialize app */
function init() {
    console.log("Welcome to the README Generator! Let's get started. Please answer the following prompts.");
    
    // Prompt the user with the questions and then write data into 'README.md'
    inquirer.prompt(questions)
    .then((data) => {
        // Call the writeToFile function to write the content into the output file
        const fileName = 'README.md';
        const content = generateMarkdown(data);
        writeToFile(fileName, content);
    });
}

/* Function call to initialize app */
init();
