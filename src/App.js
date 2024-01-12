import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Winner from "./pages/Winner";
import Home from "./pages/Home/Home";

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
