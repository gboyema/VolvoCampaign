<!-- TABLE OF CONTENTS -->
<h2>
    <details open="open">
        <summary class="normal">Table of Contents</summary>
        <h5>
          <ol>
            <li>
              <a href="#about-the-project">About the Project</a>
              <ul>
                <li><a href="#built-with">Built With</a>
              </ul>
            </li>
            <li>
              <a href="#getting-started">Getting Started</a>
              <ul>
                <li><a href="#prerequisites">Prerequisites</a>
                <li><a href="#installation">Installation</a>
              </ul>
            </li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#sonarqube">SonarQube</a></li>
            <li><a href="#docker">Docker</a></li>
            <li><a href="#lighthouse">Lighthouse</a></li>
          </ol>
        </h5>    
    </details>
</h2>

<!-- ABOUT THE PROJECT -->

## About the Project

Playwright Volvo - This project is based on volvo safety campaign.

### Built With

- [Playwright](https://playwright.dev)
- [Typescript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)

## Getting Started

### Prerequisites

The following software are required:

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
- Install Java 8 or above, Allure Reports require Java 8 or higher.
- Install Java 11 instead of Java 8 if you intend to use Sonar Qube.
- allure commandline : Install allure command line for generating Allure Reports using
  ```sh
  npm ci -g allure-commandline
  ```
- If you wish to include SonarQube follow the below steps:
  - Install Java 11 and add java path to "PATH" environment variable.

### Installation

1. Clone the repo

2. Navigate to folder and install npm packages using:

```sh
npm install
```

3. For first time installation run below command to download required browsers

```sh
npx playwright install
```

<!-- USAGE EXAMPLES-->

## Usage

1. For Browser Configuration, change required parameters in `playwright.config.ts`.
2. set environmental variables

```sh
export npm_config_ENV=qa
```

2. For execution entire test suite on all available browsers simultaneously execute below command where "ENV" can be "qa" or "dev", `Test Cases are present in "tests" folder`:

```JS
npm run test
```

3. For executing single test case on Chrome browser execute the below command

```JS
npm run test:single
```

4. For executing test cases in parallel execute :

```JS
npm run test:parallel
```

## Reports

- <b>Overall Report</b>
  ![Overall Report Screenshot][overall-report-screenshot]

- <b>Detailed Report</b>
  ![Detailed Report Screenshot][detailed-report-screenshot]

- <b>Failure Report</b>
  ![Failure Report Screenshot][failure-report-screenshot]

  ## Docker

  For running the tests on Docker container we have to first build a image from Dockerfile and then run the image to spawn container on which the test scripts will run.

- For building image from Docker run below command, where path to Dockerfile must be provided after -f tag and name of the image must be provided after -t tag.

```JS
docker build . -f Dockerfile -t volvo
```

- Once the image is generated we can run the image to spawn container and run scrips using below command. In Below Command "playContainer" is name of the container created using "playtest" image.

```JS
docker run --name playContainer volvo
```

- If you want to run a different test or provide custom command, Go to Dockerfile and edit the last line which is CMD section. The below sample runs test cases serially on QA environment.
  Once you have edited the CMD section we have to follow Step 1 to build a new image and ten run the Container from that image.

```JS
CMD npm run test:serial --ENV="qa"
```

<!-- MARKDOWN LINKS & IMAGES -->

[overall-report-screenshot]: ReadMeImages/OverallReport.PNG
[detailed-report-screenshot]: ReadMeImages/DetailedReport.PNG
[failure-report-screenshot]: ReadMeImages/FailureReport.PNG
[sonar-report-screenshot]: ReadMeImages/SonarReport.PNG
