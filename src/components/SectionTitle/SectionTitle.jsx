import "./SectionTitle.css";

const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <div className="section-title">
      {subtitle && <span className="section-subtitle">{subtitle}</span>}

      <h2 className="section-heading">{title}</h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;