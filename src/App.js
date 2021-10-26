import React from "react";
import { Route } from "react-router";
import Routes from './routes';
import Login from "./Pages/Login/index"



function App() {
  return (
    <div>
      <Login />
      <Routes />
    </div>
  );
};

export default App;