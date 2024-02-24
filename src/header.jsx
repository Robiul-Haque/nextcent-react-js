import React, { useState } from "react";
import "./App.css";
import nav_logo from "../src/assets/nav-logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import slider_img_1 from "../src/assets/slider-img-1.png";
import slider_img_2 from "../src/assets/slider-img-2.svg";
import slider_img_3 from "../src/assets/slider-img-3.svg";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import Button from "./Components/Button";
import Slider from "./Components/Slider";

export const header = () => {
  const [toggle, setToggle] = useState(true);
  const [toggleMenu, setToggleMenu] = useState(false);

  const navItems = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "Service",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Product",
      link: "#",
    },
    {
      name: "Testimonial",
      link: "#",
    },
    {
      name: "FAQ",
      link: "#",
    },
  ];

  return (
    <header className="bg-[#f2f7ff] pb-10">
      <nav>
        {/* desktop nav */}
        <div className="md:flex md:justify-evenly md:items-center md:pt-6 hidden">
          <div>
            <img src={nav_logo} alt="brand-nav-logo" />
          </div>
          <div>
            <ul className="flex justify-center gap-x-12 font-semibold cursor-pointer">
              {navItems.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:text-[#4caf4f] transition duration-600 ease-in-out"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <Button
              btnTitle={"Login"}
              btnClass={
                "text-[#4caf4f] border border-[#4caf4f] py-3 px-8 me-4 rounded-md hover:bg-[#4caf4f] hover:text-white hover:transition hover:duration-600 hover:ease-in font-semibold"
              }
            />
            <Button btnTitle={"Sign up"} />
          </div>
        </div>

        {/* mobilenav */}
        <div className="flex justify-between items-center pt-5 md:hidden">
          <div>
            <img src={nav_logo} alt="brand-nav-log" className="ml-5" />
          </div>
          <div className="mr-12">
            {toggle ? (
              <i
                onClick={() => {
                  setToggle(false);
                  setToggleMenu(true);
                }}
                className="cursor-pointer "
              >
                <TiThMenu className="text-2xl" />
              </i>
            ) : (
              <i
                onClick={() => {
                  setToggle(true);
                  setToggleMenu(false);
                }}
                className={toggle ? "" : "cursor-pointer text-[#4caf4f]"}
              >
                <IoClose className="text-2xl" />
              </i>
            )}
          </div>
        </div>
        {toggleMenu && (
          <ul className="md:hidden font-semibold cursor-pointer text-center mt-4 transition-all duration-1000 ease-in absolute top-12 w-full z-50 bg-[#4caf4f] text-[#f2f7ff] py-5 opacity-90">
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setToggle(true);
                    setToggleMenu(false);
                  }}
                  className="transition duration-600 ease-in-out py-1.5"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              );
            })}
            <div className="mt-5">
              <button className="border py-1.5 px-4 me-4 rounded-md text-[#f2f7ff] font-semibold border-[#f2f7ff] hover:bg-[#f2f7ff] hover:text-[#4caf4f] hover:transition hover:duration-600 hover:ease-in">
                Login
              </button>
              <button className="text-[#f2f7ff] py-1.5 px-4 rounded-md font-semibold border border-[#f2f7ff] hover:bg-[#f2f7ff] hover:text-[#4caf4f] hover:transition hover:duration-600 hover:ease-in">
                Sign up
              </button>
            </div>
          </ul>
        )}
      </nav>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:mt-28 mt-12 px-6"
      >
        <SwiperSlide>
          <Slider
            firstHading={"Lessons and insights"}
            secondHeading={"from 8 years"}
            text={`Where to grow your business as a photographer: site or social media?`}
            btnTitle={"Register"}
            img={slider_img_1}
            altText={"slider-img-1"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            firstHading={"Grow bussiness fast"}
            secondHeading={"For free of cost"}
            text={`Where to grow your business as a photographer: site or social
            media?`}
            btnTitle={"Register"}
            img={slider_img_2}
            altText={"slider-img-2"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slider
            firstHading={"Controll you bussiness"}
            secondHeading={"With mobile app"}
            text={`Where to grow your business as a photographer: site or social
            media?`}
            btnTitle={"Register"}
            img={slider_img_3}
            altText={"slider-img-3"}
          />
        </SwiperSlide>
      </Swiper>
    </header>
  );
};

export default header;
