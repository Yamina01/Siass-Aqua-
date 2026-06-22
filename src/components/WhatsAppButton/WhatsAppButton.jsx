import "./WhatsAppButton.css";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {

  const phoneNumber = "8939618666"; // Replace with actual number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;
