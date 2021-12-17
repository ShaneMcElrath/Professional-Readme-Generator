// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'none') {
    return `![LicenseBadge](https://img.shields.io/badge/License-${license}-green)`.replace(/\s/g, '%20');
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache 2.0' :
      return `[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)`;
    case 'GNU General Public V3.0' :
      return `[GNU General Public V3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    case 'MIT' :
      return `[MIT](https://opensource.org/licenses/MIT)`;
    case 'BSD 2-Clause' :
      return `[BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)`;
    case 'BSD 3-Clause' :
      return `[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'Boost Software 1.0' :
      return `[Boost Software 1.0](https://opensource.org/licenses/BSL-1.0)`;
    case 'Creative Commons Zero v1.0 Universal' :
      return `[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'GNU Affero General Public v3.0' :
      return `[GNU Affero General Public v3.0](https://www.gnu.org/licenses/agpl-3.0.en.html)`;
    case 'GNU General Public v2.0' :
      return `[GNU General Public v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'GNU Lesser General Public v2.1' :
      return `[GNU Lesser General Public v2.1](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)`;
    case 'Mozilla Public 2.0' :
      return `[Mozilla Public 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'none') {
    return `## License 
Licensed under the ${renderLicenseLink(license)}`;
  }
  else {
    return '';
  }
}

function renderLicenseUnderTable(license) {
  if (license != 'none') {
    return '* [License](#license)';
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseUnderTable(data.license)}
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing
${data.contributing}

## Test
${data.tests}

## Questions
  
${data.githubusername}

https://github.com/${data.githubusername}

${data.email}

`;
}

module.exports = generateMarkdown;
