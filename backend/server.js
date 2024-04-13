import { password } from "bun";
import express from "express";

const app = express();

app.get("/api/user", (req, res) => {
  res.json("users");
});

// Route to create user
app.post("/api/signup", (req, res) => {
  try {
    // signup enpoint
  } catch (e) {
    console.log(e);
  }
});

// Route to create user
app.post("/api/login", (req, res) => {
  try {
    // login enpoint
  } catch (e) {
    console.log(e);
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
