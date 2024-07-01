
## 🚀 Introduction

Welcome to this project is a modern CRM application built with the latest web technologies and data fetched from API. Whether you're here to understand the source code or contribute, this guide should give you a comprehensive overview of the project.


## 🛠 Technologies Used:

 - **Vite:** A lightning-fast build tool and development server.
 - **React 18:** A JavaScript library for building user interfaces.
 - **TypeScript:** A typed superset of JavaScript.
 - **TailwindCSS:** A utility-first CSS framework for rapidly building
   custom designs.
 - **Redux Toolkit:** The official, opinionated, batteries-included toolset
   for efficient Redux development.
 - **ESLint:** A pluggable and configurable linter tool for identifying and
   reporting on patterns in JavaScript.
 - **React Router:** Declarative routing for React.
 - **Axios:** Promise based HTTP client for the browser and node.js.
 - **MUI:** React components for faster and simpler web development.
 - **Lottie:** For rendering Adobe After Effects animations natively on
   mobile and on the web.

## 🌐 Project Overview:

**Login Page:** Features a sleek login form. Logging in is done using hardcoded user credentials. Upon successful authentication, users are granted a token and redirected to the /users page.
 
**Dashboard:** The first entry point after logging in.

- Chart: Leveraging the power of React ApexCharts, it presents visually appealing and informative graphs.

**Users Page:** Displays a table listing user details fetched from API, showcasing:

*firstName*
*lastName*
*email*

**This Page:** Fetches data from the endpoint. It offers:

 - Filtering by userId
 - Adding a new item via a modal
 - Toggling the completed status of a selected item
 - Deleting a selected item

🧑‍💻 Getting Started:

Clone the Repository:

    git clone https://github.com/fdc1010/exam-web-frontend.git

Navigate to the directory:

    cd exam-web-frontend

Install Dependencies:

    npm install

Run the Application in Development Mode:

    npm run dev

🤝 Contributing:

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
