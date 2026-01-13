"use client";

import Image from "next/image";
import FloatingButtons from "@/components/CallButton";
import decorations from "../../../data/decorations";
import { useState, useEffect, useRef } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const touchStartX = useRef(0);

  /* =======================
     PRICE HELPER
  ======================== */
  const getNumericPrice = (price) => {
    if (!price) return 0;
    return Number(price.replace(/[^\d]/g, ""));
  };

  const isOfferEligible =
    selectedImage && getNumericPrice(selectedImage.price) >= 3500;

  /* =======================
     BODY SCROLL LOCK
  ======================== */
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
  }, [selectedImage]);
/* =======================
     NEXT / PREV
  ======================== */
  const currentIndex = decorations.findIndex(
    (item) => item.id === selectedImage?.id
  );

  const handleNext = () => {
    if (currentIndex < decorations.length - 1) {
      setSelectedImage(decorations[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(decorations[currentIndex - 1]);
    }
  };

  /* =======================
     KEYBOARD CONTROLS
  ======================== */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  
  /* =======================
     SWIPE (MOBILE)
  ======================== */
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  return (
    <>
      {/* GLOBAL FLOATING BUTTONS (HIDE WHEN MODAL OPEN) */}
      <FloatingButtons hidden={!!selectedImage} />

      {/* ================= OFFER BANNER (ALWAYS SHOWN) ================= */}
      <div className="bg-green-600 text-white p-6 rounded-lg mx-auto max-w-4xl my-6 shadow-lg">
  <p className="font-bold text-lg md:text-xl flex items-center gap-2">
    🎉 Limited Time Offer
  </p>
  <p className="text-sm md:text-base mt-1">
    Get up to 10% EXTRA OFF on bookings above ₹3500
  </p>
  <p className="text-xs md:text-sm mt-1">
    Book now on WhatsApp to avail this offer
  </p>
</div>

      {/* ================= GALLERY ================= */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {decorations.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="cursor-pointer border rounded-xl shadow hover:shadow-lg transition bg-white"
          >
            <div className="relative w-full h-60 overflow-hidden rounded-t-xl">
              <Image
                src={`/${item.image}`}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.title}</h3>

              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {item.description}
              </p>

              <div className="mt-2">
                {item.cutPrice && (
                  <p className="text-gray-400 line-through text-sm">
                    {item.cutPrice}
                  </p>
                )}

                <p className="text-pink-600 font-semibold text-lg">
                  {item.price}
                </p>

                {item.discount && (
                  <p className="text-green-600 text-sm">{item.discount}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white rounded-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-black/60 text-red-500 text-2xl rounded-full px-3 py-1 z-50"
            >
              ✕
            </button>

            {/* DESKTOP ARROWS */}
            {currentIndex > 0 && (
              <button
                onClick={handlePrev}
                className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white text-3xl px-3 py-2 rounded-full z-50"
              >
                ⬅️
              </button>
            )}
            {currentIndex < decorations.length - 1 && (
              <button
                onClick={handleNext}
                className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white text-3xl px-3 py-2 rounded-full z-50"
              >
                ➡️
              </button>
            )}

            {/* IMAGE */}
            <div className="relative w-full h-[70vh]">
              <Image
                src={`/${selectedImage.image}`}
                alt={selectedImage.title}
                fill
                className="object-contain"
              />
            </div>

            {/* DETAILS */}
            <div className="p-4 pb-40">
              <h2 className="text-xl font-bold">{selectedImage.title}</h2>
              {/* PRICE + DISCOUNT */}
              <div className="mt-2 p-1">
                {selectedImage.cutPrice && (
                  <p className="text-gray-400 line-through text-sm ">
                    {selectedImage.cutPrice}
                  </p>
                )}

                <p className="text-pink-600 font-bold text-2xl">
                  {selectedImage.price}
                </p>

                {selectedImage.discount && (
                  <p className="text-green-600 text-sm font-medium">
                    {selectedImage.discount}
                  </p>
                )}
              </div>
              <p className="text-gray-600 mt-2">{selectedImage.description}</p>

              {selectedImage.itemsUsed?.length > 0 && (
                <div className="mt-4">
                  <h3 className="font-semibold text-lg mb-2">Items Used</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {selectedImage.itemsUsed.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* OFFER CARD (ONLY IF PRICE >= 3500) */}
              {isOfferEligible && (
                <div className="mt-5 rounded-xl border border-green-300 bg-green-50 p-4">
                  <h3 className="font-bold text-green-700">
                    🎉 Extra Savings Available
                  </h3>
                  <p className="text-sm text-green-800 mt-1">
                    Get <strong>up to 10% EXTRA OFF</strong> on bookings above{" "}
                    <strong>₹3500</strong>
                  </p>
                  <p className="text-xs text-green-600 mt-1">
                    *Applicable on selected decorations
                  </p>
                </div>
              )}
            </div>

            {/* STICKY ACTION BAR */}
            <div className="sticky bottom-0 bg-white border-t p-3 z-40">
              <div className="flex gap-3">
                <a
                  href="tel:+919582060618"
                  className="flex-1 bg-blue-600 text-white text-center py-3 rounded-xl font-semibold"
                >
                  📞 Call
                </a>

                <a
                  href={`https://wa.me/919582060618?text=${encodeURIComponent(
                    `Hi Balloonzaa 👋

I want to book the following decoration:

🎈 ${selectedImage.title}
💰 Price: ${selectedImage.price}
${selectedImage.discount ? `🔥 Discount: ${selectedImage.discount}` : ""}

${
  isOfferEligible
    ? "🎉 Offer: Eligible for up to 20% extra discount on bookings above ₹3500\n"
    : ""
}

🧰 Items Used:
${
  selectedImage.itemsUsed
    ? selectedImage.itemsUsed.map((i) => `• ${i}`).join("\n")
    : "Not specified"
}

Please share availability & booking details.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-2 bg-green-500 text-white text-center py-3 rounded-xl font-semibold"
                >
                  💬 Book this on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
