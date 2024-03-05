import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Register from "./Components/Register/Register";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Notes from "./Components/Notes/Notes";
import Todos from "./Components/Todos/Todos";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
