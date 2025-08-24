import Link from "next/link";

export default function NotFound() {
    return (
        <div
            className="min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/images/comming_soon_bg.jpg')" }}
        >
            {/* Optionally, add a message or overlay here */}
            <h1 className="text-center mx-2 a_extrabold text-[80px] text-[#380010] border-b-8 border-white inline-block">
                Comming Soon!
            </h1>
            <p className="mt-2 a_regular">This site is under construction</p>
            <button className="cursor-pointer mt-3 bg-[#380010] text-white w-[100px] h-[32px] p_medium rounded-lg">
                <Link href="/">Back</Link>
            </button>
        </div>
    );
}