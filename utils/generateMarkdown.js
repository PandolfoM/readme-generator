// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else if (license == "GNU AGPLv3") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license == "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == "GNU LGPLv3") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license == "Mozilla Public 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license == "Apache 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == "Boost Software 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license == "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
  return license;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else if (license == "GNU AGPLv3") {
    return `## License <a id='license'></a>\n[${license}](https://choosealicense.com/licenses/agpl-3.0/)`;
  } else if (license == "GNU GPLv3") {
    return `## License <a id='license'></a>\n[${license}](https://choosealicense.com/licenses/gpl-3.0/)`;
  } else if (license == "GNU LGPLv3") {
    return `## License <a id='license'></a>\n[${license}](https://choosealicense.com/licenses/lgpl-3.0/)`;
  } else if (license == "Mozilla Public 2.0") {
    return `## License <a id='license'></a>\n[${license}](https://choosealicense.com/licenses/mpl-2.0/)`;
  } else if (license == "Apache 2.0") {
    return `## License <a id='license'></a>\n[${license}](https://choosealicense.com/licenses/apache-2.0/)`;
  } else if (license == "MIT") {
    return `## License <a id='license'></a>\n[${license}](https://choosealicense.com/licenses/mit/)`;
  } else if (license == "Boost Software 1.0") {
    return `## License <a id='license'></a>\n[${license}](https://choosealicense.com/licenses/bsl-1.0/)`;
  } else if (license == "The Unlicense") {
    return `## License <a id='license'></a>\n[${license}](https://choosealicense.com/licenses/unlicense/)`;
  }
  return license;
}

function renderLicenseSection(license) {
  if (license == '') {
    return "";
  } else if (license == "GNU AGPLv3") {
    return `## License <a id='license'></a>`;
  } else if (license == "GNU GPLv3") {
    return `## License <a id='license'></a>`;
  } else if (license == "GNU LGPLv3") {
    return `## License <a id='license'></a>`;
  } else if (license == "Mozilla Public 2.0") {
    return `## License <a id='license'></a>`;
  } else if (license == "Apache 2.0") {
    return `## License <a id='license'></a>`;
  } else if (license == "MIT") {
    return `## License <a id='license'></a>`;
  } else if (license == "Boost Software 1.0") {
    return `## License <a id='license'></a>`;
  } else if (license == "The Unlicense") {
    return `## License <a id='license'></a>`;
  }
  return license
}

function renderLicenseContent(license) {
  if (license == '') {
    return "";
  }
  return "6. [License](#license)";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  console.log(data.questions[0].license);
  const { questions, ...header } = data.questions[0];
  const { email, username } = data;
  return `
  # ${header.title}
  ${renderLicenseBadge(header.license)}
  ${header.description}

  ## Table of Contents
  1. [Installation](#install)
  2. [Usage](#usage)
  3. [Contribute](#contribute)
  4. [Tesing](#testing)
  5. [Questions](#questions)
  ${renderLicenseContent(header.license)}

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

  ${renderLicenseSection(header.license)}
  ${renderLicenseLink(header.license)}
`;
}

module.exports = generateMarkdown;
