import "./App.css";
import React from "react";
import Nav from "./pages/Nav";
import MainPage from "./pages/MainPage";
function App() {

  return (
    <>
      <div className="app-content">

        <Nav />
        <MainPage />

      </div>
    </>
  );
}

export default App;
