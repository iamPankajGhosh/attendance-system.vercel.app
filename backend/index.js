import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { Student, Attendance } from "./models/student.models.js";
import { Teacher } from "./models/teacher.models.js";
import moment from "moment/moment.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// db connect

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// api routes

// create teachers endpoint
app.post("/api/v1/teachers/register", async (req, res) => {
  try {
    const teacher = new Teacher(req.body);
    await teacher.save();
    res.status(201).json(teacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// create students endpoint
app.post("/api/v1/students/register", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// student attendance endpoint
app.post("/api/v1/students/attendance", async (req, res) => {
  try {
    const { studentId } = req.body;

    // Find the student by ID
    const student = await Student.findById(studentId);

    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    // Create a new attendance document
    const attendance = new Attendance({
      studentId,
      date: moment().format("MMM Do YY"),
      present: true,
    });

    // Save the attendance document
    const savedAttendance = await attendance.save();

    // Add the attendance document ID to the student's attendance array
    student.attendance.push(savedAttendance._id);

    // Save the updated student document
    await student.save();

    res.status(200).json("success");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// get allusers endpoint
app.get("/api/v1/users/allusers", async (req, res) => {
  try {
    const students = await Student.find({});
    const teachers = await Teacher.find({});
    const allUsers = [...students, ...teachers];
    res.status(200).json(allUsers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// get students endpoint
app.get("/api/v1/students/allstudents", async (req, res) => {
  try {
    const students = await Student.find({});
    res.status(200).json(students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// get teachers endpoint
app.get("/api/v1/teachers/allteachers", async (req, res) => {
  try {
    const teacher = await Teacher.find({});
    res.status(200).json(teacher);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// create login endpoint
app.post("/api/v1/users/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const student = await Student.findOne({ email, password });
    const teacher = await Teacher.findOne({ email, password });

    if (student || teacher) {
      res.status(200).json("success");
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);
