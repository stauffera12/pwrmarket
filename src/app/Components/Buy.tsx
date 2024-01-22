import Image from "next/image";
import Link from "next/link";
import image1 from "../../../public/images/imagereward.png";
import image3 from "../../../public/images/rewardimages.png";
import image4 from "../../../public/images/rewards4.png";
export default function Buy() {
  const backgroundImageStyle = {
    backgroundImage: `url(${image3.src})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };
  const backgroundImageStyle2 = {
    backgroundImage: `url(${image4.src})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    with: "100%",
  };
  return (
    <div className="w-full h-[350px] max-md:h-auto md:my-[60px] max-lg:my-[40px] max-md:my-0 flex justify-center relative bg-cover bg-[#015EB8]">
      <div className="w-full max-w-[1120px] h-full bg-cover relative flex max-md:justify-center ">
        <div className="w-[40%] h-full max-md:w-[90%] text-white mb-10 pt-5 z-10">
          <h1 className="text-[50px] font-extrabold leading-[60px] max-md:left-10 max-md:text-[40px]">
            MORE SAVINGS, <br />
            MORE POWER!
          </h1>
          <p className="text-[18px] w-[400px] max-md:w-full pt-3 max-md:text-[14px]">
            Join PM Rewards and discover a world of quality products, incredible
            value, and fuel savings at the convenience you deserve
          </p>
          <div className="w-[100px] h-[5px] bg-white mt-3"></div>

          <Link
            href={"/rewards"}
            aria-label="Fresh and delicious foods and beverages at Power Market"
            className=" mt-5 md:w-[200px] max-md:w-[180px] h-[45px] flex justify-center items-center border-[4px]  border-[#75BE41] bg-white hover:bg-[#75BE41] hover:text-white  rounded-[22px] text-[#444444] font-semibold  md:font-bold max-md:text-[14px]"
          >
            How to Reward yourself
          </Link>
        </div>

        <div className=" absolute top-0 left-0 w-full h-full flex justify-end max-md:hidden ">
          <div
            role="img"
            aria-label="Rewards wallpaper"
            className="w-[70%] h-full"
            style={backgroundImageStyle}
          ></div>
        </div>
      </div>
    </div>
  );
}
