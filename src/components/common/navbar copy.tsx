"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// icons
import iconMob from "../../../public/images/icons/mobile.svg";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);

    function handleShowMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <section className="w-full h-[100px] md:h-[100px] bg-white/[.50] drop-shadow-md flex flex-col">
            <div className="bg-[#FFD88E] flex items-center justify-between px-[100px]">
                <div className="h-[46px] flex items-center gap-x-[10px] cursor-pointer" onClick={() => { }}>
                    <h6 className="font-lato font-semibold text-[14px] text-black">Download App</h6>
                    <Image src={iconMob} alt="mob" />
                </div>

                <div className="w-[65%] h-auto">
                    <div className="w-full font-lato text-[16px] text-black flex items-center justify-around">
                        <Link href={"#"}>
                            <div className="">Houseware</div>
                        </Link>
                        <Link href={"#"}>
                            <div>Hotelware</div>
                        </Link>
                        <Link href={"#"}>
                            <div>Giftware</div>
                        </Link>
                        <Link href={"#"}>
                            <div>About</div>
                        </Link>
                        <Link href={"#"}>
                            <div>Contact us</div>
                        </Link>
                        <Link href={"#"}>
                            <div>FAQ</div>
                        </Link>
                        |
                        <Link href={"#"}>
                            <div className="font-bold">Signup</div>
                        </Link>
                        <Link href={"#"}>
                            <div className="font-bold">Login</div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="w-full flex items-center justify-between md:justify-around px-7 md:px-5 mb-5 h-[100px] bg-red-300">
                <div className="md:w-[20%]">
                    <p className="font-poppins font-700 text-xl">PCI Online Shop</p>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex justify-end" onClick={(e) => handleShowMenu(e)}>
                    {
                        isMenuOpen ? (
                            <Image src={'/images/icons/menu_open.svg'} alt="mob-menu" width={24} height={24} />
                        ) : (
                            <Image src={'/images/icons/menu.svg'} alt="mob-menu" width={24} height={24} />
                        )
                    }
                </div>

                <div className="hidden md:w-[60%] md:flex items-center justify-around text-[#380010] w-full mob-screen-fw md:w-[85%] lg:w-[70%] xl:w-[60%] 
                p_medium text-[16px] lg:text-[18px]">
                    <div className="px-1 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="px-1 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/houseware">Houseware</Link>
                    </div>

                    <div className="px-1 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/hotelware">Hotelware</Link>
                    </div>

                    <div className="px-1 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/giftware">Giftware</Link>
                    </div>

                    <div className="px-1 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/contact-us">Contact Us</Link>
                    </div>

                    {/* <div className="px-1.5 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                                <Link href="/giftware">My Account</Link>
                            </div> */}

                </div>
                <div className="hidden md:flex md:w-[20%] items-center justify-end space-x-3">
                    {
                        showSearch && (
                            <div className="border border-px border-[#380010] bg-white rounded-lg 
                    flex items-center justify-between px-2">
                                <input type="text" placeholder="Search..." className="rounded-lg p-2 text-[#380010] focus:outline-none" style={{ width: '100%' }} />
                                <div onClick={() => setShowSearch(!showSearch)}>
                                    <Image src={'/images/icons/search.svg'} alt="search" width={24} height={24} className="" />
                                </div>
                            </div>
                        )
                    }
                    {
                        !showSearch && (
                            <div className="w-[24px] h-[24px]" onClick={() => setShowSearch(!showSearch)}>
                                <Image src={'/images/icons/search.svg'} alt="search" width={24} height={24} className="" />
                            </div>
                        )
                    }
                    <div className="w-[30px] h-[30px]">
                        <Image src={'/images/icons/shopping_cart.svg'} alt="shopping_cart" width={30} height={30} />
                    </div>
                    <div className="w-[30px] h-[30px]">
                        <Image src={'/images/icons/account.svg'} alt="shopping_cart" width={30} height={30} />
                    </div>
                </div>
            </div>

            {/* text-[#380010] */}

        </section>
    );
}
