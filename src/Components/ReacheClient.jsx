import complete_img from "../assets/complete-project.png";

const ReacheClient = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex justify-evenly items-center bg-[#f2f7ff] py-20 my-20 px-6 md:px-0 flex-wrap gap-y-8 md:gap-y-0"
      >
        <div className="text-center md:text-left">
          <h1 className="text-[#4d4d4d] text-4xl font-bold">Helping a local</h1>
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
    </>
  );
};

export default ReacheClient;
