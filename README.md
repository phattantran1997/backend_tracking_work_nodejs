# IFN666 Backend For Tracking work

This repository contains the backend for the IFN666 assignment 3 course project, built with Express.js. The main function of this backend is to handle data processing, storage, and retrieval for tracking workers' activities.


## 🚀 Features and Frameworks

- **User Authentication and Authorization**: Implements JWT for secure access.
- **CRUD Operations**: Facilitates create, read, update, and delete operations for tracking data.
- **API Endpoints**: Provides endpoints for retrieving and updating worker information.
- **Database Integration**: Uses MySQL to manage and store data.
- **Real-time Updates**: Leverages WebSockets for delivering real-time updates.
- **Middleware**: Utilizes middleware for handling JWT.
- **Rapid Model Generation**: Uses the "mason cbnode" library for quickly creating new entity structures and their corresponding database tables.

## 🛠 Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:phattantran1997/backend_tracking_work_nodejs.git
   cd backend_nodejs
2. **Install dependencies:**
   ```bash
   npm install
3. **Usage**
 - Start the development server:
   ```bash
   npm run start
    ```
   This will start the server on http://localhost:8081 (or the port specified in your environment variables).
 - Build for production:
   ```bash
   npm run build
    ```
   This will create an optimized build in the dist directory.


## 📄 API Documentation

The API documentation is available at http://localhost:8081/swagger/index.html when the server is running. It provides detailed information about the available endpoints and their usage.

## 📁 Routes

The application has the following routes:

- /users: Handles user-related operations.
- /products: Manages products-related operations.
- /jobtimings: Deals with job timing-related operations.
- /authorization: Manages authorization-related operations.
For more information on the routes and their endpoints, please refer to the API documentation.


## 🌱 Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository. (link: https://github.com/phattantran1997/backend_tracking_work_nodejs)
2. Create a new branch: git checkout -b feature/your-feature-name
3. Make your changes and commit them: git commit -m 'Add your commit message'
4. Push to the branch: git push origin feature/your-feature-name
5. Submit a pull request.

## 📜 License
This project is licensed under the MIT License.



