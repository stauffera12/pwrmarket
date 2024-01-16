"use client";
import logo from "../../../public/images/logo.png";
import facebook from "../../../public/images/facebook.svg";
import instagram from "../../../public/images/instagram.svg";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const makeCall = () => {
    window.location.href = "tel:(714) 761-5426";
  };
  const sendEmail = () => {
    window.location.href = "mailto:example@example.com";
  };
  return (
    <footer className="w-full lg:h-[260px] py-[60px] max-lg:py-10 max-md:py-6 flex justify-center bg-white">
      <div className="w-[90%] h-full max-w-[1120px] flex justify-between max-md:flex-wrap ">
        <div className=" w-[30%] max-lg:w-[245px] h-full flex flex-wrap justify-between max-md:w-full">
          <Link
            href={"/"}
            className="w-full h-[65px]  max-md:w-[70%] max-lg:h-10"
          >
            <Image src={logo} alt="Logo image"></Image>
          </Link>
          <div className="text-[12px] text-[#444444] pt-4">
            <a
              href="https://www.google.com/maps/place/2860+N+Santiago+Blvd,+Orange,+CA+92867,+Hoa+K%E1%BB%B3/@33.83732,-117.8342172,17z/data=!3m1!4b1!4m6!3m5!1s0x80dcd72ba9b8f66f:0x1fe77321341c200a!8m2!3d33.83732!4d-117.8342172!16s%2Fg%2F11bw43qjl8?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>2860 N. Santiago Blvd, Orange, CA 92867</p>
            </a>
            <button onClick={makeCall} className="cursor-pointer">
              (714) 761-5426
            </button>
            <button onClick={sendEmail} className="pt-1 cursor-pointer">
              customerservice@hnsenergy.com
            </button>
          </div>
        </div>

        <div className="w-[55%] max-lg:w-[60%] max-md:w-full h-full flex justify-between text-[#444444] max-md:mt-6 max-md:flex-wrap">
          <div className="max-md:w-1/2">
            <p className="text-[14px] font-semibold pb-4">Company</p>
            <Link
              href={"/contact"}
              className="pt-4 text-[12px] cursor-pointer hover:text-black hover:font-semibold"
            >
              Contact
            </Link>
            <br />
            <Link
              href={"/about"}
              className="pt-1 text-[12px] cursor-pointer hover:text-black hover:font-semibold"
            >
              About Us
            </Link>{" "}
            <br />
            <a
              href="https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=fe247937-30ea-42e9-897c-7e49746c78f8&ccId=9200028200615_2&lang=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="pt-1 text-[12px] cursor-pointer hover:text-black hover:font-semibold">
                Careers
              </p>
            </a>
          </div>

          <div className="max-md:w-1/2">
            <p className="text-[14px] font-semibold pb-4">Check us out</p>
            <Link
              href={"/locations"}
              className="text-[12px] cursor-pointer hover:text-black hover:font-semibold"
            >
              Locations
            </Link>
            <br />
            <Link
              href={"/deals"}
              className="pt-1 text-[12px] cursor-pointer hover:text-black hover:font-semibold"
            >
              Deals
            </Link>
            <br />
            <Link
              href={"/rewards"}
              className="pt-1 text-[12px] cursor-pointer hover:text-black hover:font-semibold"
            >
              Rewards
            </Link>{" "}
            <br />
            <p className="pt-1 text-[12px]">Carwash</p>
            <p className="pt-1 text-[12px]">Papa Sal’s</p>
          </div>

          <div className="max-md:w-1/2 max-md:pt-6">
            <p className="text-[14px] font-semibold pb-4">Legal</p>
            <Link
              href={"/terms-and-conditions"}
              className="text-[12px] hover:text-black hover:font-semibold"
            >
              Terms & Conditions
            </Link>
            <br />
            <Link
              href={"/privacy-policy"}
              className="pt-1 text-[12px] hover:text-black hover:font-semibold"
            >
              Privacy & Policy Statement
            </Link>
            <br />
            <Link
              href={"/financial-incentive"}
              className="pt-1 text-[12px] hover:text-black hover:font-semibold"
            >
              Financial Incentive
            </Link>{" "}
            <br />
            <Link
              href={"/ccpa"}
              className="pt-1 text-[12px] hover:text-black hover:font-semibold"
            >
              CCPA
            </Link>
          </div>

          <div className="max-md:w-full max-md:pt-6  ">
            <div className="flex gap-4 max-md:justify-center">
              <a
                href="https://www.facebook.com/HnSenergy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebook}
                  className="hover:opacity-60"
                  alt="icon"
                ></Image>
              </a>
              <a
                href="https://www.instagram.com/pwrmarket/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="hover:opacity-60"
                  src={instagram}
                  alt="icon"
                ></Image>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
