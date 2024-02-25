import footer_logo from "../src/assets/footer-logo.png";

function footer() {
  return (
    <>
      <footer className="bg-[#263238] py-20">
        <div className="md:flex md:justify-evenly">
          <div className="text-center">
            <img src={footer_logo} alt="footer-log" className="mx-auto" />
            <div className="mt-5">
              <p className="text-[#F5F7FA]">Copyright © 2020 Nexcent ltd.</p>
              <p className="text-[#F5F7FA]">All rights reserved</p>
            </div>
            <div className="flex md:justify-start gap-x-3 items-center mt-10 justify-center">
              <div className="bg-[#3c464c] p-2 rounded-full">
                <a href="https://www.instagram.com/" target="_blank">
                  <img
                    width="22"
                    height="22"
                    src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/instagram-new--v1.png"
                    alt="instagram-new--v1"
                  />
                </a>
              </div>
              <div className="bg-[#3c464c] p-2 rounded-full">
                <a href="https://dribbble.com/" target="_blank">
                  <img
                    width="22"
                    height="22"
                    src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/dribbble.png"
                    alt="dribbble"
                  />
                </a>
              </div>
              <div className="bg-[#3c464c] p-2 rounded-full">
                <a href="https://twitter.com/" target="_blank">
                  <img
                    width="22"
                    height="22"
                    src="https://img.icons8.com/material-outlined/24/FFFFFF/twitter.png"
                    alt="twitter"
                  />
                </a>
              </div>
              <div className="bg-[#3c464c] p-2 rounded-full">
                <a href="https://www.youtube.com/" target="_blank">
                  <img
                    width="22"
                    height="22"
                    src="https://img.icons8.com/material-outlined/24/FFFFFF/youtube-play--v1.png"
                    alt="youtube-play--v1"
                  />
                </a>
              </div>
            </div>
          </div>
          <div></div>
          <div className="text-center md:mt-0 mt-10">
            <h1 className="text-white text-2xl font-semibold">Company</h1>
            <a href="#" className="text-[#F5F7FA] block mt-5">
              About us
            </a>
            <a href="#" className="text-[#F5F7FA] block my-2">
              Blog
            </a>
            <a href="#" className="text-[#F5F7FA] block">
              Contact us
            </a>
            <a href="#" className="text-[#F5F7FA] block my-2">
              Pricing
            </a>
            <a href="#" className="text-[#F5F7FA] block">
              Testimonials
            </a>
          </div>
          <div className="text-center md:mt-0 mt-10">
            <h1 className="text-white text-2xl font-semibold">Support</h1>
            <a href="#" className="text-[#F5F7FA] block mt-5">
              Help center
            </a>
            <a href="#" className="text-[#F5F7FA] block my-2">
              Terms of service
            </a>
            <a href="#" className="text-[#F5F7FA] block ">
              Legal
            </a>
            <a href="#" className="text-[#F5F7FA] block my-2">
              Privacy policy
            </a>
            <a href="#" className="text-[#F5F7FA] block ">
              Status
            </a>
          </div>
          <div className="text-center md:mt-0 mt-10">
            <h1 className="text-white text-2xl font-semibold">Subscribe</h1>
            <div className="relative mt-5">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="py-2 px-2 rounded-md w-72"
              />
              <button
                type="submit"
                className="inline-block absolute top-1 md:right-[10px] right-[50px]"
                title="Send"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/material-outlined/24/1A1A1A/filled-sent.png"
                  alt="filled-sent"
                />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
