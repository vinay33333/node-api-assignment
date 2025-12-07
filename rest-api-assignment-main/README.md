# REST API Assignment

## Project Description
This project is a RESTful API built using Node.js and Express.  
It supports full CRUD operations for managing a list of users stored in-memory.

git repo link - 

## Features Implemented
### ✔ Required Routes
- **GET /users** – Get all users  
- **GET /users/:id** – Get user by ID  
- **POST /user** – Add user  
- **PUT /user/:id** – Update user  
- **DELETE /user/:id** – Delete user  

### ✔ Middleware
- Logging middleware (method, URL, status code)
- Validation middleware for POST and PUT

### ✔ Error Handling
- Proper HTTP status codes (200, 201, 400, 404, 500)
- Meaningful JSON error messages

### ✔ Data Source
- In-memory array of users

---

## How to Run
```sh
npm install
npm start
```

Server runs at:
```
http://localhost:3000
```

---

## API Testing
Use **Postman** or **ThunderClient**.

Include screenshots for:
1. GET /users
2. GET /users/:id
3. POST /user
4. PUT /user/:id
5. DELETE /user/:id
6. 400 error (missing fields)
7. 404 error (user not found)

---

## Submission
ZIP must contain:
- `index.js`
- `package.json`
- `README.md`
- Test screenshots
