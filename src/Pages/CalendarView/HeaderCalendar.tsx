import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeaderCalendar.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import boy from "../../assets/boy.png";

const HeaderCalendar = () => {
  return (
    <div className="header-calendar">
      <div className="account">
        <img src={boy} alt="boy" />
      </div>
      <div className="plus">
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

export default HeaderCalendar;
