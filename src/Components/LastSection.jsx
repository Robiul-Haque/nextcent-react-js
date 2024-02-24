import Button from "./Button";

const LastSection = () => {
  return (
    <div className="bg-[#f2f7ff] mt-44 py-10">
      <h1
        data-aos="fade-top"
        className="text-center font-semibold md:text-6xl text-5xl text-[#4d4d4d]"
      >
        Pellentesque suscipit
      </h1>
      <h1
        data-aos="fade-top"
        className="text-center font-semibold md:text-6xl text-5xl text-[#4d4d4d] mt-3"
      >
        fringilla libero eu.
      </h1>
      <div className="text-center mt-8">
        <Button btnTitle={"Get a Demo"} />
      </div>
    </div>
  );
};

export default LastSection;
