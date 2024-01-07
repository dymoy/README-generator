// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input including Title, Description, Installation instructions, Usage instructions, Contribution Guidelines, Test Instructions, and License.
const questions = {
    'title': 'What is the name of your project?',
    'description': 'Provide a short description explaining the what, why, and how of your project. What is the purpose or motivation?',
    'installation': 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    'usage': 'Provide instructions and examples for use.',
    'contribution': 'Is this project open for contribution? If so, provide guidelines on how others can contribute!',
    'test': 'Did you write any test scripts? If so, provide instructions on how to run them!',
    'license': 'What license should we add to this project?'
}

// Create a function that parses the JSON data 
function parseInquirerData(data){
    var content = 
    `
    # ${data.title}

    ## Description 
    ${data.description}
    `;

    console.log(content);

    // Call the writeToFile function to write the content into the output file
    const fileName = 'README.md';
    writeToFile(fileName, content);
}

// Create a function to write README file
function writeToFile(fileName, data) {
    // TODO: Parse JSON file to write in .md format 
    fs.writeFile(`./output/${fileName}`, JSON.stringify(data, null, '\t'), (err) => {
        err ? console.log(err) : console.log(`Success! Data written to: ./output/${fileName}`);
    });
}

// Create a function to initialize app
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
        // {
        //     type: 'input',
        //     name: 'installation',
        //     message: questions.installation
        // },
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: questions.usage
        // },
        // {
        //     type: 'input',
        //     name: 'contribution',
        //     message: questions.contribution
        // },
        // {
        //     type: 'input',
        //     name: 'test',
        //     message: questions.test
        // },
        // {
        //     type: 'list',
        //     name: 'license',
        //     message: questions.license,
        //     choices: [
        //         'Academic Free License v3.0',
        //         'Apache license 2.0',
        //         'Artistic license 2.0',
        //         'Boost Software License',
        //         'BSD 2-clause "Simplified" license',	
        //         'BSD 3-clause "New" or "Revised" license',	
        //         'BSD 3-clause Clear license',
        //         'BSD 4-clause "Original" or "Old" license',
        //         'BSD Zero-Clause license',
        //         'Creative Commons license family',
        //         'Creative Commons Zero v1.0 Universal',
        //         'Creative Commons Attribution 4.0',
        //         'Creative Commons Attribution ShareAlike 4.0',
        //         'Do What The F*ck You Want To Public License',
        //         'Educational Community License v2.0',
        //         'Eclipse Public License 1.0',
        //         'Eclipse Public License 2.0',
        //         'European Union Public License 1.1',
        //         'GNU Affero General Public License v3.0',
        //         'GNU General Public License family',
        //         'GNU General Public License v2.0',
        //         'GNU General Public License v3.0',
        //         'GNU Lesser General Public License family',
        //         'GNU Lesser General Public License v2.1',
        //         'GNU Lesser General Public License v3.0',
        //         'ISC',
        //         'LaTeX Project Public License v1.3c',
        //         'Microsoft Public License',
        //         'MIT',
        //         'Mozilla Public License 2.0',
        //         'Open Software License 3.0',
        //         'PostgreSQL License',
        //         'SIL Open Font License 1.1',
        //         'University of Illinois/NCSA Open Source License',
        //         'The Unlicense',
        //         'zLib License'
        //     ],
        //     default: 'MIT'
        // }
    ])
    .then((data) => {
        parseInquirerData(data);
    });
}

// Function call to initialize app
init();
