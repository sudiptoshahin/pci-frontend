"use client";

import Image from "next/image";
import { IProductItem } from "@/types/products";

export default function ProductItem({ title, price, image }: IProductItem) {

    return (
        <section>
            <div className="flex flex-col items-center justify-start aspect-square w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-sm hover:bg-gray-300/[.4]">
                <div className="relative aspect-square w-[150px] h-[150px] md:w-[250px] md:h-[250px]">
                    <Image
                        src={image}
                        alt="asd"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-sm"
                    />
                </div>
                <div className="text-center a_regular mt-0.5 md:mt-1.5">
                    <h1 className="a_regular text-[14px] md:text-[18px]">{title}</h1>
                    <p className="a_bold text-[#380010]">TK {Number(price).toLocaleString() || "N/A"}</p>
                </div>
            </div>
        </section>
    );
}