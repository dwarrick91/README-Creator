// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "https://img.shields.io/badge/license-Apache%20License%202.0-green"
  } else if (license === "GNU GPLv3") {
    return 'https://img.shields.io/badge/license-GNU%20GPLv3-red'
  } else if (license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-blue"
  } else if (license === "ISC") {
    return 'https://img.shields.io/badge/license-ISC-yellow'
  } else {
   return ("");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (condition) {
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return ` # ${answers.title}

 ## Description
 
 
 
 
 
 ## Table of Contents (Optional)
 
 
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)
 - [Questions](#questions)
 ## Installation
 
 
 ## Usage
 
 
 
 
 
 ## Credits
 
 
 
 If you followed tutorials, include links to those here as well.
 
 ## License
 ${renderLicenseBadge(answers.license)}
 
 ## Badges
 ![answers.license](${renderLicenseBadge(answers.license)})
 
 
 
 
 
 
 ## How to Contribute
 

 
 ## Tests
 


 ## Questions
`;
}

module.exports = generateMarkdown;
