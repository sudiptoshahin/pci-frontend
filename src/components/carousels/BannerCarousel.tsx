"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function BannerCarousel() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 4800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const carouseItems = [
        {
            id: 1,
            image: "/images/new_arrivals_bg1.jpg",
            title: "Houseware",
            textColor: '#000000',
            buttonBg: '#ffffff',
            buttonText: "Shop now",
            link: "/houseware"
        },
        {
            id: 2,
            image: "/images/sale_bg3.jpg",
            title: "Hotelware",
            textColor: '#000000',
            buttonBg: '#ffffff',
            buttonText: "Shop now",
            link: "/hotelware"
        },
        {
            id: 3,
            image: "/images/ciramic1.jpg",
            title: "Giftware",
            textColor: '#ffffff',
            buttonBg: '#000000',
            buttonText: "Shop now",
            link: "/giftware"
        }
    ];


    return (
        <div className="w-full">
            <Slider {...settings}>
                {
                    carouseItems.length > 0 && carouseItems.map((item) => (
                        <div key={item.id} className="w-full h-[800px] relative">
                            <div className="absolute z-100 navbar-transparent-fg w-full h-full"></div>
                            <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                            <div className="absolute z-200 right-3 md:right-14 bottom-50 md:bottom-40">
                                <h1 className='text-[70px] md:text-[100px] a_bold' style={{ color: item.textColor }}>{item.title}</h1>
                                <div className="flex justify-end mt-2">
                                    <button className='group cursor-pointer border text-[16px] md:text-[18px] w-[120px] md:w-[148px] h-[48px] 
                            p_semibold hover:bg-[${item.buttonBg}] hover:text-[${item.textColor}] hover:border-none 
                            flex items-center justify-center'
                            style={{ borderColor: item.textColor, color: item.textColor}}>
                                        <p>
                                            <Link href={item.link}>Shop now</Link>
                                        </p>
                                        <Image
                                            src="/images/icons/chevron_forward.svg"
                                            alt="go"
                                            height={24}
                                            width={24}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}