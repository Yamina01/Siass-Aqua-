
import "./WhyChooseUsSection.css";
import SectionTitle from "../SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import {
  FaAward,
  FaUserCog,
  FaBolt,
  FaMedal,
  FaTools,
  FaCogs
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const reasons = [
  {
    icon: <FaAward />,
    text: "20+ Years of Experience",
  },
  {
    icon: <FaUserCog />,
    text: "Expert Installation Team",
  },
  {
    icon: <FaBolt />,
    text: "Fast & Reliable Service",
  },
  {
    icon: <FaMedal />,
    text: "Premium Water Solutions",
  },
  {
    icon: <FaTools />,
    text: "Maintenance & Support",
  },
  {
    icon: <FaCogs />,
    text: "Customized Systems for Every Need",
  },
];

const highlights = [
  {
    number: "20+",
    title: "Years Experience",
  },
  {
    number: "500+",
    title: "Installations",
  },
  {
    number: "24/7",
    title: "Customer Support",
  },
  {
    number: "100%",
    title: "Quality Products",
  },
];

const WhyChooseUsSection = () => {
  const navigate = useNavigate();
  return (
    <section className="why-choose-us">
      <div className="container">

        <SectionTitle
          subtitle="Why Choose Us"
          title="Trusted Water Solutions Backed by Experience"
          description="For more than 20 years, we've helped homes, hospitals, schools and industries with reliable water purification systems."
        />

        <div className="why-content">

          {/* LEFT SIDE */}
          <div className="why-image" data-aos="fade-right">

            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              loop={true}
              className="why-swiper"
            >
              {highlights.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="experience-card">
                    <h2>{item.number}</h2>
                    <p>{item.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

          {/* RIGHT SIDE */}
          <div className="why-right" data-aos="fade-left">

            <h3>Why Customers Trust Siass Aqua</h3>

            <p>
              We provide reliable water purification systems with
              professional installation and dedicated after-sales support.
            </p>

            <div className="why-list">

              {reasons.map((reason, index) => (
                <div
                  className="why-item"
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={index * 100}
                >
                  <span>{reason.icon}</span>
                  {reason.text}
                </div>
              ))}

            </div>

<button
  className="why-btn"
  onClick={() => navigate("/services")}
>
  Learn More
</button>


          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;


