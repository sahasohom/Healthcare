import BarChart from "./BarChart";
import "./Activity.css";

const Activity = () => {
  return (
    <div className="activity">
      <div className="activity-header">
        <h3>Activity</h3>
        <h6>3 Appoinmnet in this week</h6>
      </div>
      <BarChart />
    </div>
  );
};

export default Activity;
