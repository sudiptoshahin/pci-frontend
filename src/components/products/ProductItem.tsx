"use client";

import Image from "next/image";
import { IProductItem } from "@/types/products";

export default function ProductItem({ title, discountedPrice, price, image, review, reviewers }: IProductItem) {

    function getReviewStars(review: number) {
        const beforeDecimal = Math.floor(review);
        const afterDecimal = Math.round((review - beforeDecimal) * 10);

        const stars = [];

        // Full stars
        for (let i = 0; i < beforeDecimal; i++) {
            stars.push(<Image key={i + "be"} src={"/images/icons/star.svg"} className="w-[15px] h-[15px] 2sm:w-[20px] 2sm:h-[20px] 2xl:w-[24px] 2xl:h-[24px]" alt="star" width={24} height={24} />);
        }

        // Half star
        if (Boolean(afterDecimal)) {
            stars.push(<Image key={"hf"} src={"/images/icons/star_half.svg"} alt="star" className="w-[15px] h-[15px] 2sm:w-[20px] 2sm:h-[20px] 2xl:w-[24px] 2xl:h-[24px]" width={24} height={24} />);
        }

        // Empty stars
        const remainingStars = 5 - beforeDecimal - (afterDecimal ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Image key={0 + i + 'af'} src={"/images/icons/star.svg"} alt="star" className="w-[15px] h-[15px] 2sm:w-[20px] 2sm:h-[20px] 2xl:w-[24px] 2xl:h-[24px]" width={24} height={24} />);
        }

        return <div className="flex gap-1">{stars}</div>;
    }

    return (
        <div className="hover:bg-gray-200 aspect-square w-full flex items-center justify-center">
            <div className="w-[calc(100%-15px)] h-[calc(100%-15px)] semi_lg:h-[calc(100%-30px)] semi_lg:w-[calc(100%-30px)]">
                <div className="w-full h-[70%] relative">
                    <div className="absolute top-2 left-2">
                        <Image src={"/images/icons/favorite_fil.svg"} alt="fav" height={30} width={30} />
                    </div>
                    <Image src={image} width={857} height={600} alt="image" style={{ objectFit: "cover", aspectRatio: '1.42' }} />
                    <div className="absolute top-2 right-2 bg-black/[.9] p-1.5 rounded-full">
                        <Image src={"/images/icons/add_to_cart.svg"} alt="add_to_cart" height={20} width={20} />
                    </div>
                </div>

                <div className="w-full h-[30%] pt-0.5 2sm:pt-2">
                    {/* title */}
                    <h1 className="font-poppins font-medium text-[clamp(0.75rem,1.8vw,1.125rem)] truncate leading-tight">
                        {title}
                    </h1>

                    {/* review section */}
                    <div className="text-[clamp(0.7rem,1.5vw,0.875rem)] font-lato flex items-center gap-x-2">
                        <p>{review}</p>
                        <div>{getReviewStars(review)}</div>
                        <div>({reviewers})</div>
                    </div>

                    {/* price section */}
                    <div className="font-poppins text-[clamp(0.875rem,2.2vw,1.25rem)] flex items-center gap-x-3 2sm:py-2 xl:py-1 2xl:py-2">
                        <p className="font-semibold">TK {discountedPrice}</p>
                        <p className="line-through text-gray-500">TK {price}</p>
                    </div>
                </div>

            </div>
        </div>


    );
}