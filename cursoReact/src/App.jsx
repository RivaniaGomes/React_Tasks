import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";


import Header from './components/Header/index';
import TaskDetails from "./components/TaskDetails.jsx";

import "./App.css";

function App() {
  return (
    <>
      <div className='container'>
        <Header/>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route path="/:taskTitle" element={<TaskDetails/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
