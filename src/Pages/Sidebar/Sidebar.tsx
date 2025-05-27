import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faChartLine,
  faClockRotateLeft,
  faComments,
  faGear,
  faPhone,
  faTableCells,
  faUserClock,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

interface SidebarProps {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar: React.FC<SidebarProps> = ({ mobileMenu, setMobileMenu }) => {
  const sidebarData = [
    {
      heading: "General",
      items: [
        { icon: faTableCells, label: "Dashboard", active: true },
        { icon: faClockRotateLeft, label: "History", active: false },
        { icon: faCalendar, label: "Calendar", active: false },
        { icon: faUserClock, label: "Appointments", active: false },
        { icon: faChartLine, label: "Statistics", active: false },
      ],
    },
    {
      heading: "Tools",
      items: [
        { icon: faComments, label: "Chat", active: false },
        { icon: faPhone, label: "Support", active: false },
      ],
    },
  ];
  return (
    <div className="sidebar">
      <div>
        <FontAwesomeIcon
          icon={faXmark}
          className={`close`}
          onClick={() => setMobileMenu(false)}
        />
        <h1>
          Health<span>care.</span>
        </h1>
        {sidebarData.map((section, index) => (
          <div key={index}>
            <h2 className="section-heading">{section.heading}</h2>
            <ul className="menu-list">
              {section.items.map((item, index) => (
                <li key={index} className="sidebar-list">
                  <FontAwesomeIcon icon={item.icon} />
                  <h5>{item.label}</h5>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="sidebar-list">
        <FontAwesomeIcon icon={faGear} />
        <h5>Settings</h5>
      </div>
    </div>
  );
};

export default Sidebar;
