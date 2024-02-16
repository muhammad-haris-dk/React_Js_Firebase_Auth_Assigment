import React from "react";
import "./Index.css";
import "./App.css";
import { Router_App } from "./config/Router_App";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase_config";
import { useDispatch, useSelector } from "react-redux";
import { conditional_Public_Private } from "./store/Slice";
const App = () => {
  const dispatch = useDispatch();
  const isloggedin = useSelector((state) => state.todo.isloggedin);
  
   return (
    <div>
      <Router_App />
    </div>
  );
};

export default App;
