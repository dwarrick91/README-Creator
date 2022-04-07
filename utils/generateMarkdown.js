// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache License 2.0") {
    return "https://img.shields.io/badge/license-Apache%20License%202.0-green";
  } else if (license === "GNU GPLv3") {
    return "https://img.shields.io/badge/license-GNU%20GPLv3-red";
  } else if (license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-blue";
  } else if (license === "ISC") {
    return "https://img.shields.io/badge/license-ISC-yellow";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache License 2.0") {
    return "https://www.apache.org/licenses/LICENSE-2.0.txt";
  } else if (license === "GNU GPLv3") {
    return "https://www.gnu.org/licenses/gpl-3.0.md";
  } else if (license === "MIT") {
    return "https://www.mit.edu/~amini/LICENSE.md";
  } else if (license === "ISC") {
    return "https://choosealicense.com/licenses/isc/";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "Apache License 2.0") {
    return "Apache License 2.0";
  } else if (license === "GNU GPLv3") {
    return "GNU GPLv3";
  } else if (license === "MIT") {
    return "MIT";
  } else if (license === "ISC") {
    return "ISC";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return ` # ${answers.title}
  ![answers.license](${renderLicenseBadge(answers.license)})
 ## Description
 
 ${answers.description}
 
 
 
 
 ## Table of Contents (Optional)
 
 
 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)
 - [Questions](#questions)
 ## Installation
 
 
 ## Usage
 
 ${answers.usage}
 
 
 ## License
 ${renderLicenseLink(answers.license)}
 
# This application is covered under the 
${renderLicenseSection(answers.license)} License
 
 
 
 
 ## Contributing

 ${answers.contribution}
 

 
 ## Tests
 ${answers.test}


 ## Questions
 GitHub username: https://github.com/${answers.username}

 # Feel free to reach out to me with any questions at 
 ${answers.email}
`;
}

module.exports = generateMarkdown;
