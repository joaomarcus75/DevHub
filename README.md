DevHub API

Goal: Each user creates an account, logs in, and manages only their own profile and projects.

Backend: NestJS

Frontend: Angular + Material UI

Database: MongoDB (via Mongoose)

Validation: Zod

Authentication: JWT

File Upload: Multer

Simple pagination and filters for the user’s own projects

Documentation: Swagger

Testing: Jest

🔹 Features

User

Registration and login (JWT)

Fields: name, email, password, profile picture

Optional CV upload

Projects

CRUD for projects linked to the user

Fields: title, description, tags, project image

Simple pagination and filters (by title or tag)

Middlewares

Basic logger

Global error handling

Swagger

API documentation (/api/docs)

Testing

Unit tests for services

Integration tests for routes

Angular Frontend

Login and registration

Dashboard with user’s project list

Form to create/edit projects

File uploads
