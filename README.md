## 📧 Email Sending API

A Node.js/Express API for sending emails using Gmail, built with Webpack for optimized bundling.

[![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com/)
[![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge)](https://expressjs.com/)
[![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)

This project provides a simple API for sending emails using a Gmail account. It uses Express.js to create the API endpoints and Webpack to bundle the application for optimized deployment.

## 📋 Summary

This project is an email sending API built with Node.js and Express.js. It leverages Webpack to bundle the application, optimizing it for deployment. Key capabilities include configuring the API and sending emails via Gmail. The target audience is developers needing a straightforward email sending solution within their applications. Main technologies used include Express.js, Webpack, and Node.js.

## ✨ Features

- 🔥 Webpack Build

## 🛠️ Tech Stack

**Languages & Frameworks:**
- **JavaScript** - 4 files
- **JSON** - 2 files

**Key Technologies:**
- **Frameworks**: Express.js
- **Build Tools**: Webpack
- **Databases**: 
- **Testing**: 

**Dependencies** (16 total):
- `multer`
- `webpack-cli`
- `gulp-clean`
- `googleapis`
- `express`
- `cors`
- `formidable`
- `gulp-replace`
- `webpack`
- `body-parser`
- `gulp-run`
- `webpack-node-externals`
- `gulp`
- `nodemailer`
- `cookie-parser`

## 🚀 Project Setup

**Prerequisites:**
- Node.js
- npm

**Installation:**
```bash
npm install
```

**Configuration:**
- `port` - Environment variable
- `PORT` - Environment variable
- `domain` - Environment variable

**Available Scripts:**
- `start` - node index
- `test` - echo "Error: no test specified" && exit 1

## 📁 Project Structure

```text
📁 email_sending/
├── 📁 controller/
│   └── 🟨 index.js
├── 🚫 .gitignore
├── 🟨 index.js
├── 📦 package.json
├── 🟨 gulpfile.js
├── 📊 package-lock.json
├── 📄 Procfile
└── 🟨 webpack.config.js
```

**Key Directories:**

- `controller/`: Contains the route handling logic for the API. The `index.js` file likely contains functions for handling email sending and other API operations.
- Root directory:
  - `.gitignore`: Specifies intentionally untracked files that Git should ignore.
  - `index.js`: Main entry point of the application, likely sets up the Express server and defines routes.
  - `package.json`: Contains metadata about the project, including dependencies and scripts.
  - `gulpfile.js`: Contains automated tasks using Gulp, such as cleaning directories or replacing strings in files.
  - `package-lock.json`: Records the exact versions of dependencies used in the project.
  - `Procfile`: Specifies the command to execute when the application is deployed on a platform like Heroku.
  - `webpack.config.js`: Configuration file for Webpack, defining how the application should be bundled.

## 👥 Author and Support

**Author Information:**
- Repository owner: **dev-idblfs**
- Project: **email_sending**
- GitHub: [https://github.com/dev-idblfs](https://github.com/dev-idblfs)

**Contributing:**
Contributions are welcome! Please fork the repository and submit a pull request with your changes.  Ensure your code follows the existing style guidelines.

**Support:**
For any issues or questions, please open an issue on the GitHub repository.

**License:**
License: Not specified. All rights reserved to the author.