import pana from "../assets/pana.png";
import Button from "./Button";

const HowToDesign = () => {
  return (
    <>
      <div className="flex justify-evenly items-center flex-wrap gap-y-10 pb-10">
        <div data-aos="fade-right">
          <img src={pana} alt="pana-img" className="mx-auto" />
        </div>
        <div data-aos="fade-left" className="md:mx-0 mx-6 text-center md:text-left">
          <h1 className="text-[#4d4d4d] text-4xl font-semibold">
            How to design your site footer <br /> like we did
          </h1>
          <p className="md:w-96 w-none my-5">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst.
          </p>
          <Button btnTitle={"Learn More"} />
        </div>
      </div>
    </>
  );
};

export default HowToDesign;
