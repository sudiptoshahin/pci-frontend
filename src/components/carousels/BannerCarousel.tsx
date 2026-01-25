"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BannerCarousel() {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 4800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        zIndex: 10,
    };

    /**
     * title char-length: 10
     * message char-length: 20
     */
    const carouseItems = [
        {
            id: 1,
            image: "/images/carousel/carousel_img1.jpg",
            title: "Soup plates",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, asperiores!",
            bgColor: "#ffffff",
            textColor: '#000000',
        },
        {
            id: 2,
            image: "/images/carousel/carousel_img2.jpg",
            title: "Dinner sets",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus consectetur cupiditate vitae? Pariatur necessitatibus mollitia facilis ipsa fugit quo expedita amet, nulla voluptate doloribus cum sunt voluptatum velit eius?",
            bgColor: "#ffffff",
            textColor: '#000000'
        },
        {
            id: 3,
            image: "/images/carousel/carousel_img3.jpg",
            title: "Giftboxes",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, asperiores!",
            bgColor: "#f8aaaa",
            textColor: '#000000',
        },
        {
            id: 4,
            image: "/images/carousel/carousel_img4.jpg",
            title: "Giftware",
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit skjkd wer abrt alkss.",
            bgColor: "#000000",
            textColor: '#ffffff',
        },
        // {
        //     id: 5,
        //     image: "/images/carousel/carousel_img5.jpg",
        //     title: "Giftware",
        //     textColor: '#ffffff',
        //     buttonBg: '#000000',
        //     buttonText: "Shop now",
        //     link: "/giftware"
        // },
        // {
        //     id: 6,
        //     image: "/images/carousel/carousel_img6.jpg",
        //     title: "Giftware",
        //     textColor: '#ffffff',
        //     buttonBg: '#000000',
        //     buttonText: "Shop now",
        //     link: "/giftware"
        // }
    ];


    return (
        <div className="w-full">
            <Slider {...settings}>
                {
                    carouseItems.length > 0 && carouseItems.map((item) => (
                        <div key={item.id} className="w-full h-[75vh] 2xl:h-[80vh] relative">
                            <div className="navbar-transparent-fg w-full h-full"></div>
                            <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover", aspectRatio: "1.37" }} />
                            <div className="text-right absolute z-10 right-3 md:right-10 bottom-10 
                            md:bottom-16 p-3 max-w-[75%] md:max-w-[65%] xl:max-w-[39.0625%] carousel-text-bg">
                                <h1 className='text-[clamp(40px,6vw,75px)] md:text-[clamp(80px,6vw,100px)] font-poppins font-medium' style={{ color: item.textColor, textShadow: '0 8px 20px rgba(0,0,0,0.45)' }}>{item.title}</h1>
                                <p className="font-poppins font-xl" style={{ color: item.textColor }}>{item.message}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
}