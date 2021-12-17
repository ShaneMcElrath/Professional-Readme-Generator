// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your Project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter your project description (Required)',
    validate: gitHubNameInput => {
      if (gitHubNameInput) {
        return true;
      } else {
        console.log('Please enter your project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter installation instructions?!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter usage information!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Enter your license',
    choices: [
      'none',
      'Apache 2.0', 
      'GNU General Public V3.0', 
      'MIT', 
      'BSD 2-Clause', 
      'BSD 3-Clause', 
      'Boost Software 1.0',
      'Creative Commons Zero v1.0 Universal',
      'Eclipse Public 2.0',
      'GNU Affero General Public v3.0',
      'GNU General Public v2.0',
      'GNU Lesser General Public v2.1',
      'Mozilla Public 2.0'
    ],
    default: 'none'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter contribution guidelines!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter test instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'githubusername',
    message: 'What is your GitHub username? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, fileContent) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${fileName}.md`, fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        console.log(err.message);
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};


// TODO: Create a function to initialize app
function init(questions) {
  return inquirer.prompt(questions);
};

// Function call to initialize app
init(questions)
  .then(data => {
    return generateMarkdown(data);
  })
  .then(fileContent => {
    writeToFile('README', fileContent)
  });
