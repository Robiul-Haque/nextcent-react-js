import Button from "./Button";

export const Slider = ({
  firstHading,
  secondHeading,
  text,
  btnTitle,
  img,
  altText,
}) => {
  return (
    <div className="flex justify-evenly gap-x-12 items-center mb-28">
      <div>
        <h1 className="md:text-6xl text-4xl font-bold text-[#4d4d4d] md:mt-0 mt-12">
          {firstHading}
        </h1>
        <h1 className="md:text-6xl text-4xl font-bold text-[#4caf4f] md:mt-2">
          {secondHeading}
        </h1>
        <p className="my-4 text-[#4d4d4d]">{text}</p>
        <Button btnTitle={btnTitle} />
      </div>
      <div>
        <img src={img} alt={altText} className="md:w-96 md:h-96" />
      </div>
    </div>
  );
};

export default Slider;
