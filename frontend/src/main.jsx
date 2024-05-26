import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import {
  Root,
  Home,
  Error,
  Login,
  Signup,
  AddStudent,
  Profile,
  Students,
  Teachers,
  AllUsers,
} from "./routes";

import "./index.css";
import Attendance from "./routes/Attendance";
import MySubjects from "./routes/MySubjects";
import Schedule from "./routes/Schedule";

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

const isAdmin = () => {
  if (role === "admin" && token) {
    return true;
  }
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      {token ? (
        <Route path="allusers" element={<AllUsers />} />
      ) : (
        <Route index element={<Home />} />
      )}
      {!token && <Route path="login" element={<Login />} />}
      {role !== "admin" && <Route path="signup" element={<Signup />} />}
      {isAdmin && <Route path="addstudent" element={<AddStudent />} />}
      {token && <Route path="profile" element={<Profile />} />}
      {token && <Route path="attendance" element={<Attendance />} />}
      {token && <Route path="students" element={<Students />} />}
      {token && <Route path="teachers" element={<Teachers />} />}
      {isAdmin && <Route path="allusers" element={<AllUsers />} />}
      {token && <Route path="mysubjects" element={<MySubjects />} />}
      {token && <Route path="schedule" element={<Schedule />} />}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
