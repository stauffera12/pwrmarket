import image1 from "../../../public/images/deal1.png";
import image2 from "../../../public/images/deal2.png";
import image3 from "../../../public/images/deal3.png";
import Image from "next/image";
import Link from "next/link";

export default function Deals() {
  return (
    <div className="w-full md:h-[430px] py-[60px] flex justify-center max-lg:py-[40px] max-md:py-[24px]">
      <div className="w-[90%] max-w-[1120px]">
        <div className="text-center text-[28px] font-semibold text-[#444444] mb-6">
          Deals
        </div>
        <div className="w-full md:h-[200px] flex flex-wrap gap-[32px] justify-between">
          <div className="w-[30%] h-full rounded-[16px] bg-white max-md:w-full max-md:h-[185px] hover:transform hover:scale-110 transition-transform ease duration-300">
            <Image src={image1} alt="image deals 1"></Image>
          </div>
          <div className="w-[30%] h-full rounded-[16px] bg-white max-md:w-full max-md:h-[185px] hover:transform hover:scale-110 transition-transform ease duration-300">
            <Image src={image2} alt="image deals 2"></Image>
          </div>

          <div className="w-[30%] h-full rounded-[16px] bg-white max-md:w-full max-md:h-[185px] hover:transform hover:scale-110 transition-transform ease duration-300">
            <Image src={image3} alt="image deals 3"></Image>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Link
            href={"/deals"}
            aria-label="deals"
            className="w-[90px] h-[35px] text-white rounded-[37px] font-medium bg-[#005DB8] mt-6 cursor-pointer flex justify-center items-center"
          >
            View all
          </Link>
        </div>
      </div>
    </div>
  );
}
