
import BannerCarousel from "@/components/carousels/BannerCarousel";
import Navbar from "@/components/common/navbar";


export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <div className="min-h-[85vh] bg-white">{children}</div>
        </section>
    );
}