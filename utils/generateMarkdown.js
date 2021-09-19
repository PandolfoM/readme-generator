// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  console.log(data.questions[0].license)
  const { questions, ...header } = data.questions[0]
  const { email, username } = data
  return `
  # ${header.title}
  ${header.description}
  
  ## Table of Contents
    1. [Installation](#install)
    2. [Usage](#usage)
    3. [Contribute](#contribute)
    4. [Tesing](#testing)
    5. [Questions](#questions)
    6. [License](#license)

  ## Installation <a id="install"></a>
  ${header.install}
  

  ## Usage <a id="usage"></a>
  ${header.usage}

  ## Contribute <a id="cont"></a>
  ${header.contribution}

  ## Testing <a id="testing"></a>
  ${header.test}

  ## Questions <a id="questions"></a>
  [GitHub](https://github.com/${username})
  [Email](${email})

  ## License <a id="license"></a>
`;
}

module.exports = generateMarkdown;
