"use client"

import PromotionalSection from "@/components/common/promotionalsection";
import OutletAddress from "@/components/common/outletaddress";
import PromotionalVideo from "@/components/common/promotionalvideo";
import Navbar from "@/components/common/navbar";
import BannerCarousel from "@/components/carousels/BannerCarousel";
import ProductItem from "@/components/products/ProductItem";

export default function Home() {

  const dummyData = [
    {
      title: "Houseware",
      banner: "/images/houseware.jpg",
      items: [
        { title: "Lorem ipsum dolor", price: '1000', image: '/images/houseware/houseware1.webp' },
        { title: "Lorem ipsum", price: '3000', image: '/images/houseware/houseware2.webp' },
        { title: "Lorem sums wndk", price: '2500', image: '/images/houseware/houseware3.webp' },
        { title: "Lorem esmd jdfpod", price: '5000', image: '/images/houseware/houseware4.webp' },
        { title: "Lorem esmd wndk", price: '4500', image: '/images/houseware/houseware5.webp' },
        { title: "Lorem jdfpod wndk", price: '1500', image: '/images/houseware/houseware6.webp' },
        { title: "Esmd lorem wndak", price: '10000', image: '/images/houseware/houseware7.webp' },
      ]
    },
    {
      title: "Hotelware",
      banner: "/images/hotelware.jpg",
      items: [
        { title: "Lorem ipsum dolor", price: '1500', image: '/images/hotelware/hotelware1.webp' },
        { title: "Lorem ipsum", price: '4500', image: '/images/hotelware/hotelware2.webp' },
        { title: "Lorem sums wndk", price: '3000', image: '/images/hotelware/hotelware3.webp' },
        { title: "Lorem esmd jdfpod", price: '1000', image: '/images/hotelware/hotelware4.webp' },
        { title: "Lorem esmd wndk", price: '2500', image: '/images/hotelware/hotelware5.webp' },
        { title: "Lorem jdfpod wndk", price: '1000', image: '/images/hotelware/hotelware6.webp' },
        { title: "Esmd lorem wndak", price: '2000', image: '/images/hotelware/hotelware7.webp' },
      ]
    },
    {
      title: "Giftware",
      banner: "/images/giftware.jpg",
      items: [
        { title: "Lorem ipsum dolor", price: '10000', image: '/images/giftware/giftware1.webp' },
        { title: "Lorem ipsum", price: '2500', image: '/images/giftware/giftware2.webp' },
        { title: "Lorem sums wndk", price: '1000', image: '/images/giftware/giftware3.webp' },
        { title: "Lorem esmd jdfpod", price: '7000', image: '/images/giftware/giftware4.webp' },
        { title: "Lorem esmd wndk", price: '4500', image: '/images/giftware/giftware5.webp' },
        { title: "Lorem jdfpod wndk", price: '1000', image: '/images/giftware/giftware6.webp' },
        { title: "Esmd lorem wndak", price: '8000', image: '/images/giftware/giftware7.webp' },
      ]
    }
  ];

  const demoHotelwearItems = [
    {
      id: '101',
      title: "Elegant Pattern 1842",
      price: "2500",
      discountedPrice: "2250",
      image: "/images/hotelware/hotel1.jpg",
      review: 4.5,
      reviewers: 120
    },
    {
      id: '102',
      title: "Classic Floral 1620",
      price: "1800",
      discountedPrice: "1650",
      image: "/images/hotelware/hotel2.jpg",
      review: 3.8,
      reviewers: 64
    },
    {
      id: '103',
      title: "Modern Line Art 1901",
      price: "3200",
      discountedPrice: "2999",
      image: "/images/hotelware/hotel3.jpg",
      review: 4.9,
      reviewers: 210
    },
    {
      id: '104',
      title: "Minimal White Set 1507",
      price: "2100",
      discountedPrice: "1950",
      image: "/images/hotelware/hotel4.png",
      review: 4.1,
      reviewers: 88
    },
    {
      id: '105',
      title: "Premium Gold Rim 1754",
      price: "4500",
      discountedPrice: "4200",
      image: "/images/hotelware/hotel5.png",
      review: 4.7,
      reviewers: 156
    },
    {
      id: '106',
      title: "Soft Pastel Touch 1689",
      price: "2300",
      discountedPrice: "2150",
      image: "/images/hotelware/hotel6.jpg",
      review: 3.9,
      reviewers: 47
    },
    {
      id: '107',
      title: "Vintage Blue Craft 1422",
      price: "2800",
      discountedPrice: "2600",
      image: "/images/hotelware/hotel7.jpg",
      review: 4.3,
      reviewers: 99
    },
    {
      id: '108',
      title: "Luxury Marble Finish 1983",
      price: "5200",
      discountedPrice: "4890",
      image: "/images/hotelware/hotel8.jpg",
      review: 4.8,
      reviewers: 134
    },
    {
      id: '109',
      title: "Eco Green Line 1603",
      price: "1900",
      discountedPrice: "1750",
      image: "/images/hotelware/hotel9.jpg",
      review: 3.6,
      reviewers: 32
    },
    {
      id: '110',
      title: "Royal Pattern Set 1866",
      price: "3600",
      discountedPrice: "3350",
      image: "/images/hotelware/hotel10.jpg",
      review: 4.6,
      reviewers: 178
    }
  ];

  return (
    <div className="">
      <div className="lg:mb-[130px] xl:mb-[150px]">
        <Navbar />
      </div>

      <div className="mb-[50px]">
        <BannerCarousel />
      </div>

      <div className="mb-10">
        <PromotionalSection />
      </div>

      <div className="mb-10">
        <h1 className="font-lato font-semibold text-2xl py-3 2sm:px-5 px-7">Housewear</h1>

        {/* products layout */}
        <div className="px-2 2sm:px-3 semi_lg:px-7 w-full grid grid-cols-2 semi_lg:grid-cols-3 xl:grid-cols-4 gap-5">

          {
            demoHotelwearItems.map((item) => (
              <ProductItem key={item.id} id={item.id} title={item.title} price={item.price} discountedPrice={item.discountedPrice} image={item.image} review={item.review} reviewers={item.reviewers} />
            ))
          }
          {/* product-card */}


        </div>

      </div>

      {/* <div className="">
        {
          dummyData.map((data, index) => (
            <ProductGrid key={index} title={data.title} banner={data.banner} items={data.items} />
          ))
        }
      </div> */}

      <OutletAddress />

      <PromotionalVideo />

      <div>
        <div className="w-full min-h-[400px] bg-[#1d0008ff] mt-[70px] py-5 flex md:items-center lg:items-start justify-center">
          <div className="w-full md:w-[95%] flex flex-col lg:flex-row items-center lg:items-start pt-8">
            <div className="w-[calc(100%-100px)] lg:w-[40%]">
              <h1 className="text-white a_extrabold text-[32px] mb-9">Quick Links</h1>
              <div className="flex flex-wrap flex-row justify-between space-x-2 space-y-3 md:space-y-0 md:space-x-0 w-full lg:w-[calc(100%-80px)] xl:w-[calc(100%-200px)]">
                <div className="flex flex-col text-white text-[16px] p_regular space-y-3">
                  <Link href="/">Contact Us</Link>
                  <Link href="/">My Account</Link>
                  <Link href="/">My Orders</Link>
                  <Link href="/">FAQ</Link>
                  <Link href="/">Terms & Conditions</Link>
                </div>
                <div className="flex flex-col text-white text-[16px] p_regular space-y-3">
                  <Link href="/">Home</Link>
                  <Link href="/">Houseware</Link>
                  <Link href="/">Hotelware</Link>
                  <Link href="/">Giftware</Link>
                  <Link href="/">New Arrivals</Link>
                  <Link href="/">On Sale</Link>
                  <Link href="/">Gifts</Link>
                </div>
              </div>
            </div>
            <div className="w-[calc(100%-100px)] mt-5 lg:mt-0 lg:w-[60%] flex flex-col md:flex-row items-center md:items-start md:justify-between">
              <div className="w-full md:w-[50%]">
                <h1 className="text-white a_extrabold text-[32px] mb-9">Contact Us</h1>
                <div className="flex flex-col space-y-7">
                  <div className="p_regular text-[16px] text-white space-y-3">
                    <div className="flex items-start space-x-2">
                      <Image src="/images/icons/office.svg" alt="address" height={24} width={24} />
                      <p className="text-gray-300">Navana Zohura Square, Shop No. 4, 2nd floor, 28 Kazi Nazrul Islam Avenue Banglamotor, Dhaka 1000</p>
                    </div>
                    <div className="flex flex-col gap-y-2.5 text-left">
                      <div className="flex items-start space-x-2">
                        <Image src="/images/icons/add_call.svg" alt="address" height={24} width={24} />
                        <p>+(880-2) 55168133</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Image src="/images/icons/add_call.svg" alt="address" height={24} width={24} />
                        <p>8801711977941</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Image src="/images/icons/add_call.svg" alt="address" height={24} width={24} />
                        <p>+(880-2) 55168131</p>
                      </div>
                    </div>
                  </div>

                  <div className="p_regular text-[16px] text-white space-y-3">
                    <div className="flex items-start justify-between">
                      <Image src="/images/icons/office.svg" alt="address" height={24} width={24} />
                      <p className="text-gray-300">B-25-26 Golam Rasul Market [1st floor], Reazuddin Bazar, Chittagong</p>
                    </div>
                    <div className="flex flex-col gap-y-2.5 text-left">
                      <div className="flex items-start space-x-2">
                        <Image src="/images/icons/add_call.svg" alt="address" height={24} width={24} />
                        <p>031635129</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <Image src="/images/icons/add_call.svg" alt="address" height={24} width={24} />
                        <p>+8801859812956</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-7 md:mt-0 md:w-[50%] md:flex md:justify-center">
                <div>
                  <h1 className="text-white a_extrabold text-[32px] mb-9">Follow Us</h1>
                  <div className="flex items-center space-x-5">
                    <div className="w-[80px] h-[80px]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H8.077v-2.89h2.361V9.797c0-2.337 1.393-3.629 3.523-3.629 1.021 0 2.09.182 2.09.182v2.299h-1.178c-1.162 0-1.524.722-1.524 1.463v1.756h2.59l-.414 2.89h-2.176v6.988C18.343 21.128 22 16.991 22 12z" fill="white" />
                        <rect width="24" height="24" fill="" />
                      </svg>
                    </div>
                    <div className="w-[80px] h-[80px]">
                      <Image src={"/images/instagram.svg"} alt={"instagram"} width={80} height={80} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[50px] bg-black">

        </div>
      </div>
    </div>
  );
}
