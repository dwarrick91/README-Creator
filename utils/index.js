// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown')

// TODO: Create an array of questions for user input
inquirer
  .prompt([
     {
      type: 'input',
      message: 'What is your title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use your project?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'contribution guidelines',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'test instructions',
      name: 'test',
    },
    {
      type: 'list',
      message: 'test instructions',
      name: 'license',
      choices: [' Apache License 2.0',  'GNU GPLv3',  'MIT', 'ISC'] 
    },
    {
      type: 'input',
      message: 'GitHub Username',
      name: 'username',
     
    },
    {
      type: 'input',
      message: 'Email Address',
      name: 'email',
     
    },


    
    /* Pass your questions in here */
  ])
  .then((data) => {
    console.log(data);
    fs.writeFile('sampleREADME.md', markdown)
    // Use user feedback for... whatever!!
  });
  

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// inquirer.writeFile('README.md')

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
