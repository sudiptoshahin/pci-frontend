"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    function handleShowMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <section className="w-full h-[140px] md:h-[180px] bg-white drop-shadow-md flex flex-col">

            <div className="w-full flex items-center justify-between md:justify-around px-10 mb-5 h-[100px]">
                <div className="w-[50%]">
                    <Image priority={false} width={200} height={200} src={`/images/logo5.webp`} alt="logo" />
                </div>

                {/* Mobile menu button */}
                <div className="w-[50%] md:hidden flex justify-end" onClick={(e) => handleShowMenu(e)}>
                    {
                        isMenuOpen ? (
                            <Image src={'/images/icons/menu_open.svg'} alt="mob-menu" width={24} height={24} />
                        ) : (
                            <Image src={'/images/icons/menu.svg'} alt="mob-menu" width={24} height={24} />
                        )
                    }
                </div>

                {/* From tab it will be visible */}
                <div className="w-[80%] md:w-[50%] hidden md:flex items-center justify-between space-x-5">
                    <div className="w-[calc(100%-30px)] border border-px border-[#380010] bg-white rounded-lg 
                    flex items-center justify-between px-2">
                        <input type="text" placeholder="Search..." className="rounded-lg p-2 text-[#380010] focus:outline-none" style={{ width: '100%' }} />
                        <div>
                            <Image src={'/images/icons/search.svg'} alt="search" width={24} height={24} className="" />
                        </div>
                    </div>
                    <div className="">
                        <Image src={'/images/icons/shopping_cart.svg'} alt="shopping_cart" width={30} height={30} />
                    </div>
                </div>
            </div>

            {/* text-[#380010] */}
            <div className="w-full hidden md:flex justify-end px-10">
                <div className="flex items-center justify-between text-[#380010] w-full mob-screen-fw md:w-[85%] lg:w-[70%] xl:w-[60%] 
                p_medium text-[16px] lg:text-[18px]">
                    <div className="px-1.5 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/">Home</Link>
                    </div>
                    <div className="px-1.5 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/houseware">Houseware</Link>
                    </div>

                    <div className="px-1.5 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/hotelware">Hotelware</Link>
                    </div>

                    <div className="px-1.5 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/giftware">Giftware</Link>
                    </div>

                    <div className="px-1.5 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/contact-us">Contact Us</Link>
                    </div>

                    <div className="px-1.5 cursor-pointer text-shadow-md hover:text-white hover:bg-[#380010]/[0.70] 
                    hover:a_bold min-w-[100px] h-[50px] flex items-center justify-center hover:skew-x-2 transition-all duration-200">
                        <Link href="/giftware">My Account</Link>
                    </div>

                </div>
            </div>
        </section>
    );
}