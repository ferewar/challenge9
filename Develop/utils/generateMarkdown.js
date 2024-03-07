// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GPL-3.0':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'Apache-2.0':
      return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    default:
      return '';
  }
}
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPL-3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache-2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    default:
      return '';
  }
}
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === '' || license === 'None') {
    return '';
  } else {
    return `## License

This project is licensed under the ${license} License - see the [LICENSE](${renderLicenseLink(license)}) file for details.`;
  }
}
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const githubURL = data.questions ? `https://github.com/${data.questions}` : '';
  const emailContact = data.email ? data.email : 'No email provided';

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}
  
  ${renderLicenseSection(data.license)}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  To install necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  
  ${data.usage}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  To run tests, run the following command:
  
  \`\`\`
  ${data.tests}
  \`\`\`
  
  ## Questions
  
  If you have any questions about the repo, open an issue or contact me directly at ${emailContact}. You can find more of my work at [${data.questions}](${githubURL}).
  
  `;
  }
  

module.exports = generateMarkdown;
