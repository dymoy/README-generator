// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)
- [Testing](#testing)
- [Questions](#questions)
- [License](#License)

## Installation 
${data.installation}

## Usage 
${data.usage}

## Contribution Guidelines
${data.contribution}

## Testing 
${data.test}

## License 
This GitHub repository is licensed under the ${data.license} license.

## Questions
This project was created by @${data.username}  
My GitHub profile can be found [here](https://github.com/${data.username}).  
For any related questions, please contact me via email at [${data.email}]()
`;
}

module.exports = generateMarkdown;
