import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import './App.css'
import Header from "./components/header";
import Person from "./pages/person";
import Newperson from "./pages/newperson";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/person" element={<Person />} />
          <Route path="/newperson" element={<Newperson />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
