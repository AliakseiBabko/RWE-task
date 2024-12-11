# RWE Task

## Overview

**RWE Task** is an automation suite developed using [Cypress](https://www.cypress.io/) to accomplish two main objectives:

1. **Task 1**: Automate various components on [The Internet](https://the-internet.herokuapp.com/), including Dropdowns, Broken Images, Dynamic Loading, and Redirect Links.
2. **Task 2**: Automate the sign-up process on [Glitch Support](https://support.glitch.com/) using GitHub authentication to validate successful login.

## Installation

### Prerequisites

- **Node.js**: Version 14 or higher. You can download it from the [Node.js Official Website](https://nodejs.org/).

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/AliakseiBabko/RWE-task.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd RWE-task
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

## Configuration

1. **Create a `.env` File**

   In the root directory of the project, create a `.env` file and add the following environment variables:

   ```env
   GITHUB_USER_EMAIL=your_github_email@example.com
   GITHUB_USER_PASSWORD=your_github_password
   USER_NAME=YourUserName
   ```

   > **Note**: Ensure that `.env` is listed in your `.gitignore` file to keep sensitive information secure.

## Usage

The project provides two scripts to run the Cypress tests:

- **Open Cypress Test Runner**

  Launches the Cypress interactive Test Runner for debugging and development.

  ```bash
  npm run cy:open
  ```

- **Run Cypress Tests in Headless Mode**

  Executes all Cypress tests in headless mode, suitable for Continuous Integration (CI) pipelines.

  ```bash
  npm run cy:run
  ```

---