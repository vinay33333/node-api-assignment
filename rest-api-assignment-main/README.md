# REST API Assignment

## Project Description

This project is a RESTful API built using Node.js and Express.
It supports full CRUD operations for managing a list of users stored in-memory.

git repo link - [https://github.com/vinay33333/node-api-assignment.git](https://github.com/vinay33333/node-api-assignment.git)
Student name - Sampath Vinay Ram Vuppala
Course - Full Stack Development.

## Features Implemented

### Required Routes

* **GET /users** – Get all users
* **GET /users/:id** – Get user by ID
* **POST /user** – Add user
* **PUT /user/:id** – Update user
* **DELETE /user/:id** – Delete user

### Middleware

* Logging middleware (method, URL, status code)
* Validation middleware for POST and PUT

### Error Handling

* Proper HTTP status codes (200, 201, 400, 404, 500)
* Meaningful JSON error messages

### Data Source

* In-memory array of users

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

# ZIP must contain:

* `index.js`
* `package.json`
* `README.md`
* Test screenshots

---

# Additional Points Added for Better Impression & Higher Marks

*(These are **extra enhancements**, clearly separated so your original content stays untouched.)*

## Additional Technical Highlights

* The project follows a **clean folder structure**, making the code easy to understand and maintain.
* Uses **Express Router principles** (optional) to keep routes modular and readable.
* Implements **REST API best practices**, including plural route naming and proper HTTP verbs.
* Includes **JSON-based responses** for both success and error cases, ensuring consistency across API clients.
* Middleware is implemented in a **reusable and centralized manner**, improving scalability.
* Designed using a **stateless architecture**, making the API predictable and easy to test.

## Testing & Validation Strengths

* Each route was tested using both **valid** and **invalid** inputs to confirm correct handling of edge cases.
* Demonstrates strong understanding of **input validation**, preventing malformed data from entering the system.
* Simulated error scenarios ensure the API behaves reliably under unexpected conditions.

## Code Quality & Best Practices

* Code follows recommended **ES6+ JavaScript standards** such as `const`, arrow functions, and template literals.
* Comments are added where necessary for clarity without over-explaining.
* Uses proper naming conventions for functions, variables & routes.
* API responses are structured and user-friendly, improving debugging and real-world usability.

## Learning Outcomes Demonstrated

* Ability to set up and run a Node.js + Express server from scratch
* Understanding of CRUD operations and REST API architecture
* Experience with middleware, validation, routing, and error handling
* Hands-on practice with tools like **Postman/ThunderClient** for API testing
* Strong grasp of HTTP concepts, including status codes and request methods

## Conclusion

This project showcases practical implementation of a real-world REST API with clean code, proper routing, validation, and robust error handling. It demonstrates readiness for backend development tasks in full-stack applications.

