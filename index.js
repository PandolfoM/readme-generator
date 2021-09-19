// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const readmeGenerator = (readme) => {
  if (!readme.questions) {
    readme.questions = [];
  }
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your repository? (Required)",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter a title");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide a description for the project (Required)",
        validate: (descInput) => {
          if (descInput) {
            return true;
          } else {
            console.log("Please enter a description");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "install",
        message: "Provide installation instructions for the project (Required)",
        validate: (installInput) => {
          if (installInput) {
            return true;
          } else {
            console.log("Please enter install instructions");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Provide usage content for the project (Required)",
        validate: (usageInput) => {
          if (usageInput) {
            return true;
          } else {
            console.log("Please enter usage content");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "license",
        message: "Would you like to include a license section?",
        choices: [
          "GNU AGPLv3",
          "GNU GPLv3",
          "GNU LGPLv3",
          "Mozilla Public 2.0",
          "Apache 2.0",
          "MIT",
          "Boost Software 1.0",
          "The Unlicense",
        ],
        validate: (licenseAnsr) => {
          if (licenseAnsr.length < 1) {
            console.log("You must choose at least 1 license");
            return false;
          } else if (licenseAnsr.length > 1) {
            console.log("You can only choose 1 license");
            return false;
          }
          return true;
        },
      },
      {
        type: "input",
        name: "contribution",
        message: "Provide contribution instructions (Required)",
        validate: (contInput) => {
          if (contInput) {
            return true;
          } else {
            console.log("Please enter contribution instructions");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "test",
        message: "Provide test instructions (Required)",
        validate: (testInput) => {
          if (testInput) {
            return true;
          } else {
            console.log("Please enter test instructions");
            return false;
          }
        },
      },
    ])
    .then((readmeData) => {
      readme.questions.push(readmeData);
      return readme;
    });
};

const userInfo = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
      validate: (userInput) => {
        if (userInput) {
          return true;
        } else {
          console.log("Please enter a username");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter a email address");
          return false;
        }
      },
    },
  ]);
};
// Function call to initialize app
userInfo()
  .then(readmeGenerator)
  .then((readme) => {
    console.log(readme)
  })
  .catch((err) => {
    console.log(err);
  });
