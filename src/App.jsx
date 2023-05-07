import "./App.css";
import About from "./layout/about";
import Other from "./layout/other";
import { Routes,Route } from "react-router-dom";
import Nav from "./pages/Nav";
function App() {

  return (
    <>
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<About />}>
          </Route>
          <Route
            path="other"
            element={<Other />}
          />
        </Routes>
        ejwefwerewfherfhdrbhherferfbheerhf
      </div>
    </>
  );
}

export default App;
