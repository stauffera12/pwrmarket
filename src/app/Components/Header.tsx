"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/logo.png";
import map from "../../../public/images/map.svg";
import menu from "../../../public/images/menuicon.svg";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import wheelchair from "../../../public/wheelchair.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="w-full h-[120px] max-md:h-[75px] fixed top-0 left-0 right-0 flex flex-wrap z-30">
      <div className="w-full h-1/3 max-md:h-[36px] bg-[#EBEBEB] flex justify-center">
        <nav className="h-full max-w-[1120px] w-[90%] flex justify-between text-[#444444] text-[14px] max-md:text-[12px] items-center">
          <Link
            href={"https://locations.pwrmarket.com/"}
            className="cursor-pointer flex gap-3 hover:text-black hover:font-semibold"
            aria-label="Locations"
          >
            <Image src={map} alt={"Map icon"} />
            Locations
          </Link>
          <div className="flex gap-5">
            <Image src={wheelchair} alt="wheelchair" width={25} ></Image>
            <Link
              href={"/about"}
              className="cursor-pointer hover:text-black hover:font-semibold"
            >
              About Us
            </Link>
            <Link
              href={"/contact"}
              className="cursor-pointer hover:text-black hover:font-semibold"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>

      <div
        className="w-full h-2/3 max-md:h-[49px]  flex justify-center"
        style={{ background: "rgba(255, 255, 255, 0.8)" }}
      >
        <div className="h-full max-w-[1120px] w-[90%] flex justify-between items-center">
          <div className="md:hidden cursor-pointer relative">
            <Image src={menu} alt="menu" onClick={toggleMenu}></Image>
            {showMenu && (
              <nav
                className={`fixed top-[85px] left-0 w-[100vw] z-[50]  text-[#444444] shadow-lg gap-3 px-[24px] py-5 font-semibold text-[12px] flex flex-col justify-center transform  transition-transform ease-in-out duration-300`}
                style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
              >
                <button className="flex justify-center w-full">
                  <Link aria-label="deals" href={"/deals"}>
                    Deals
                  </Link>
                </button>
                <button className="flex justify-center w-full">
                  <Link href={"/rewards"}>Rewards</Link>
                </button>
                <button className="flex justify-center w-full">
                  <Link href={"/carwash"}>Carwash</Link>
                </button>
                <button className="flex justify-center w-full">
                  <Link aria-label="Papa Sal’s Deli" href={"/papa-sals"}>
                    Papa Sal’s Deli
                  </Link>
                </button>
                <button
                  onClick={toggleMenu}
                  className=" absolute right-3 top-3 cursor-pointer"
                >
                  <IoClose size={20} />
                </button>
              </nav>
            )}
          </div>

          <div className="flex gap-5 max-lg:w-[190px] max-md:w-[130px] ">
            <Link
              href={"https://www.pwrmarket.com/"}
              aria-label="Visit powerMarket website"
            >
              <Image
                src={Logo}
                alt="powerMarket logo - Click to visit powerMarket website"
              ></Image>
            </Link>
          </div>
          <nav className="flex justify-between font-semibold text-[16px] text-[#444444] w-[40%] max-lg:text-[14px] max-lg:w-[45%] max-md:hidden">
            <Link href={"/"} aria-label="Home">
              Home
            </Link>
            <span className="sr-only">
              Both links lead to the homepage of powerMarket.
            </span>
            <Link href={"/deals"} aria-label="deals">
              Deals
            </Link>
            <Link href={"/rewards"} aria-label="View rewards">
              Rewards
            </Link>
            <Link href={"/carwash"} aria-label="Carwash">
              Carwash
            </Link>
            <Link href={"/papa-sals"} aria-label="Papa Sal’s Deli">
              Papa Sal’s Deli
            </Link>
          </nav>
          {/* <Link
            href={"/download"}
            className="w-[175px] h-[35px] bg-[#75BE41] max-lg:w-[150px] rounded-[16px] text-white font-semibold text-[16px] max-lg:text-[14px] max-md:w-[130px] max-md:h-[30px] max-md:text-[12px] cursor-pointer flex justify-center items-center"
          >
            Download our App
          </Link> */}
          <Link
            href={"/download"}
            aria-label="Power Market App download"
            className="w-[175px] h-[35px] bg-[#00796B] max-lg:w-[150px] rounded-[16px] text-white font-semibold text-[16px] max-lg:text-[14px] max-md:w-[130px] max-md:h-[30px] max-md:text-[12px] cursor-pointer flex justify-center items-center transition duration-300 ease-in-out hover:bg-[#004D40] focus:outline-none focus:ring focus:border-blue-300 focus:bg-[#004D40]"
          >
            Download our App
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
