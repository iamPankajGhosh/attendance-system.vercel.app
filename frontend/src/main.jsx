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
  Dashboard,
  AddStudent,
  Profile,
  Students,
  Teachers,
  AllUsers,
} from "./routes";

import "./index.css";
import Attendance from "./routes/Attendance";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="addstudent" element={<AddStudent />} />
      <Route path="profile" element={<Profile />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="students" element={<Students />} />
      <Route path="teachers" element={<Teachers />} />
      <Route path="allusers" element={<AllUsers />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
