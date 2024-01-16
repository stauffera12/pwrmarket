"use client";
import banner from "../../../public/images/imagebanners.png";
import line from "../../../public/images/linebanner.png";
import Link from "next/link";

export const HomeBannner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${banner.src})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
  };
  const backgroundImageStyle1 = {
    backgroundImage: `url(${line.src})`,
    backgroundRepeat: "repeat",
    // backgroundSize: '100%',
    backgroundPosition: "center",
  };

  return (
    <div
      className={`h-[600px] w-full  max-md:h-[264px] relative overflow-hidden mt-[120px] max-md:mt-[85px] flex justify-center pt-[20px] md:pt-[30px]`}
    >
      <div
        className="w-full max-w-[1200px] relative z-10"
        style={backgroundImageStyle}
      >
        <Link
          href={"/locations"}
          className="absolute flex justify-center items-center bottom-5 md:bottom-10 left-[10%] max-md:left-[20%] w-[200px] max-md:w-[110px] max-md:border-[2px] max-md:text-[12px] h-10 border-[3px] border-[#75BE41] hover:bg-[#75BE41] hover:text-white z-20 rounded-[27px] text-[#444444] font-semibold"
        >
          Find a Store
        </Link>
      </div>
      <div className="absolute top-0 left-0 w-full h-full  flex justify-center items-end max-md:items-center pt-10">
        <div
          className="w-full h-[230px] max-md:h-[80px] max-md:bg-cover max-md:bg-[100%]"
          style={backgroundImageStyle1}
        ></div>
      </div>
    </div>
  );
};
