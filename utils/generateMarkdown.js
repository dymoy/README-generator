/**
 * Create a function that retuns a license badge based on which license is passed in.
 * If there is no license, return an empty string.
 * @param {String} license - The license chosen with inquirer.
 * @returns {String} badge - The .svg file associated with the license badge.
 */
function renderLicenseBadge(license) {
  var badge;

  switch (license) {
    case 'Apache 2.0':
      badge = {name: 'Apache_2.0', color: 'green'};
      break;
    case 'BSD 3-Clause': 
      badge = {name: 'BSD_3--Clause', color: 'orange'};
      break;
    case 'GNU Affero General Public (AGPL) v3.0':
      badge = {name: 'AGPL_v3', color: 'blue'};
      break;
    case 'GNU General Public (GPL) v3':
      badge = {name: 'GPLv3', color: 'blue'};
      break;
    case 'GNU Lesser General Public (LGPL) v3.0':
      badge = {name: 'LGPL_v3', color: 'blue'};
      break;
    case 'MIT':
      badge = {name: 'MIT', color: 'yellow'};
      break;
    case 'The Unlicense':
      badge = {name: 'Unlicense', color: 'lightgrey'};
      break;
    default: 
      badge = '';
      break;
  }
  
  return `https://img.shields.io/badge/License-${badge.name}-${badge.color}.svg`;
}

/**
 * Create a function that returns the license link. 
 * If there is no license, return an empty string.
 * @param {String} license - The license chosen with inquirer.
 * @returns {String} link - The link the license documentation. 
 */
function renderLicenseLink(license) {
  var link = '';

  switch (license) {
    case 'Apache 2.0':
      link = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'BSD 3-Clause': 
      link = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'GNU Affero General Public (AGPL) v3.0':
      link = 'https://www.gnu.org/licenses/agpl-3.0';
      break;
    case 'GNU General Public (GPL) v3':
      link = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'GNU Lesser General Public (LGPL) v3.0':
      link = 'https://www.gnu.org/licenses/lgpl-3.0';
      break;
    case 'MIT':
      link = 'https://opensource.org/licenses/MIT';
      break;
    case 'The Unlicense':
      link = 'http://unlicense.org/';
      break;
  }
  
  return link
}

/**
 * Create a function to generate markdown for README.
 * @param {JSON} data - The JSON object that includes the answers provided to inquirer.
 * @returns {String} - The markdown content to write.
 */
function generateMarkdown(data) {
  const licenseLink = renderLicenseLink(data.license);
  const licenseBadge = renderLicenseBadge(data.license);

  return `# ${data.title}  
[![License](${licenseBadge})](${licenseLink})

## Description
${data.description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

## Installation 
${data.installation}

## Usage 
${data.usage}

## Contributing
${data.contribution}

## Testing 
${data.test}

## License 
This GitHub repository is licensed under the ${data.license} license. Please refer to the license documentation [here](${licenseLink}).

## Questions
This project was created by [${data.username}](https://github.com/${data.username}).  
For any related questions, please contact me via email at <${data.email}>.
`;
}

/* Export the generateMarkdown function */
module.exports = generateMarkdown;
