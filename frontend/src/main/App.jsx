import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import React from "react";
import {  BrowserRouter } from "react-router-dom";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
// import Footer from "../components/template/Footer";
import MainRoute from "./Routes";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        {/* nav sao os links */}
        <Nav />
        {/* mainRoute sao as rotas */}
        <MainRoute />
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
