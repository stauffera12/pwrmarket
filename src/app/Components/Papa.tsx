import image1 from "../../../public/images/papalunch.png";
import image2 from "../../../public/images/papabreak.png";
import image3 from "../../../public/images/cheeses.png";
import Image from "next/image";

export default function PaPaComponent() {
  const Data = [image1, image2, image3];
  return (
    <div className="w-full py-[60px] max-lg:py-10 max-md:py-6 flex justify-center mt-[120px] max-md:mt-[85px]">
      <div className="w-[90%] h-full max-w-[1120px] ">
        <div className="text-center text-[28px] max-md:text-[22px] font-semibold text-[#444444] mb-6">
          Taste Fresh. Eat Happy. Papa Sal &apos;s
        </div>
        <div className="text-center text-[18px] max-md:text-[14px] md:px-[10%] text-[#444444] mb-10 md:mb-[60px] ">
          At Papa Sal&apos;s deli, our motto, &quot;taste fresh. Eat happy. Papa
          Sal&apos;s,&quot; encapsulates our commitment to delivering
          mouthwatering delights that leave you smiling. From made-to-order
          sandwiches to ready-made options, our menu boasts an array of choices.
          Savor our crispy fried chicken, explore vegetarian offerings, and
          embrace healthier meal options. Whether you&apos;re craving a quick
          bite or planning a family feast, Papa Sal&apos;s deli has something to
          satisfy every palate. Join us today and embark on a flavorful journey!
        </div>
        {Data.map((item, idx) => (
          <div
            key={idx}
            className="w-full flex justify-center pt-6 md:pt-10 md:pb-[60px] mb-6"
          >
            <div className="w-full md:w-[90%]">
              <Image
                src={item}
                alt="image"
                className="rounded-[20px] w-full"
              ></Image>
            </div>
          </div>
        ))}
        <div className="w-full flex justify-center">
          <a
            href="https://www.vroomdelivery.com/powermarket"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Opens in a new tab: Power market`}
          >
            <button
              className="py-3 px-5 max-md:py-2 max-md:px-3 text-[22px] max-md:text-[18px] rounded-[20px] max-md:rounded-xl  text-white font-semibold"
              style={{ backgroundColor: "rgba(33, 15, 45, 1)" }}
            >
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
