import "./Card.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
};

export default Card;