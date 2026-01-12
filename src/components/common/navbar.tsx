"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// icons
import iconMob from "../../../public/images/icons/mobile.svg";
import MultiCheckedSelectBox from "./MultiSelectCheckbox";
import { ISelectedCategory } from "@/types/common";
import SearchIcon from "../../../public/images/icons/magnify.svg";
import CartIcon from "../../../public/images/icons/cart.svg";
import NotificationIcon from "../../../public/images/icons/notification.svg";
import AccountIcon from "../../../public/images/icons/account.svg";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);

    const [selectedCategories, setSelectedCategories] = useState<Array<ISelectedCategory>>([]);
    const [searchText, setSearchText] = useState<string>("");


    const demoCategories = [
        {
            id: '1',
            label: 'Test A',
            value: 'TEST_A'
        },
        {
            id: '2',
            label: 'Test B',
            value: 'TEST_B'
        },
        {
            id: '3',
            label: 'Test C',
            value: 'TEST_C'
        },
        {
            id: '4',
            label: 'Test D',
            value: 'TEST_D'
        },
        {
            id: '5',
            label: 'Test E',
            value: 'TEST_E'
        }
    ];

    function handleShowMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
    }

    function handleSearchText(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(e.target.value)
    }

    return (
        <section className="fixed z-[1000] top-0 w-full h-[100px] lg:h-[150px] backdrop-blur-[40px] bg-white/[.60] drop-shadow-md flex flex-col">
            {/* Top Bar */}
            <div className="lg:h-[50px] bg-[#FFD88E]/[.80] flex items-center justify-between lg:px-7">
                <div className="h-full w-[35%] flex items-center gap-x-[10px] cursor-pointer" onClick={() => { }}>
                    <h6 className="font-lato font-semibold text-[14px] text-black">Download App</h6>
                    <Image src={iconMob} alt="mob" />
                </div>

                <div className="max-w-[1000px] w-[65%] h-full">
                    <div className="w-full h-full font-lato text-[16px] text-black flex items-center justify-around">
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

            <div className="w-full lg:h-[100px] flex items-center justify-between md:justify-around lg:px-7">
                <div className="w-[20%]">
                    <p className="font-poppins font-700 text-xl">PCI Online Shop</p>
                </div>

                {/* search bar */}
                <div className="w-[60%] max-w-[1200px] h-[40px] bg-white flex gap-x-2 rounded-md outline outline-1 outline-offset-1 outline-[#636869]">
                    <div className="w-[25%]">
                        <MultiCheckedSelectBox
                            // context={'payment'}
                            placeholderText={'All Category'}
                            boxClasses={'w-full h-[38px] text-black'}
                            dropdownCardClasses={'mt-3 bg-white rounded-sm border border-px border-black cursor-default'}
                            checkedColor={{
                                background: '#000000',
                                borderColor: '#000000'
                            }}
                            defaultSelects={[]}
                            options={demoCategories}
                            selectedOptions={selectedCategories}
                            setSelectedOptions={setSelectedCategories}
                        />
                    </div>

                    <div className="w-[75%] h-full">
                        <div className="w-full flex items-center gap-x-2">
                            <p className="ml-[0.5px] mr-2"> | </p>
                            <Image src={SearchIcon} alt="search" className="h-[40px] mx-3" />
                            <input className="w-full h-[40px] outline-none indent-2" type="text" onChange={handleSearchText} value={searchText} placeholder="Search here....." />
                        </div>
                    </div>

                </div>

                {/* buttons */}
                <div className="w-[20%] flex items-center justify-end space-x-3">
                    <div className="w-[50px] h-[50px] flex items-center justify-center">
                        <Link href={"#"} className="w-auto h-auto">
                            <Image src={CartIcon} alt="cart" />
                        </Link>
                    </div>
                    <div className="w-[50px] h-[50px] flex items-center justify-center">
                        <Link href={"#"} className="w-auto h-auto">
                            <Image src={NotificationIcon} alt="bell" />
                        </Link>
                    </div>
                    <div className="w-[50px] h-[50px] flex items-center justify-center">
                        <Link href={"#"} className="w-auto h-auto">
                            <Image src={AccountIcon} alt="account" />
                        </Link>
                    </div>
                </div>

            </div>

            {/* text-[#380010] */}

        </section>
    );
}
