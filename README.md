DevHub API

Goal: Each user can create an account, log in, and manage only their own profile and projects.

🏗️ Tech Stack

- Backend: NestJS

- Frontend: Angular + Material UI

- Database: MongoDB (via Mongoose)

- Validation: Zod

- Authentication: JWT

- File Uploads: Multer

- Documentation: Swagger

- Testing: Jest


🔹 Features

- User

- Registration and login (JWT)

- Fields: name, email, password, profile picture

- Optional CV upload

- Projects

- CRUD for projects linked to the user

- Fields: title, description, tags, project image

- Simple pagination and filters (by title or tag)

- Middlewares

- Basic logger

- Global error handling

- Swagger

- API documentation available at /api/docs

- Testing

- Unit tests for services

- Integration tests for routes


Angular Frontend

- Login and registration forms

- Dashboard with user’s project list

- Form to create/edit projects

- File uploads



🚀 Getting Started

Follow these steps to run DevHub locally:


1️⃣ Clone the repository
git clone https://github.com/your-username/devhub-backend.git

2️⃣ Install dependencies
yarn install

3️⃣ Setup environment variables
Create a .env file in the root folder:

MONGO_URI=mongodb://127.0.0.1:27017/devhub
MONGO_DB_NAME=devhub
JWT_SECRET=your_jwt_secret_here

Replace your_jwt_secret_here with a secure string.

4️⃣ Run migrations
yarn migration:up

This will create the necessary collections and indexes.

5️⃣ Start the backend and frontend:
yarn start:dev

6️⃣ Access Swagger API documentation
http://localhost:3000/api/docs#/

7️⃣Running tests

Backend tests:
yarn test

Watch mode:
yarn test:watch








