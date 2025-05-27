import "./HumanBody.css";

interface humanBodyPropType {
  image: string;
  title: string;
  date: string;
  color: string;
}
const HumanBody = ({ image, title, date, color }: humanBodyPropType) => {
  return (
    <div className="human-body">
      <div className="header">
        <img src={image} alt="image" />
        <h4>{title}</h4>
      </div>
      <div className="date">Date: {date}</div>
      <div className="progress-bar1">
        <div
          style={{
            backgroundColor: `${color}`,
            width: `60%`,
            height: "100%",
            borderRadius: "20px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HumanBody;
