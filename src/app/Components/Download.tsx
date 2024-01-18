import phone from "../../../public/images/phone.png";
import google from "../../../public/images/downloalgg.png";
import app from "../../../public/images/dowloalapp.png";
import Image from "next/image";
import image from "../../../public/images/delivery.png";
import image3 from "../../../public/images/delivery3.png";

export type Props = {
  isdownload?: boolean;
};

export const Download: React.FC<Props> = ({ isdownload }) => {
  const gradientStyle = {
    backgroundImage: `url(${image.src})`,
    backgroundRepeat: "no-repeat",
    // backgroundImage: 'linear-gradient(to bottom right, rgba(117, 190, 65, 1), rgba(0, 99, 169, 1))',
  };
  const bgStyle = {
    backgroundImage: `url(${image3.src})`,
    backgroundRepeat: "no-repeat",
  };
  return (
    <div
      className={`w-full md:h-[500px] max-md:h-[300px] bg-[#F7F7F6]  flex justify-center ${
        isdownload ? "md:mt-[180px] max-md:mt-[144px] max-lg:mt-[160px]" : ""
      }`}
    >
      <div
        style={gradientStyle}
        className="w-[90%]  max-w-[1220px] flex justify-center my-10 max-md:my-6  max-md:bg-contain md:bg-cover relative"
      >
        <a
          href="https://www.vroomdelivery.com/powermarket"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Opens in a new tab: Power market`}
        >
          <div className="absolute flex justify-center items-center left-[180px] max-md:left-10 bottom-5 max-md:bottom-4 md:w-[200px] md:h-10  max-md:border-[2px] max-md:text-[8px]  border-[3px] border-[#75BE41] bg-white hover:bg-[#75BE41] hover:text-white z-20 rounded-[27px] text-[#444444] font-semibold ">
            Order Now
          </div>
        </a>
      </div>
      {/* <div
        style={bgStyle}
        className="w-[90%] md:hidden  flex justify-center my-10 max-md:my-6  max-md:bg-contain md:bg-cover relative"
      >
        <a
          href="https://www.vroomdelivery.com/powermarket"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Opens in a new tab vroomdelivery in mobile"
        >
          <button className="absolute flex justify-center items-center bottom-6 left-[35%] text-[14px]  w-[100px] h-10  max-md:border-[2px]  border-[3px] border-[#75BE41] bg-white hover:bg-[#75BE41] hover:text-white z-20 rounded-[27px] text-[#444444] font-semibold ">
            Order Now
          </button>
        </a>
      </div> */}
    </div>
  );
};
