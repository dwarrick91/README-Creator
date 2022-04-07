
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "Installation instructions",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "test instructions",
    name: "test",
  },
  {
    type: "list",
    message: "test instructions",
    name: "license",
    choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC"],
  },
  {
    type: "input",
    message: "GitHub Username",
    name: "username",
  },
  {
    type: "input",
    message: "Email Address",
    name: "email",
  },
];

// TODO: Create a function to write README file
function createReadme(answers) {
  const layout = generateMarkdown(answers);
  console.log(layout);
  fs.writeFile("sampleREADME.md", layout, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);

    createReadme(answers);
  });
}

// Function call to initialize app
init();
