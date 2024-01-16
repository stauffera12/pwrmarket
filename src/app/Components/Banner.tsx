"use client";
import Image from "next/image";
import bannerImage from "../../../public/images/banner-image.png";
import map from "../../../public/images/map2.svg";
import Link from "next/link";

export type Props = {
  isContact?: boolean;
  ishome?: boolean;
  title?: string;
  description?: string;
  name?: string;
};

export const Banner: React.FC<Props> = ({
  isContact,
  title,
  description,
  name,
}) => {
  const makeCall = () => {
    window.location.href = "tel:(714) 761-5426";
  };

  return (
    <div>
      <div
        className={`h-[256px] w-full  max-md:h-[264px] relative overflow-hidden mt-[120px] max-md:mt-[85px] flex justify-center`}
      >
        <>
          <div
            className={`absolute top-0 left-0 w-full h-full transition-opacity z-10`}
          >
            <div className="w-full h-full bg-[#75BE41] bg-opacity-80"></div>
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full flex justify-center`}
          >
            <div className="w-full h-full max-w-[1120px] flex justify-end">
              <Image
                src={bannerImage}
                alt="Banner Image"
                objectFit="cover"
                className=""
              />
            </div>
          </div>
        </>

        <div className="w-[90%] max-w-[1120px] flex items-center h-full">
          <div
            className={`h-full max-md:w-[90%] z-20  rounded-[24px] p-[20px] max-md:p-4 flex  flex-wrap `}
          >
            <div className="w-[400px] max-md:w-full">
              <h1 className="text-[36px] max-md:text-[20px] font-bold text-[#101010] max-md:pt-2">
                {title}
              </h1>
              <p className="max-md:text-[14px]">{description}</p>
            </div>

            <div className="w-full flex mt-5">
              {isContact ? (
                <button
                  onClick={makeCall}
                  className="w-[180px] max-md:w-[60%] max-md:text-[12px] h-10 rounded-[16px] bg-[#0064A9]  text-white font-semibold flex items-center justify-center gap-2"
                >
                  Call Us: (714) 761-5426
                </button>
              ) : (
                <Link
                  href={"/locations"}
                  className="w-[180px] cursor-pointer max-md:w-[60%] max-md:text-[12px] h-10 rounded-[16px] bg-[#0064A9]  text-white font-semibold flex items-center justify-center gap-2"
                >
                  <Image src={map} alt="icon" className=""></Image>
                  Find a Location
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {!isContact && (
        <div className="w-full h-[100px] flex justify-center">
          <div className="w-[90%] h-full max-w-[1120px] flex items-end flex-wrap">
            <div className="w-full h-[90%] flex items-end text-[#444444] text-[36px] max-md:text-[28px] font-bold">
              {name}
            </div>
            <div className="w-full h-[5px] flex">
              <div className="w-[180px] h-full bg-[#015EB8]"></div>
              <div className="w-full h-full bg-[#75BE41]"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
