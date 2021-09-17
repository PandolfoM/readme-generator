// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const readmeGenerator = (questions) => {
  if (!questions) {
    questions = [];
  }
  return inquirer.prompt([
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
  ])
  .then((readmeData) => {
    questions.push(readmeData)
    return questions;
  })
};
// Function call to initialize app
readmeGenerator();
