"use client";

import Image from "next/image";
import ProductItem from "./productItem";
import { IProductItem } from "@/types/products";


export default function ProductGrid({title, banner, items}: {title: string, banner: string, items: Array<IProductItem>}) {
    return (
        
        <section className="mt-[50px] mx-5">
            {/* 
            * handle when we have 1 / 2 product
            * handle responsiveness
            */}
            <div className="w-full min-h-[700px] flex flex-wrap items-center justify-center space-x-5 space-y-2">
                <div className="relative aspect-square w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-blue-400">
                    <div className="absolute bottom-0 z-200 pr-3 pt-5 w-full h-[100px] bg-[#380010]/[0.38]">
                        <h1 className="text-white text-right a_light text-[30px]">{title}</h1>
                        <p className="text-white text-right a_light text-[12px]">Lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className="absolute z-100 navbar-transparent-fg w-full h-full"></div>
                    <Image
                        src={banner}
                        alt={title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-sm"
                    />
                </div>
                {
                    items.map((item, index) => (
                        <ProductItem key={index} title={item.title} price={item.price} image={item.image} />
                    ))
                }
            </div>
            <div className="w-full flex justify-center mt-6">
                <button className="px-6 py-2 bg-[#380010] text-white hover:bg-white hover:text-[#380010] rounded shadow transition-colors duration-200 a_light text-[16px]">
                    See More
                </button>
            </div>
        </section>
    );
}