import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ darkMode, setDarkMode }) {
  return (
    <div className="sidebar">
      <h2>SaaS</h2>

      <ul>
        <li>
          <NavLink to="/" end>
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/analytics">
            Analytics
          </NavLink>
        </li>

        <li>
          <NavLink to="/users">
            Users
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Sidebar;
