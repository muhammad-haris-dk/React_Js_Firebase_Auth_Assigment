import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ToDo_App from "../pages/ToDo_App";
import Login from "../pages/Login";
import Signup from "../pages/signup";
import { Private_Routes } from "./Private_Routes";
import { Public_Routes } from "./Public_Routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Private_Routes />}>
        <Route path="" element={<ToDo_App />} />
      </Route>
      <Route element={<Public_Routes />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Route>
  )
);

export function Router_App() {
  return <RouterProvider router={router} />;
}
