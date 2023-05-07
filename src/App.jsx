import "./App.css";
import About from "./layout/about";
import Other from "./layout/Sitebar";
import { Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import MainPage from "./pages/MainPage";
import Sitebar from "./layout/Sitebar";
function App() {

  return (
    <>
      <div style={{ display: "flex" }}>
        <Nav />
        <MainPage />

      </div>
    </>
  );
}

export default App;
