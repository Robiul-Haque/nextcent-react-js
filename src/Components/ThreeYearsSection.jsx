import user from "../assets/user-login-img.png";
import Button from "./Button";

const ThreeYearsSection = () => {
  return (
    <div className="flex justify-center md:gap-x-20 flex-wrap gap-y-8 items-center mt-20 px-6 md:px-0">
      <div data-aos="fade-right">
        <img src={user} alt="user" className="mx-auto" />
      </div>
      <div data-aos="fade-left">
        <h1 className="text-4xl font-semibold text-[#4d4d4d]">
          The unseen of spending three <br /> years at Pixelgrade
        </h1>
        <p className="text-[#4d4d4d] my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. <br /> Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum <br /> lorem sed porta. Nullam mattis
          tristique iaculis.
        </p>
        <Button btnTitle={"Learn More"} />
      </div>
    </div>
  );
};

export default ThreeYearsSection;
