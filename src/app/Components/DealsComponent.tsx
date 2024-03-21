import Image from "next/image";
import image1 from "../../../public/images/deals/deal13.png";
import image2 from "../../../public/images/deals/deal14.png";
import image3 from "../../../public/images/deals/deal15.png";
import image4 from "../../../public/images/deals/deal16.png";
import image5 from "../../../public/images/deals/deal17.png";
import image6 from "../../../public/images/deals/deal18.png";
import image7 from "../../../public/images/deals/deal19.png";
import image8 from "../../../public/images/deals/deal20.png";
import image9 from "../../../public/images/deals/deal21.png";
import image10 from "../../../public/images/deals/deal22.png";
import image11 from "../../../public/images/deals/deal23.png";
import image12 from "../../../public/images/deals/deal24.png";

const data = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

export default function DealsComponent() {
  return (
    <div className="w-full flex justify-center py-[60px] max-lg:py-10 max-md:py-6">
      <div className="w-[90%] max-w-[1120px]">
        <div className="w-full text-center text-[#444444] text-[28px] font-semibold pb-8 max-md:pb-6 max-md:text-[20px]"></div>
        <div className="w-full grid grid-cols-3 gap-8 max-md:gap-6 max-md:grid-cols-1 ">
          {data.map((item, idx) => (
            <Image
              key={idx}
              src={item}
              alt="Deal image"
              className="rounded-[16px]"
            ></Image>
          ))}
        </div>
      </div>
    </div>
  );
}
