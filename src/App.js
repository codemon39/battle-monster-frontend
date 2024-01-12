import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Winner from "./pages/Winner.js";
import Home from "./pages/Home/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/winner/:id" element={<Winner />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
