import Link from "next/link";
import Image from "next/image";

interface DrawerProps {
    isOpen: boolean;
}

export default function Drawer({ isOpen }: DrawerProps) {


    return (
        <div className={`block semi_lg:hidden fixed left-0 top-[44px] w-[80vw] 2sm:w-[50vw] h-[calc(100vh-44px)] bg-white drop-shadow-md transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
            <div className="w-[calc(100%-20px)] h-[calc(100%-20px)] mt-7">
                <div className="flex items-center gap-x-5 py-3 px-5">
                    <Image src={"/images/icons/account.svg"} alt="account" className="w-[40px] h-[40px]" width={30} height={30} />
                    <p className="font-lato text-xl text-black">Login / Register</p>
                </div>

                <div className="py-3 px-7">
                    <Link href={"#"}>
                        <p className="font-lato text-lg text-black">My Profile</p>
                    </Link>
                </div>

                <div className="py-3 px-7">
                    <Link href={"#"}>
                        <p className="font-lato text-lg text-black">My Cart</p>
                    </Link>
                </div>

                <div className="py-3 px-7">
                    <Link href={"#"}>
                        <p className="font-lato text-lg text-black">My Orders</p>
                    </Link>
                </div>

                <div className="py-3 px-7">
                    <Link href={"#"}>
                        <p className="font-lato text-lg text-black">My Favorites</p>
                    </Link>
                </div>

                <div className="border-b border-b-px border-b-gray-500 my-2 mx-2"></div>

                <div className="py-3 px-7">
                    <Link href={"#"}>
                        <p className="font-lato text-lg text-black">Housewear</p>
                    </Link>
                </div>

                <div className="py-3 px-7">
                    <Link href={"#"}>
                        <p className="font-lato text-lg text-black">Hotewear</p>
                    </Link>
                </div>

                <div className="py-3 px-7">
                    <Link href={"#"}>
                        <p className="font-lato text-lg text-black">Giftwear</p>
                    </Link>
                </div>

                <div className="border-b border-b-px border-b-gray-500 my-2 mx-2"></div>

                <div className="py-3 px-7">
                    <Link href={"#"}>
                        <p className="font-lato text-lg text-black">About</p>
                    </Link>
                </div>

                <div className="py-3 px-7">
                    <Link href={"#"}>
                        <p className="font-lato text-lg text-black">Contact Us</p>
                    </Link>
                </div>

                <div className="py-3 px-7">
                    <Link href={"#"}>
                        <p className="font-lato text-lg text-black">FAQ</p>
                    </Link>
                </div>

            </div>
        </div>
    );
}