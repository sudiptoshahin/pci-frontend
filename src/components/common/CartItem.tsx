import Image from "next/image";

export default function CartItem() {


    return (
    <div className="w-full p-2 my-2 border-b border-gray-200">
        <div className="flex gap-3">
            {/* Image */}
            <div className="w-[100px] xxs:w-[110px] xs:w-[120px] 2sm:w-[130px] flex-shrink-0">
                <div className="aspect-square w-full bg-gray-100 rounded overflow-hidden">
                    <Image
                        src={"/images/houseware/houseware3.webp"}
                        width={130}
                        height={130}
                        alt="product"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between py-1">
                {/* Product Info */}
                <div>
                    <h3 className="font-poppins font-medium text-[clamp(0.75rem,2vw,0.875rem)] line-clamp-2 leading-tight mb-1">
                        Premium Quality Product Title Here
                    </h3>
                    <p className="font-lato text-[clamp(0.65rem,1.5vw,0.75rem)] text-gray-600">
                        Type: <span className="text-black">Houseware</span>
                    </p>
                    <p className="font-lato text-[clamp(0.65rem,1.5vw,0.75rem)] text-gray-600">
                        Category: <span className="text-black">Kitchenware</span>
                    </p>
                    <p className="font-poppins font-semibold text-[clamp(0.75rem,2vw,0.875rem)] mt-1">
                        TK 2,000
                    </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                    <button className="w-6 h-6 xxs:w-7 xxs:h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                        <span className="text-lg leading-none">-</span>
                    </button>
                    <span className="font-lato text-[clamp(0.75rem,2vw,0.875rem)] min-w-[30px] text-center">
                        3
                    </span>
                    <button className="w-6 h-6 xxs:w-7 xxs:h-7 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100">
                        <span className="text-lg leading-none">+</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
}