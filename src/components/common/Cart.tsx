import CartItem from "./CartItem";

interface CartProps {
    isOpen: boolean;
}

export default function Cart({ isOpen }: CartProps) {


    return (
        <div className={`block semi_lg:hidden fixed right-0 top-[44px] w-[80vw] 2sm:w-[50vw] h-[calc(100vh-44px)] bg-white drop-shadow-md transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <div className="w-full h-full">
                <div className="w-full h-full overflow-y-auto">

                    {/* cart items */}
                    <div className="">
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                </div>

                <div className="w-full absolute bottom-0 my-2">
                    <div className="px-5 py-5 flex items-center justify-between font-poppins text-lg font-bold">
                        <p>Total</p>
                        <p>TK 6,000</p>
                    </div>

                    <div className="w-full h-[50px] text-center">
                        <button className="w-[calc(100%-25px)] h-full font-poppins font-bold bg-black text-white text-xl cursor-pointer border border-px border-black hover:text-black hover:bg-white">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}