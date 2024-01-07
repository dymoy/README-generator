// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = {
    // Title 
    'title': 'What is the name of your project?',
    // Description
    'description': 'Provide a short description explaining the what, why, and how of your project. What is the purpose or motivation?',
    // Installation Instructions 
    'installation': 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    // Usage Instructions 
    'usage': 'Provide instructions and examples for use.',
    // Contribution Guidelines 
    'contribution': 'Is this project open for contribution? If so, provide guidelines on how others can contribute!',
    // Test Instructions 
    'test': 'Did you write any test scripts? If so, provide instructions on how to run them!',
    // License
    'license': 'What license should we add to this project?'
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
        // Call the writeToFile function to write the content into the output file
        const fileName = 'README.md';
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
