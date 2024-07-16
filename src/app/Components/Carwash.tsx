import image1 from "../../../public/images/Autospa.png";
import Image from "next/image";
import Link from "next/link";

export default function Carwash() {
    return (
      <div className="w-full md:h-[430px] py-[10px] flex justify-center max-lg:py-[20px] max-md:py-[12px]">
        <div className="w-[90%] max-w-[1120px]">
          <div className="text-center mb-4">
            <Image 
              src={image1} 
              alt="image deals 1" 
              className="w-[95%] max-w-[900px] mx-auto"
            />
          </div>
          <p className="text-center text-[18px] font-medium text-[#444444] mb-3">
            Join PM+ now for 50% off your first 2 months!
          </p>
          <div className="w-full flex justify-center">
            <Link
              href={"/download"}
              aria-label="deals"
              className="w-[120px] h-[45px] text-white rounded-[37px] font-medium bg-[#005DB8] cursor-pointer flex justify-center items-center text-[18px]"
            >
              Join now!
            </Link>
          </div>
        </div>
      </div>
    );
  }