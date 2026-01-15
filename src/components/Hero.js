"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const images = [
    "/decorations/baby_shower_balloon_birthday_decoration.jpg",
    "/decorations/balloon birthday decoration (44).PNG",
    "/decorations/anniversary_25th_ring_balloon_decoration.jpg",
    "/decorations/arch_girl_balloon_birthday_decoration7.jpg",
    "/decorations/balloon birthday decoration (2).jpg",
    "/decorations/balloon birthday decoration (20).PNG",
    "/decorations/ring_balloon_birtday_decoration.jpg",
    "/decorations/balloon birthday decoration (105).jpg",
    "/decorations/welcome_baby_boy_balloon_decoration.jpg",
    "/decorations/balloon birthday decoration (185).JPG",
  ];
const reviews = [
  {
    name: "Ritika Sharma",
    area: "Sector 15, Faridabad",
    rating: 5,
    text: "Beautiful balloon decoration! Everything was exactly as shown. Highly recommended.",
  },
  {
    name: "Aman Verma",
    area: "NIT Faridabad",
    rating: 5,
    text: "Very professional and on-time setup. My wife loved the surprise decoration.",
  },
  {
    name: "Pooja Gupta",
    area: "Sector 21, Faridabad",
    rating: 5,
    text: "Affordable pricing and amazing work. Best balloon decorator in Faridabad.",
  },
];

  return (
    <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
            Balloon Decoration <br />
            in <span className="text-pink-500">Faridabad</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Make your celebrations unforgettable with premium balloon decoration
            services for birthdays, anniversaries, weddings, baby showers &
            surprise parties.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://wa.me/919582060618"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition"
            >
              💬 WhatsApp Booking
            </Link>

            <Link
              href="/gallery"
              className="bg-white border border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition"
            >
              View Gallery
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            ⭐ 5-Star Rated • Same-Day Setup • Affordable Prices
          </p>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            loop
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={img}
                  alt="Balloon Decoration"
                  width={600}
                  height={550}
                  className="object-cover w-full h-[520px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <section className="bg-[#F9F7FF] py-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">
      ⭐ Customer Reviews
    </h2>
    <p className="text-gray-600 mb-10">
      Trusted by customers across Faridabad
    </p>

    <div className="grid md:grid-cols-3 gap-6">
      {reviews.map((review, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
        >
          <div className="text-yellow-400 mb-2">
            {"⭐".repeat(review.rating)}
          </div>
          <p className="text-gray-700 mb-4">
            “{review.text}”
          </p>
          <h4 className="font-semibold">{review.name}</h4>
          <p className="text-sm text-gray-500">{review.area}</p>
        </div>
      ))}
    </div>
  </div>
</section>


{/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "💬 Contact on WhatsApp",
              "🎨 Choose Design & Budget",
              "📅 Confirm Booking",
              "🎉 We Decorate & You Enjoy",
            ].map((step, i) => (
              <div
                key={i}
                className="bg-pink-50 p-6 rounded-xl font-semibold"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#F9F7FF] py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Balloonzaa?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "⭐ 5-Star Rated in Faridabad",
              "⏱️ Same-Day Setup Available",
              "🎨 Custom Theme Decoration",
              "💰 Affordable Transparent Pricing",
              "📍 Serving All Sectors",
              "📸 Instagram-Worthy Designs",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-500 to-purple-600 py-16 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Make Your Celebration Special 🎉
        </h2>
        <p className="mb-8">Book premium balloon decoration today</p>
        <Link
          href="https://wa.me/919582060618"
          className="bg-white text-pink-600 px-10 py-4 rounded-full font-bold"
        >
          💬 Book on WhatsApp
        </Link>
      </section>
    </section>

    
  );
}
