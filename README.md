# IFN666 Backend For Tracking work

This repository contains the backend for the IFN666 assignment 3 course project, built with Express.js. The main function of this backend is to handle data processing, storage, and retrieval for tracking workers' activities.

## Features and Frameworks

- User authentication and authorization using JWT
- CRUD operations for tracking data
- API endpoints for retrieving and updating worker information
- Integration with a MySQL database
- Real-time updates using WebSockets
- Middleware for handling JWT
- Model generation using Mason - Bricks

## Installation

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


## API Documentation

The API documentation is available at http://localhost:8081/api-docs when the server is running. It provides detailed information about the available endpoints and their usage.

## Routes
The application has the following routes:

- /users: This route handles user-related operations.
- /products: This route handles products-related operations.
- /jobtimings: This route handles jobtiming-related operations.
- /authorization: This route handles authorization-related operations.

For more information on the routes and their endpoints, please refer to the API documentation.


## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name
3. Make your changes and commit them: git commit -m 'Add your commit message'
4. Push to the branch: git push origin feature/your-feature-name
5. Submit a pull request.

## License
This project is licensed under the MIT License.
