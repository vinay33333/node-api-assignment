import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`);
  });
  next();
});

// Validation middleware
function validateUser(req, res, next) {
  const { firstName, lastName, hobby } = req.body;
  const missing = [];
  if (!firstName) missing.push("firstName");
  if (!lastName) missing.push("lastName");
  if (!hobby) missing.push("hobby");

  if (missing.length) {
    return res.status(400).json({
      error: "Invalid input",
      message: "Missing fields: " + missing.join(", ")
    });
  }
  next();
}

let users = [
  { id: "1", firstName: "Anshika", lastName: "Agarwal", hobby: "Teaching" }
];

// Routes
app.get("/users", (req, res) => res.status(200).json(users));

app.get("/users/:id", (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "UserNotFound" });
  res.json(user);
});

app.post("/user", validateUser, (req, res) => {
  const { firstName, lastName, hobby } = req.body;
  const id = (users.length + 1).toString();
  const newUser = { id, firstName, lastName, hobby };
  users.push(newUser);
  res.status(201).json({ message: "User created", user: newUser });
});

app.put("/user/:id", validateUser, (req, res) => {
  const idx = users.findIndex(u => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "UserNotFound" });
  const { firstName, lastName, hobby } = req.body;
  users[idx] = { id: req.params.id, firstName, lastName, hobby };
  res.json({ message: "User updated", user: users[idx] });
});

app.delete("/user/:id", (req, res) => {
  const idx = users.findIndex(u => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "UserNotFound" });
  const removed = users.splice(idx, 1)[0];
  res.json({ message: "User deleted", user: removed });
});

// Error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: "InternalServerError" });
});

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
