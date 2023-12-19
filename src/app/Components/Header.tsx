'use client'
import Image from "next/image"
import Link from "next/link"
import Logo from '../../../public/images/logo.png'
import map from '../../../public/images/map.svg'
import menu from '../../../public/images/menuicon.svg'
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";


const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="w-full h-[120px] max-md:h-[75px] fixed top-0 left-0 right-0 flex flex-wrap z-30">
            <div className="w-full h-1/3 max-md:h-[36px] bg-[#EBEBEB] flex justify-center">
                <div className="h-full max-w-[1120px] w-[90%] flex justify-between text-[#444444] text-[14px] max-md:text-[12px] items-center">
                    <Link href={'/locations'} className="cursor-pointer flex gap-3 hover:text-black hover:font-semibold">
                        <Image src={map} alt={"icon"} />
                        Locations
                    </Link>
                    <div className="flex gap-5">
                        <Link href={'/about'} className="cursor-pointer hover:text-black hover:font-semibold">About Us</Link>
                        <Link href={'/contact'} className="cursor-pointer hover:text-black hover:font-semibold">Contact</Link>
                    </div>
                </div>
            </div>

            <div className="w-full h-2/3 max-md:h-[49px]  flex justify-center" style={{ background: 'rgba(255, 255, 255, 0.8)' }}>
                <div className="h-full max-w-[1120px] w-[90%] flex justify-between items-center">
                    <div className="md:hidden cursor-pointer relative">
                        <Image src={menu} alt="menu" onClick={toggleMenu}></Image>
                        {/* {showMenu &&
                            <div onClick={toggleMenu} className="fixed top-0 left-0 right-0 bottom-0 z-10"></div>
                        } */}
                        {showMenu &&
                            <div className={`fixed top-[85px] left-0 w-[100vw] z-[50]  text-[#444444] shadow-lg gap-3 px-[24px] py-5 font-semibold text-[12px] flex flex-col justify-center transform  transition-transform ease-in-out duration-300`} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                                <div className="flex justify-center w-full">
                                    <Link href={'/deals'}>Deals</Link>
                                </div>
                                <div className="flex justify-center w-full">
                                    <Link href={'/rewards'}>Rewards</Link>
                                </div>
                                <div className="flex justify-center w-full">
                                    <Link href={'/'}>Carwash</Link>
                                </div>
                                {/* <a href='https://www.vroomdelivery.com/powermarket' target='_blank' rel='noopener noreferrer'> */}
                                <div className="flex justify-center w-full">
                                    <Link href={'/papa-sals'}>Papa Sal’s Dely</Link>
                                </div>
                                {/* </a> */}
                                <div onClick={toggleMenu} className=" absolute right-3 top-3 cursor-pointer">
                                    <IoClose size={20} />
                                </div>
                            </div>
                        }
                    </div>


                    <div className="flex gap-5 max-lg:w-[190px] max-md:w-[130px] ">
                        <Link href={'/'}>
                            <Image src={Logo} alt="logo"></Image>
                        </Link>

                    </div>
                    <div className="flex justify-between font-semibold text-[16px] text-[#444444] w-[40%] max-lg:text-[14px] max-lg:w-[45%] max-md:hidden">
                        <Link href={'/'}>Home</Link>
                        <Link href={'/deals'}>Deals</Link>
                        <Link href={'/rewards'}>Rewards</Link>
                        <Link href={'/'}>Carwash</Link>
                        {/* <a href='https://www.vroomdelivery.com/powermarket' target='_blank' rel='noopener noreferrer'> */}
                        <Link href={'/papa-sals'}>Papa Sal’s Dely</Link>
                        {/* </a> */}
                    </div>
                    <Link href={'/download'} className="w-[175px] h-[35px] bg-[#75BE41] max-lg:w-[150px] rounded-[16px] text-white font-semibold text-[16px] max-lg:text-[14px] max-md:w-[130px] max-md:h-[30px] max-md:text-[12px] cursor-pointer flex justify-center items-center">Download our App</Link>

                </div>
            </div>

        </div>
    )

}
export default Header