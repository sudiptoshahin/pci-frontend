"use client";

import Image from "next/image";
import Link from "next/link";

export default function PromotionalSection() {
    return (
        <section>
            <div className="mt-[50px] w-full h-auto md:h-[500px] px-5 flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:justify-around">
                {/* new arrivals */}
                <div className="w-[60%] aspect-1 md:w-[30%] h-[280px] md:h-[250px] lg:h-[380px] relative 
                overflow-hidden rounded-md">
                    <div className="absolute top-[20%] md:top-[50%] text-center pr-2 z-200 w-full">
                        <h1 className="text-[#380010] a_bold text-[35px] md:text-[25px] lg:text-[45px] xl:text-[55px]">New Arrivals</h1>
                        <button className="mt-3 p_semibold text-black w-[100px] h-[30px] bg-white">
                            <Link href={'/new-arrivals'}>See more</Link>
                        </button>
                    </div>
                    <div className="absolute z-100 bg-white/[.35] w-full h-full"></div>
                    <Image
                        src="/images/new_arrivals_bg.jpg"
                        alt="new arrival"
                        fill
                        style={{ objectFit: "cover" }}
                        className="w-full h-full"
                        priority
                    />
                </div>

                {/* onsale */}
                <div className="w-[60%] aspect-1 md:w-[30%] h-[280px] md:h-[250px] lg:h-[380px] 
                relative overflow-hidden rounded-md">
                    <div className="absolute top-[20%] md:top-[50%] text-center pr-2 z-200 w-full">
                        <h1 className="text-[#380010] a_bold text-[35px] md:text-[25px] lg:text-[45px] xl:text-[55px]">On sale</h1>
                        <button className="mt-3 p_semibold text-black w-[100px] h-[30px] bg-white">
                            <Link href={'/on-sale'}>See more</Link>
                        </button>
                    </div>
                    <div className="absolute z-100 bg-white/[.35] w-full h-full"></div>
                    <Image
                        src="/images/sale_bg.jpg"
                        alt="new arrival"
                        fill
                        style={{ objectFit: "cover" }}
                        className="w-full h-full"
                        priority
                    />
                </div>

                <div className="w-[60%] aspect-1 md:w-[30%] h-[280px] md:h-[250px] lg:h-[380px] relative overflow-hidden rounded-md">
                    <div className="absolute top-[20%] md:top-[50%] text-center pr-2 z-200 w-full">
                        <h1 className="text-[#380010] a_bold text-[35px] md:text-[25px] lg:text-[45px] xl:text-[55px]">Gifts</h1>
                        <button className="mt-3 p_semibold text-black w-[100px] h-[30px] bg-white">
                            <Link href={'/gifts'}>See more</Link>
                        </button>
                    </div>
                    <div className="absolute z-100 bg-white/[.35] w-full h-full"></div>
                    <Image
                        src="/images/gift.jpg"
                        alt="new arrival"
                        fill
                        style={{ objectFit: "cover" }}
                        className="w-full h-full"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}