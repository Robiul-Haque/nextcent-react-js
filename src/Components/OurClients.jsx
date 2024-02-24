import brand_logo_1 from "../assets/brand-logo-1.png";
import brand_logo_2 from "../assets/brand-logo-2.png";
import brand_logo_3 from "../assets/brand-logo-3.png";
import brand_logo_4 from "../assets/brand-logo-4.png";
import brand_logo_5 from "../assets/brand-logo-5.png";
import brand_logo_6 from "../assets/brand-logo-6.png";

const OurClients = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-[#4d4d4d] text-center mt-20">
        Our Clients
      </h1>
      <p className="text-[#4d4d4d] text-center mt-4">
        We have been working with some Fortune 500+ clients
      </p>
      <div className="flex justify-evenly items-center my-10">
        <img src={brand_logo_1} alt="brand-log-1" />
        <img src={brand_logo_2} alt="brand-log-2" />
        <img src={brand_logo_3} alt="brand-log-3" />
        <img src={brand_logo_4} alt="brand-log-4" />
        <img src={brand_logo_5} alt="brand-log-5" />
        <img src={brand_logo_6} alt="brand-log-6" />
      </div>
    </>
  );
};

export default OurClients;