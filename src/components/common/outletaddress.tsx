"use client";

import Image from "next/image";

export default function OutletAddress() {

    return (
        <section>
            <div
                className="w-full mt-[50px] flex flex-col md:flex-row items-center bg-white  border border-px"
                // style={{
                //     backgroundImage: 'url("/images/outlet_bg.jpg")',
                //     backgroundSize: "cover",
                //     backgroundPosition: "center",
                // }}
            >
                {/* Left Image */}
                <div className="relative aspect-square w-full md:w-[50%] h-[300px] md:h-auto">
                    <Image
                        src={"/images/outlet_pic2.jpeg"}
                        alt="asd"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-sm"
                    />
                </div>

                {/* Right Content */}
                <div className="relative w-full md:w-[50%] flex items-center justify-center">
                    <div className="z-20 w-full h-full flex flex-col items-center justify-start px-4 py-6">
                        <div>
                            <h1 className="a_bold text-[20px] md:text-[30px] text-[#7a0025] md:py-2.5 text-center">
                                Our Outlets
                            </h1>

                            {/* Dhaka Office */}
                            <div className="w-full max-w-xl text-center">
                                <h1 className="a_bold text-[18px] md:text-[22px] mb-1.5 text-[#7a0025]">
                                    Corporate Sales Office, Dhaka
                                </h1>
                                <p className="a_regular text-[14px] md:text-[16px] break-words text-[#7a0025]">
                                    Navana Zohura Square, Shop No. 4, 2nd floor, 28 Kazi Nazrul Islam Avenue Banglamotor, Dhaka 1000
                                </p>
                                <p className="p_medium text-[10px] md:text-[12px]">
                                    +(880-2) 55168133<br />+8801711977941<br />+(880-2) 55168131
                                </p>
                            </div>

                            {/* Chittagong Office */}
                            <div className="w-full max-w-xl mt-2.5 text-center">
                                <h1 className="a_bold text-[18px] md:text-[22px] mb-1.5 text-[#7a0025]">
                                    Corporate Sales Office, Chittagong
                                </h1>
                                <p className="a_regular text-[14px] md:text-[16px] break-words text-[#7a0025]">
                                    B-25-26 Golam Rasul Market [1st floor], Reazuddin Bazar, Chittagong
                                </p>
                                <p className="p_medium text-[10px] md:text-[12px]">
                                    031635129<br />+8801859812956
                                </p>
                            </div>
                        </div>

                        {/* Factory */}
                        <div>
                            <h1 className="mt-3 a_bold text-[20px] md:text-[30px] text-[#7a0025] md:py-2 text-center">
                                Factory
                            </h1>
                            <div className="w-full max-w-xl text-center">
                                <p className="a_regular text-[14px] md:text-[16px] break-words text-[#7a0025]">
                                    80-81, Tongi Industrial area, Tongi, Gazipur 1710, Bangladesh
                                </p>
                                <p className="p_medium text-[10px] md:text-[12px]">
                                    +(880-2) 224411264<br />+(880-2) 224414245<br />+(880-2) 224412401
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}