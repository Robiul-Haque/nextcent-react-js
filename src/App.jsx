import "./App.css";
import Header from "./header";
import brand_log_1 from "../src/assets/brand-log-1.png";
import brand_log_2 from "../src/assets/brand-log-2.png";
import brand_log_3 from "../src/assets/brand-log-3.png";
import brand_log_4 from "../src/assets/brand-log-4.png";
import brand_log_5 from "../src/assets/brand-log-5.png";
import brand_log_6 from "../src/assets/brand-log-6.png";
import card_icon_1 from "../src/assets/card-icon-1.png";
import card_icon_2 from "../src/assets/card-icon-2.png";
import card_icon_3 from "../src/assets/card-icon-3.png";
import user from "../src/assets/user-login-img.png";
import complete_img from "../src/assets/complete-project.png";
import tesla from "../src/assets/tesla.png";
import marketing_img_1 from "../src/assets/marketing-img-1.png";
import marketing_img_2 from "../src/assets/marketing-img-2.png";
import marketing_img_3 from "../src/assets/marketing-img-3.png";
import Footer from "./footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({ duration: "1400" });
  }, []);

  return (
    <>
      <Header></Header>
      <section>
        <h1 className="text-4xl font-semibold text-[#4d4d4d] text-center mt-20">
          Our Clients
        </h1>
        <p className="text-[#4d4d4d] text-center mt-4">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex justify-evenly items-center my-10">
          <img src={brand_log_1} alt="brand-log-1" />
          <img src={brand_log_2} alt="brand-log-2" />
          <img src={brand_log_3} alt="brand-log-3" />
          <img src={brand_log_4} alt="brand-log-4" />
          <img src={brand_log_5} alt="brand-log-5" />
          <img src={brand_log_6} alt="brand-log-6" />
        </div>
        <h1
          data-aos="fade-right"
          className="text-4xl font-semibold text-[#4d4d4d] text-center mt-20"
        >
          Manage your entire community <br /> in a single system
        </h1>
        <p data-aos="fade-right" className="text-[#4d4d4d] text-center mt-4">
          Who is Nextcent suitable for?
        </p>
        <div
          data-aos="fade-up"
          className="flex md:justify-center md:flex-row md:gap-x-32 flex-col items-center gap-y-10 mt-14"
        >
          <div className="text-center border rounded-md shadow-md w-80 p-10">
            <img src={card_icon_1} alt="card-icon-1" className="mx-auto" />
            <h1 className="text-[4d4d4d] text-4xl font-bold my-4">
              Membership <br /> Organisations
            </h1>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="text-center border rounded-md shadow-md w-80 p-10">
            <img src={card_icon_2} alt="card-icon-2" className="mx-auto" />
            <h1 className="text-[4d4d4d] text-4xl font-bold my-4">
              National <br /> Associations
            </h1>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className="text-center border rounded-md shadow-md w-80 p-10">
            <img src={card_icon_3} alt="card-icon-3" className="mx-auto" />
            <h1 className="text-[4d4d4d] text-4xl font-bold my-4">
              Clubs And <br /> Groups
            </h1>
            <p>
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center md:gap-x-20 flex-wrap gap-y-8 items-center mt-20 px-6 md:px-0">
          <div data-aos="fade-right">
            <img src={user} alt="user" className="mx-auto" />
          </div>
          <div data-aos="fade-left">
            <h1 className="text-4xl font-semibold text-[#4d4d4d]">
              The unseen of spending three <br /> years at Pixelgrade
            </h1>
            <p className="text-[#4d4d4d] my-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. <br /> Sed accumsan quam vitae est varius
              fringilla. Pellentesque placerat vestibulum <br /> lorem sed
              porta. Nullam mattis tristique iaculis.
            </p>
            <button className="bg-[#4caf4f] text-white py-3 px-8 rounded-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-evenly items-center bg-[#f2f7ff] py-20 my-20 px-6 md:px-0 flex-wrap gap-y-8 md:gap-y-0">
          <div>
            <h1 className="text-[#4d4d4d] text-4xl font-bold">
              Helping a local
            </h1>
            <h1 className="text-[#4caf4f] text-4xl font-bold my-2">
              business reinvent itself
            </h1>
            <p className="text-[#4d4d4d] font-semibold">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div>
            <img src={complete_img} alt="complete-project-and-event-logo" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-evenly items-center flex-wrap gap-y-10">
          <div>
            <img src={pana} alt="pana-img" className="mx-auto" />
          </div>
          <div className="md:mx-0 mx-6">
            <h1 className="text-[#4d4d4d] text-4xl font-semibold">
              How to design your site footer <br /> like we did
            </h1>
            <p className="w-96 my-5">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst.
            </p>
            <button className="bg-[#4caf4f] text-white py-3 px-8 rounded-md">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10 bg-[#f2f7ff] py-10 flex-wrap">
          <div>
            <img src={tesla} alt="tesla-img" className="md:mx-20" />
          </div>
          <div>
            <p className="text-[#4d4d4d] w-96 mb-6 md:mx-0 mx-auto ">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti.
            </p>
            <h2 className="text-[#4caf4f] text-2xl font-semibold mb-2 md:text-left text-center">
              Tim Smith
            </h2>
            <p className="md:text-left text-center">
              British Dragon Boat Racing Association
            </p>
            <div className="flex justify-center flex-wrap gap-x-10 items-center gap-y-6 mt-6">
              <img src={brand_log_1} alt="brand-logo-1" />
              <img src={brand_log_2} alt="brand-logo-2" />
              <img src={brand_log_3} alt="brand-logo-3" />
              <img src={brand_log_4} alt="brand-logo-4" />
              <img src={brand_log_5} alt="brand-logo-5" />
              <img src={brand_log_6} alt="brand-logo-6" />
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
      </section>
      <section className="mt-20">
        <h1 className="text-[#4d4d4d] text-4xl font-semibold text-center mb-4">
          Caring is the new marketing
        </h1>
        <p className="text-[#4d4d4d] text-center md:px-0 px-6">
          The Nexcent blog is the best place to read about the latest membership
          insights,
        </p>
        <p className="text-[#4d4d4d] text-center md:px-0 px-6">
          trends and more. See who's joining the community, read about how our
          community
        </p>
        <p className="text-[#4d4d4d] text-center md:px-0 px-6">
          are increasing their membership income and lot's more.​
        </p>
        <div className="flex justify-center gap-x-10 items-center flex-wrap gap-y-32 mt-10">
          <div className="relative">
            <div>
              <img src={marketing_img_1} alt="marketing_img_3" />
            </div>
            <div className="text-[#4d4d4d] bg-[#f2f7ff] py-4 p-2 text-center w-72 absolute top-48 left-10 rounded-md">
              <p className="text-[#4d4d4d] text-lg font-bold">
                Creating Streamlined Safeguarding Processes with OneRen
              </p>
              <button className="flex justify-center gap-x-2 items-center mx-auto text-[#4caf4f] font-semibold mt-3">
                Readmore
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/4caf4f/right.png"
                  alt="right"
                />
              </button>
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={marketing_img_2} alt="marketing_img_2" />
            </div>
            <div className="text-[#4d4d4d] bg-[#f2f7ff] py-4 p-2 text-center w-72 absolute top-48 left-10 rounded-md">
              <p className="text-[#4d4d4d] text-lg font-bold">
                What are your safeguarding responsibilities and how can you
                manage them?
              </p>
              <button className="flex justify-center gap-x-2 items-center mx-auto text-[#4caf4f] font-semibold mt-3">
                Readmore
                <img
                  width="24"
                  height="24"
                  src="https://img.icons8.com/material-rounded/24/4caf4f/right.png"
                  alt="right"
                />
              </button>
            </div>
          </div>
          <div className="relative">
            <div>
              <img src={marketing_img_3} alt="marketing_img_3" />
            </div>
            <div className="text-[#4d4d4d] bg-[#f2f7ff] py-4 p-4 text-center w-72 absolute top-48 left-10 rounded-md">
              <p className="text-[#4d4d4d] text-lg font-bold">
                Revamping the Membership Model with Triathlon Australia
              </p>
              <button className="flex justify-center gap-x-2 items-center mx-auto text-[#4caf4f] font-semibold mt-3">
                Readmore
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
        <div className="bg-[#f2f7ff] mt-44 py-10">
          <h1 className="text-center font-semibold md:text-6xl text-5xl text-[#4d4d4d]">
            Pellentesque suscipit
          </h1>
          <h1 className="text-center font-semibold md:text-6xl text-5xl text-[#4d4d4d] mt-3">
            fringilla libero eu.
          </h1>
          <button className="flex justify-center gap-x-2 items-center bg-[#4caf4f] text-white py-4 px-8 rounded-md mx-auto mt-10">
            Get a Demo
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-rounded/24/FFFFFF/right.png"
              alt="right"
            />
          </button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
