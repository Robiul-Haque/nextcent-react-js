import card_icon_1 from "../assets/card-icon-1.png";
import card_icon_2 from "../assets/card-icon-2.png";
import card_icon_3 from "../assets/card-icon-3.png";

const ManageCommunity = () => {
  return (
    <>
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
    </>
  );
};

export default ManageCommunity;
