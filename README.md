# AlloMedia
This repository contains the source code for the Allo Media Authentication App, a web application that offers a secure authentication system built with Express.js and JWT. It includes functionalities like user registration, login, password management, and more. Additionally, the app is integrated with a React frontend, providing a seamless and user-friendly authentication experience for web applications.

 ## Installation:
 Before starting the app you should have:

**Node.js** installed on your machin.
**Git** installed on your machin.

 1. First clone the repository, following this command:

        git clone https://github.com/KHARBAQOssama/AlloMedia.git
2. Navigate to the server folder 

        cd ./server
3. Install dependencies:

        npm install
4. Navigate to the client folder 

        cd ../clinet
5. Install dependencies:

        npm install
## Configuration:
 Update server/.env file to look like this.

        DB_URL="your-mongodb-url/db-name"
        PORT=3000
        
        DEFAULT_MANAGER_FULLNAME="manager full name"
        DEFAULT_MANAGER_EMAIL="managerEmail@example.com"
        DEFAULT_MANAGER_PASSWORD="password"
        DEFAULT_MANAGER_PHONE_NUMBER="+phone-number"
        
        DEFAULT_ROLES="Manager,DeliveryMan,Client"
        
        MAIL_USERNAME=your mailing email
        MAIL_PASSWORD=the mailing password


  Make sure that you are working in the server directory && Run this command 

      npm run generate:jwt_secret
  two lines will be added to the .env file : 

      JWT_SECRET=9a724f4f6860adq1cf16c70dca4d4381d4acd112dq2157a13a7b0936fd0bdac58c52edkaj134SQuubcc
      JWT_REFRESH=62f13a7dskjc26f58sk2355046ee8szjd698fbHDKf2805d345267f95189ed84a36754c2de349d92332e4

## Running the application:
 To execute the project follow these steps:
 1.navigate to the server directory and run this command : 

      npm run dev
2. use different terminal and navigate to the client directory then run this command :

      npm run dev 

## Technologies using:

**Front-End**: HTML, CSS, JavaScript, and *ReactJs* (Javascript Library).

- **Back-End**: Node.js and Express.js for the server-side logic.

- **Database**: We use *MongoDB* database to store user information, and roles. 

- **User Authentication**: *JWT* .

- **Version Control**: Git for code management and collaboration.

## Dependencies

Here are the main dependencies used in this project:

### Server-Side Dependencies

- **bcryptjs**: Password hashing library.
- **cookie-parser**: Middleware for parsing cookies in Express.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables from a .env file.
- **express**: Web application framework for Node.js.
- **jsonwebtoken**: JSON Web Token (JWT) library for user authentication.
- **mongoose**: MongoDB object modeling tool.
- **nodemailer**: Library for sending email.
- **swagger-ui-express**: Middleware for adding Swagger UI to Express applications.
- **yamljs**: Library for working with YAML files.

### Development Dependencies

- **@faker-js/faker**: Data generation library for testing and development.
- **jest**: JavaScript testing framework.
- **nodemon**: Utility that monitors for changes and automatically restarts the server.
- **supertest**: Library for testing HTTP assertions.

### Client-Side Dependencies

- **axios**: Promise-based HTTP client for making requests from the browser.
- **formik**: Form library for React.
- **react-router-dom**: Routing library for React applications.
- **yup**: Object schema validation library.

### Development Dependencies

- **tailwindcss**: Utility-first CSS framework for building user interfaces.

## Tools using:
- **Postman** : to comsume the api befor using react.
- **VSCode** : A Code editor
- **Swagger** : A tool that helps to document the API
