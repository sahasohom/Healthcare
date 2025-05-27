import "./DoctorAppoinment.css";
import teeth from "../../../assets/teeth.png";
import DoctorAppoinmentCard from "./DoctorAppoinmentCard";
import injection from "../../../assets/injection.jpg";
import eye from "../../../assets/eye.png";
import heart from "../../../assets/heart.png";
import man from "../../../assets/man.png";

const DoctorAppoinment = () => {
  return (
    <div className="doctor-appoinment">
      <div className="doctor-appointment-cards">
        <DoctorAppoinmentCard
          title="Dentist"
          image={teeth}
          time="09:00 - 11:00"
          doctorName="Dr. Camerron Williamson"
          isSelected={true}
        />
        <DoctorAppoinmentCard
          title="Physiotheraphy Appoinment"
          image={injection}
          time="11:00 - 12:00"
          doctorName="Dr. Kevlin Djones"
          isSelected={false}
        />
      </div>
      <h2 className="upcoming">The upcoming Schedule</h2>
      <h5 className="heading-date">On Thursday</h5>
      <div className="doctor-appointment-cards">
        <DoctorAppoinmentCard
          title="Health Checkup Complete"
          image={injection}
          time="11:00 AM"
          isSelected={false}
        />
        <DoctorAppoinmentCard
          title="Ophthalmologist"
          image={eye}
          time="11:00 - 12:00"
          isSelected={false}
        />
      </div>
      <h5 className="heading-date">On Saturday</h5>
      <div className="doctor-appointment-cards">
        <DoctorAppoinmentCard
          title="Cardiologist"
          image={heart}
          time="12:00 AM"
          isSelected={false}
        />
        <DoctorAppoinmentCard
          title="Neurologist"
          image={man}
          time="16:00 AM"
          isSelected={false}
        />
      </div>
    </div>
  );
};

export default DoctorAppoinment;
