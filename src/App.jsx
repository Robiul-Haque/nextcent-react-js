import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./header";
import Footer from "./footer.jsx";
import OurClients from "./Components/OurClients.jsx";
import ManageCommunity from "./Components/ManageCommunity.jsx";
import ThreeYearsSection from "./Components/ThreeYearsSection.jsx";
import ReacheClient from "./Components/ReacheClient.jsx";
import HowToDesign from "./Components/HowToDesign.jsx";
import Feedback from "./Components/Feedback.jsx";
import Marketing from "./Components/Marketing.jsx";
import LastSection from "./Components/LastSection.jsx";

function App() {
  useEffect(() => {
    AOS.init({ duration: "1400" });
  }, []);

  return (
    <>
      <Header />
      <OurClients />
      <ManageCommunity />
      <ThreeYearsSection />
      <ReacheClient />
      <HowToDesign />
      <Feedback />
      <Marketing />
      <LastSection />
      <Footer />
    </>
  );
}

export default App;
