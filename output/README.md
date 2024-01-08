# README Generator  
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This command-line application assists with quickly and easily creating a professional README file for your project.

## Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Testing](#Testing)
- [License](#License)
- [Questions](#Questions)

## Installation 
Clone this repository to your local machine. Run `npm install` in your CLI to download the npm package dependencies. Run `node index.js` on your CLI to run the application.

## Usage 
When the program is initialized, you will be prompted to answer a series of questions about your project. This includes the title, a short description, installation instructions (if any), usage instructions, how to make contributions, any testing instructions, the license information, and and contact information for questions. Once all the questions have been answered, `fs.writeFile()` is used to generate a markdown file based on your answers. The generated file will be written to the relative ./output directory.

## Contributing
To make contributions to this project, fork the repository, make some commits to improve the application, and open a pull request. From there, we can discuss your changes and merge the pull request once your contributions have been approved.

## Testing 
N/A

## License 
This GitHub repository is licensed under the MIT license. Please refer to the license documentation [here](https://opensource.org/licenses/MIT).

## Questions
This project was created by [dymoy](https://github.com/dymoy).  
For any related questions, please contact me via email at <derekymoy@gmail.com>.
