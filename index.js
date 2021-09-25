// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');




// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

const writeFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/readme.md', fileConent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok:true,
                message: 'File created!'
            });
        });
    });
};



// TODO: Create a function to initialize app
const promptQuestions = () => {
    return inquirer.prompt([
        //title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title to your project? (required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
              console.log('Please enter a project title');
              return false;
            }
        }
    },
    // description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project (required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;
            }
        }
    },
    //installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.'
    },
    // license (checkbox)
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'Select a license: (select all that apply)',
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC']
    }, 

    // contributing
    {
        type: 'input',
        name: 'contribution',
        message: 'Please name all contribuing members:'
    },

    // contribution guidelines
    {
        type: 'input',
        name: 'contribution-guidelines',
        message: 'Provide your requirements for contribution to this project'
    },

    // tests


    //questions - github and email
    {
        type: 'input',
        name: 'github',
        message: 'Provide your github username: (required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your github username');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: 'Provide your email address or other preferred contact information:'
    },
  ])
};


// Function call to initialize app
promptQuestions()
    .then(createTemplate => {

    })
    .then(writeFile => {
        writeFile(writeFile);
    })
    .catch(err => {
        console.log(err);
    });
