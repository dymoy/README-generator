// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = {
    // Title 
    "title": "What is the name of your project?",
    // TODO: Description
    "description": "Provide a description of your project!"
    // TODO: Installation Instructions 
    // TODO: Usage Instructions 
    // TODO: Contribution Guidelines 
    // TODO: Test Instructions 
    // TODO: License (from a list of options)
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`,JSON.stringify(data, null, '\t'), (err) => {
        err ? console.log(err) : console.log(`Success! Data written to: ./output/${fileName}`);
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to the README Generator. Let's get started with some information about your project!");
    // Retrieve user's input using the inquirer package
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions.title
        },
        {
            type: 'input',
            name: 'description',
            message: questions.description
        },
    ])
    .then((data) => {
        const fileName = 'README.md';
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
