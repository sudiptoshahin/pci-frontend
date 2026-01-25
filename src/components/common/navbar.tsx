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
import CartWhiteIcon from "../../../public/images/icons/cart_white.svg";
import NotificationWhiteIcon from "../../../public/images/icons/notification_white.svg";
import AccountWhiteIcon from "../../../public/images/icons/account_white.svg";
import NotificationIcon from "../../../public/images/icons/notification.svg";
import AccountIcon from "../../../public/images/icons/account.svg";
import MobMenuIcon from "../../../public/images/icons/menu.svg";
// import MobOpenMenuIcon from "../../../public/images/icons/menu_open.svg";
import OpenMobMenuIcon from "../../../public/images/icons/menu_open.svg";
import Drawer from "./Drawer";
import Cart from "./Cart";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [showSearch, setShowSearch] = useState<boolean>(false);

    const [selectedCategories, setSelectedCategories] = useState<Array<ISelectedCategory>>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [openMobMenu, setOpenMobMenu] = useState<boolean>(true);
    const [openCart, setOpenCart] = useState<boolean>(false);


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

    function onHandleDrawer() {
        setOpenMobMenu(!openMobMenu);
    }

    function onHandleCart() {
        setOpenCart(!openCart);
    }


    return (
        <section className="fixed z-[1000] top-0 w-full h-[104px] semi_lg:h-[130px] xl:h-[150px] backdrop-blur-[40px] drop-shadow-md flex flex-col">
            {/* Top Bar */}
            <div className="h-[44px] semi_lg:h-[50px] bg-[#FFD88E]/[.75] backdrop-blur-[70px] semi_lg:px-7">

                {/** screen start for small screen xxs:375-md:768 **/}
                <div className="w-full h-full semi_lg:hidden px-5 flex items-center justify-between">
                    <div className="h-[30px] w-[30px] flex items-center justify-center"
                        onClick={onHandleDrawer}>
                        {
                            openMobMenu ?
                                (
                                    <Image src={OpenMobMenuIcon} alt="menu" style={{ objectFit: "cover" }} />
                                )
                                : (<Image src={MobMenuIcon} alt="menu" style={{ objectFit: "cover" }} />)
                        }
                    </div>

                    <div className="w-[calc(100%-60px)] text-center">
                        <p className="font-poppins font-700 text-xl">PCI Online Shop</p>
                    </div>

                    <div className="h-[30px] w-[30px] flex items-center justify-center"
                        onClick={onHandleCart}>
                        <div className="w-[50px] h-[50px] flex items-center justify-center relative">
                            <div className="absolute top-[25px] right-[-3px] bg-red-500 min-w-[20px] max-w-[28px] min-w-[20px] max-h-[28px] rounded-full text-white flex items-center justify-center text-[12px] font-poppins font-medium">{"2"}</div>
                            <Link href={"#"} className="w-auto h-auto">
                                <Image src={CartWhiteIcon} alt="cart" width={30} height={30} />
                            </Link>
                        </div>
                    </div>

                </div>

                {/** screen starts from lg:1024 **/}
                <div className="hidden w-full h-full semi_lg:flex items-center justify-between ">
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
            </div>

            <div className="w-full h-[60px] semi_lg:h-[80px] xl:h-[100px] lg:px-7 bg-black/[.60]">
                <div className="w-full h-full flex items-center justify-center semi_lg:justify-between 
                md:justify-around ">
                    <div className="hidden semi_lg:block w-[20%]">
                        <p className="font-poppins font-semibold text-2xl text-white">PCI Online Shop</p>
                    </div>

                    {/* search bar */}
                    <div className="w-[calc(100%-80px)] semi_lg:w-[60%] max-w-[1200px] h-[35px] 2xl:h-[40px] bg-white flex gap-x-2 
                    rounded-md outline outline-1 outline-offset-1 outline-[#636869]">
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
                                <Image src={SearchIcon} alt="search" width={30} height={30} className="h-[25px] 2xl:h-[40px] mx-3" />
                                <input className="w-full h-[calc(40px-3px)] outline-none indent-2" type="text" onChange={handleSearchText} value={searchText} placeholder="Search here....." />
                            </div>
                        </div>

                    </div>

                    {/* buttons */}
                    <div className="w-[20%] hidden semi_lg:flex items-center justify-end space-x-3">
                        <div className="w-[50px] h-[50px] flex items-center justify-center relative">
                            <div className="absolute top-[25px] right-[2px] bg-red-500 min-w-[20px] max-w-[28px] min-w-[20px] max-h-[28px] rounded-full text-white flex items-center justify-center text-[12px] font-poppins font-medium">{"2"}</div>
                            <Link href={"#"} className="w-auto h-auto">
                                <Image src={CartWhiteIcon} alt="cart" width={30} height={30} />
                            </Link>
                        </div>
                        <div className="w-[50px] h-[50px] flex items-center justify-center relative">
                            <div className="absolute top-[15px] right-[10px] bg-red-500 w-[10px] h-[10px] rounded-full"></div>
                            <Link href={"#"} className="w-auto h-auto">
                                <Image src={NotificationWhiteIcon} alt="bell" width={30} height={30} />
                            </Link>
                        </div>
                        <div className="w-[50px] h-[50px] flex items-center justify-center">
                            <Link href={"#"} className="w-auto h-auto">
                                <Image src={AccountWhiteIcon} alt="account" width={30} height={30} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* mob left sidebar */}
            <Drawer isOpen={openMobMenu} />
            <Cart isOpen={openCart} />
        </section>
    );
}
