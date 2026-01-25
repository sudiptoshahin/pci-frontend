"use client";

import Image from "next/image";
import Link from "next/link";
import ArrowRightIcon from "../../../public/images/icons/arrow_right.svg";

export default function PromotionalSection() {
    return (
        <section>
            <div className="w-full h-auto mt-5">
                <div className="px-4 semi_lg:px-7 grid grid-cols-2 xl:grid-cols-4 gap-4 semi_lg:gap-7">
                    {/* card-1 */}
                    <div className="bg-red-200 h-auto aspect-[0.658] relative flex items-center justify-center">
                        <div className="absolute text-center bg-white/[0.4] aspect-square h-[130px] xs:h-[160px] 2sm:h-[230px] semi_lg:h-[350px] xl:h-[250px] 4xl:h-[350px] 
                         group border border-px border-black">
                            <div className="w-full h-full flex flex-col items-center justify-around">
                                <div className="flex flex-col gap-y-1 2sm:gap-y-5 cursor-default">
                                    <h1 className="text-lg 2sm:text-2xl semi_lg:text-4xl xl:text-2xl font-poppins font-semibold">New Arrivals</h1>
                                    {/* max- 50 character */}
                                    <p className="text-sm 2sm:text-md semi_lg:text-lg xl:text-md font-lato">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                <div className="cursor-pointer bg-black w-[30px] h-[30px] 2sm:w-[50px] 2sm:h-[50px] flex items-center justify-center 
                rounded-full -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 
                transition-all duration-500 ease-in-out"
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) => () => { }}>
                                    <Image src={ArrowRightIcon} alt="arrow-icon" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <Image src={"/images/promotional/prom2.jpg"} alt="prom"
                                width={658} height={1000}
                                style={{ objectFit: "cover", aspectRatio: "0.658" }} />
                        </div>
                    </div>

                    {/* card-2 */}
                    <div className="h-auto aspect-[0.658] relative flex items-center justify-center">
                        <div className="absolute text-center bg-white/[0.4] aspect-square h-[130px] xs:h-[160px] 2sm:h-[230px] semi_lg:h-[350px] xl:h-[250px] 4xl:h-[350px] group border border-px border-black">
                            <div className="w-full h-full flex flex-col items-center justify-around">
                                <div className="flex flex-col gap-y-1 2sm:gap-y-5 cursor-default">
                                    <h1 className="text-lg 2sm:text-2xl semi_lg:text-4xl xl:text-2xl font-poppins font-semibold">On Sale</h1>
                                    {/* max- 50 character */}
                                    <p className="text-sm 2sm:text-md semi_lg:text-lg xl:text-md font-lato">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                <div className="cursor-pointer bg-black w-[30px] h-[30px] 2sm:w-[50px] 2sm:h-[50px] flex items-center justify-center 
                rounded-full -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 
                transition-all duration-500 ease-in-out"
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) => () => { }}>
                                    <Image src={ArrowRightIcon} alt="arrow-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <Image src={"/images/promotional/prom5.png"} alt="prom"
                                width={658} height={1000}
                                style={{ objectFit: "cover", aspectRatio: "0.658" }} />
                        </div>
                    </div>

                    {/* card-3 */}
                    <div className="h-auto aspect-[0.658] relative flex items-center justify-center">
                        <div className="absolute text-center bg-white/[0.4] aspect-square h-[130px] xs:h-[160px] 2sm:h-[230px] semi_lg:h-[350px] xl:h-[250px] 4xl:h-[350px] group border border-px border-black">
                            <div className="w-full h-full flex flex-col items-center justify-around">
                                <div className="flex flex-col gap-y-1 2sm:gap-y-5 cursor-default">
                                    <h1 className="text-lg 2sm:text-2xl semi_lg:text-4xl xl:text-2xl font-poppins font-semibold">Gift Boxes</h1>
                                    {/* max- 50 character */}
                                    <p className="text-sm 2sm:text-md semi_lg:text-lg xl:text-md font-lato">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                <div className="cursor-pointer bg-black w-[30px] h-[30px] 2sm:w-[50px] 2sm:h-[50px] flex items-center justify-center 
                rounded-full -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 
                transition-all duration-500 ease-in-out"
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) => () => { }}>
                                    <Image src={ArrowRightIcon} alt="arrow-icon" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <Image src={"/images/promotional/prom3.png"} alt="prom"
                                width={658} height={1000}
                                style={{ objectFit: "cover", aspectRatio: "0.658" }} />
                        </div>
                    </div>

                    {/* card-4 */}
                    <div className="h-auto aspect-[0.658] relative flex items-center justify-center">
                        <div className="absolute text-center bg-white/[0.4] aspect-square h-[130px] xs:h-[160px] 2sm:h-[230px] semi_lg:h-[350px] xl:h-[250px] 4xl:h-[350px] group border border-px border-black">
                            <div className="w-full h-full flex flex-col items-center justify-around">
                                <div className="flex flex-col gap-y-1 2sm:gap-y-5 cursor-default">
                                    <h1 className="text-lg 2sm:text-2xl semi_lg:text-4xl xl:text-2xl font-poppins font-semibold">Trendings</h1>
                                    {/* max- 50 character */}
                                    <p className="text-sm 2sm:text-md semi_lg:text-lg xl:text-md font-lato">Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                                <div className="cursor-pointer bg-black w-[30px] h-[30px] 2sm:w-[50px] 2sm:h-[50px] flex items-center justify-center 
                rounded-full -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 
                transition-all duration-500 ease-in-out"
                                    onClick={(e: React.MouseEvent<HTMLDivElement>) => () => { }}>
                                    <Image src={ArrowRightIcon} alt="arrow-icon" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-full">
                            <Image src={"/images/promotional/prom4.png"} alt="prom"
                                width={658} height={1000}
                                style={{ objectFit: "cover", aspectRatio: "0.658" }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}