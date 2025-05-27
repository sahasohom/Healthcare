import Activity from "./Activity";
import "./Dashboard.css";
import DashboardOverview from "./DashboardOverview";
import Search from "./Search";

const Dashboard = () => {
  return (
    <div className="dashboard-card">
      <Search />
      <DashboardOverview />
      <Activity />
    </div>
  );
};

export default Dashboard;
