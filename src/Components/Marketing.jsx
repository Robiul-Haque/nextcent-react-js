import marketing_img_1 from "../assets/marketing-img-1.png";
import marketing_img_2 from "../assets/marketing-img-2.png";
import marketing_img_3 from "../assets/marketing-img-3.png";

const Marketing = () => {
  return (
    <div className="mt-20">
      <h1
        data-aos="fade-right"
        className="text-[#4d4d4d] text-4xl font-semibold text-center mb-4"
      >
        Caring is the new marketing
      </h1>
      <p
        data-aos="fade-right"
        className="text-[#4d4d4d] text-center md:px-0 px-6"
      >
        The Nexcent blog is the best place to read about the latest membership
        insights,
      </p>
      <p
        data-aos="fade-right"
        className="text-[#4d4d4d] text-center md:px-0 px-6"
      >
        trends and more. See who's joining the community, read about how our
        community
      </p>
      <p
        data-aos="fade-right"
        className="text-[#4d4d4d] text-center md:px-0 px-6"
      >
        are increasing their membership income and lot's more.​
      </p>
      <div
        data-aos="fade-right"
        className="flex justify-center gap-x-10 items-center flex-wrap gap-y-32 mt-10"
      >
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
              What are your safeguarding responsibilities and how can you manage
              them?
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
    </div>
  );
};

export default Marketing;
