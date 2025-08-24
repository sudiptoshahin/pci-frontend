"use client"

import Image from "next/image";

export default function PromotionalVideo() {

    return (
        <section className="w-full h-[400px] mt-[50px]">
            <div className="w-full h-full relative aspect-square">
                <div className="absolute z-200 flex items-center justify-center w-full h-full cursor-pointer">
                    <Image
                        src={"/images/icons/play.svg"}
                        alt="play"
                        width={80}
                        height={80}
                        className="rounded-sm"
                    />
                </div>
                <div className="absolute z-100 transparent-fg1 w-full h-full"></div>
                <Image
                    src={"/images/new_arrivals_bg1.jpg"}
                    alt="asd"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-sm"
                />
            </div>
        </section>
    );
}