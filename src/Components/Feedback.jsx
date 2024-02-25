import brand_logo_1 from "../assets/brand-logo-1.png";
import brand_logo_2 from "../assets/brand-logo-2.png";
import brand_logo_3 from "../assets/brand-logo-3.png";
import brand_logo_4 from "../assets/brand-logo-4.png";
import brand_logo_5 from "../assets/brand-logo-5.png";
import brand_logo_6 from "../assets/brand-logo-6.png";
import tesla from "../assets/tesla.png";

const Feedback = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex justify-center items-center mt-10 bg-[#f2f7ff] py-10 flex-wrap"
      >
        <div>
          <img src={tesla} alt="tesla-img" className="md:mx-20" />
        </div>
        <div>
          <p className="text-[#4d4d4d] w-96 mb-6 md:mx-0 mx-auto text-center md:text-left">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
          </p>
          <h2 className="text-[#4caf4f] text-2xl font-semibold mb-2 md:text-left text-center">
            Tim Smith
          </h2>
          <p className="md:text-left text-center">
            British Dragon Boat Racing Association
          </p>
          <div className="flex justify-center flex-wrap gap-x-10 items-center gap-y-6 mt-6">
            <img src={brand_logo_1} alt="brand-logo-1" />
            <img src={brand_logo_2} alt="brand-logo-2" />
            <img src={brand_logo_3} alt="brand-logo-3" />
            <img src={brand_logo_4} alt="brand-logo-4" />
            <img src={brand_logo_5} alt="brand-logo-5" />
            <img src={brand_logo_6} alt="brand-logo-6" />
            <button className="flex justify-center gap-x-2 items-center text-xl font-semibold text-[#4caf4f]">
              Meet all customers
              <img
                width="24"
                height="24"
                src="https://img.icons8.com/material-rounded/24/4caf4f/right.png"
                alt="right"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
