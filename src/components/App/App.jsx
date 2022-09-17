import React from "react";
import { Routes, Route } from "react-router-dom";

import { Auth } from "../Auth/Auth";
import { Registration } from "../Registration/Registration";
import { Map } from "../Map/Map";

import "./App.css";

const App = () => {
  console.log('НОВЫЙ IREBASE DEPLOY')
  return (
    <div id="app" data-testid="application" className="App">
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </div>
  );
};

export default App;
