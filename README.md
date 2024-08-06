# URL Shortener

This repository contains a URL shortener application built with Node.js and Express. It allows users to shorten URLs and track their click statistics. Below you'll find details on the system design, tech stack, and how to set up and run the project locally.

## Table of Contents

- [System Design](#system-design)
- [Tech Stack](#tech-stack)
- [Features](#features)

## System Design

The URL Shortener application is designed to be simple and efficient, focusing on the core functionalities of shortening URLs and tracking usage statistics.

### Architecture

- **Frontend**: The user interface is built with HTML, CSS, and JavaScript, utilizing server-side templating with EJS (Embedded JavaScript) to render dynamic content.
  
- **Backend**: The backend is developed using Node.js and Express. It handles URL shortening, user authentication, and data persistence.

- **Database**: MongoDB is used for data storage, managing collections for URLs, users, and visit history.

- **Authentication**: JWT (JSON Web Token) is used for user authentication, enabling secure user sessions without storing sensitive information on the client side.

### Data Flow

Below is a diagram illustrating the data flow in the application:

![Data Flow Diagram](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*mParFcnj7wO_-Srp3IalKg.png)

1. **User Authentication**: 
   - Users can sign up and log in. JWT is used to authenticate users and maintain session state.

2. **URL Shortening**:
   - Users submit a long URL through the form.
   - The server generates a unique short ID and stores the mapping in the database.

3. **URL Redirection**:
   - When a short URL is accessed, the server retrieves the original URL from the database and redirects the user.

4. **Statistics Tracking**:
   - Each time a shortened URL is visited, a record of the visit is stored, allowing users to view the total number of clicks.

### Deployment Architecture

The following diagram shows the deployment architecture of the application:

![Deployment Architecture](path/to/your/deployment-architecture-diagram.png)

## Tech Stack

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript
  - EJS (Embedded JavaScript)

- **Backend**:
  - Node.js
  - Express.js

- **Database**:
  - MongoDB

- **Authentication**:
  - JWT (JSON Web Token)

- **Deployment**:
  - Render (or any other cloud service you might be using)

## Features

- URL Shortening: Generate short links for any URL.
- User Authentication: Sign up and login functionality with secure session management using JWT.
- Click Tracking: View click statistics for each shortened URL.
- URL Management: Users can view and delete their shortened URLs.

