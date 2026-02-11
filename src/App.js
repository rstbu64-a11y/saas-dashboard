import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
