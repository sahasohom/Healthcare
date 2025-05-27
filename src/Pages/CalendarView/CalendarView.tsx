import WeekCalendar from "../../Components/WeekCalendar";
import "./CalendarView.css";
import DoctorAppoinment from "./DoctorAppoinment/DoctorAppoinment";
import HeaderCalendar from "./HeaderCalendar";

const CalendarView = () => {
  return (
    <div className="appointment-card">
      <HeaderCalendar />
      <WeekCalendar />
      <DoctorAppoinment />
    </div>
  );
};

export default CalendarView;
