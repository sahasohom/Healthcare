import "./App.css";
import Sidebar from "./Pages/Sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CalendarView from "./Pages/CalendarView/CalendarView";
import menu_icon from "./assets/menu-icon.png";
import { useState } from "react";

const App = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div className="app">
      <div className={`sidebar ${mobileMenu ? "show-mobile" : "hide-menu"}`}>
        <Sidebar setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
      </div>
      <div className="content">
        <img
          src={menu_icon}
          alt="menu icon"
          className="menu-icon"
          onClick={() => setMobileMenu(true)}
        />
        <Dashboard />
        <CalendarView />
      </div>
    </div>
  );
};

export default App;
