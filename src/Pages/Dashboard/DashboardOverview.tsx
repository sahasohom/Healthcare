import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DashboardOverview.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import teeth from "./../../assets/teeth.png";
import lungs from "./../../assets/lungs.png";
import bone from "./../../assets/bone.png";
import humanBody from "../../assets/human-body.png";
import HumanBody from "./HumanBody";

const DashboardOverview = () => {
  return (
    <div className="DashboardOverview">
      <div className="dashboard-heading">
        <h2>Dashboard</h2>
        <div>
          <select name="duration" className="duration">
            <option value="week">This Week</option>
            <option value="month">This Months</option>
            <option value="year">This Year</option>
          </select>
          <FontAwesomeIcon icon={faChevronDown} className="select-icon" />
        </div>
      </div>
      <div className="dashboard-main-section">
        <div className="left-section">
          <img src={humanBody} alt="humanBody" className="humanBody" />
        </div>
        <div className="right-section">
          <HumanBody image={lungs} title={"Lungs"} date="26 Oct,2021" color="brown" />
          <HumanBody image={teeth} title={"Teeth"} date="26 Oct,2021" color="green" />
          <HumanBody image={bone} title={"Bone"} date="26 Oct,2021" color="orange" />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
