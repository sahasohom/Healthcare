interface DoctorAppoinmentCardType {
  title: string;
  image: string;
  time: string;
  doctorName?: string;
  isSelected: boolean;
}

const DoctorAppoinmentCard = ({
  title,
  image,
  time,
  doctorName,
  isSelected,
}: DoctorAppoinmentCardType) => {
  return (
    <div
      className={
        isSelected
          ? "selected-card doctor-appoinment-card"
          : "non-selected-card doctor-appoinment-card"
      }
    >
      <div className="heading-appointment">
        <h3>{title}</h3>
        <img src={image} alt="image" />
      </div>
      <h5>{time}</h5>
      {doctorName && <p>{doctorName}</p>}
    </div>
  );
};

export default DoctorAppoinmentCard;
