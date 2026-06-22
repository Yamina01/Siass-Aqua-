import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import BackToTop from "../components/BackToTop/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BackToTop/>
      <WhatsAppButton/>
      <ScrollToTop/>
      <Footer />
    </>
  );
};

export default MainLayout;