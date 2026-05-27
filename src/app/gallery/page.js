"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import FloatingButtons from "@/components/CallButton";
import decorations from "../../../data/decorations";
import { getCategory } from "@/lib/getCategory";

export default function GalleryPage() {
  // FILTER CATEGORIES
  const categories = [
    "all",
    "birthday",
    "anniversary",
    "baby-shower",
    "welcome-baby",
    "romantic",
    "car-boot",
    "engagement",
    "jungle-theme",
    "kids-theme",
  ];

  // ACTIVE FILTER STATE
  const [activeCategory, setActiveCategory] = useState("all");

  // FILTER LOGIC
  const filteredDecorations =
    activeCategory === "all"
      ? decorations
      : decorations.filter(
          (item) => getCategory(item.image) === activeCategory,
        );

  return (
    <>
      {/* FLOATING BUTTONS */}
      <FloatingButtons />

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap mt-4 gap-3 justify-center px-4 md:px-6 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 capitalize text-sm md:text-base font-medium

              ${
                activeCategory === category
                  ? "bg-pink-500 text-white border-pink-500 shadow-lg scale-105"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-pink-100"
              }
            `}
          >
            {category.replace("-", " ")}
          </button>
        ))}
      </div>
      <h1 className="font-bold text-3xl text-center text-amber-800 line-clamp-2">
        Explore Our Stunning Decorations
      </h1>
      {/* GALLERY */}
      <div className="p-4 md:p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredDecorations.map((item) => (
          <Link
            href={`/gallery/${item.slug}`}
            key={item.id}
            className="border rounded-2xl shadow hover:shadow-2xl transition duration-300 bg-white overflow-hidden block group"
          >
            {/* IMAGE */}
            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={`/${item.image}`}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* DETAILS */}
            <div className="p-4">
              <h2 className="font-semibold text-lg line-clamp-2">
                {item.title}
              </h2>

              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {item.description}
              </p>

              <div className="mt-4">
                {item.cutPrice && (
                  <p className="text-gray-400 line-through text-sm">
                    {item.cutPrice}
                  </p>
                )}

                <p className="text-pink-600 font-bold text-2xl">{item.price}</p>

                {item.discount && (
                  <p className="text-green-600 text-sm mt-1">{item.discount}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredDecorations.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No decorations found in this category.
          </p>
        </div>
      )}
    </>
  );
}
