import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Navbar from "./components/NavbarComponent";
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
