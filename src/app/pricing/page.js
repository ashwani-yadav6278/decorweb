"use client";
import { useState } from "react";
import Link from "next/link";

export default function Pricing() {
  const [selected, setSelected] = useState(null);

 const packages = [
  {
    title: "Birthday Decoration",
    price: "₹1,299",
    popular: false,
    desc: "Perfect balloon setup for birthdays",
    details: [
      "🎈 120 balloons",
      "🎉 Birthday banner",
      "✨ Theme-based colors",
      "🪟 2 curtains",
      "⏱️ Setup in 1 hour",
    ],
    color: "from-pink-400 via-rose-400 to-red-400",
  },
  {
    title: "Arch Balloon Decoration",
    price: "₹1,999",
    popular: true,
    desc: "Most booked decoration style",
    details: [
      "🎈 Balloon arch",
      "🎨 Custom color theme",
      "📸 Photo-friendly setup",
      "⏱️ Setup in 2 hours",
    ],
    color: "from-purple-500 via-indigo-500 to-blue-500",
  },
  {
    title: "Ring Decoration",
    price: "₹3,599",
    popular: false,
    desc: "Elegant party decoration",
    details: [
      "💍 Ring backdrop",
      "🎈 Premium balloons",
      "✨ Happy Birthday lighting setup",
      "📸 Chrome balloons",
    ],
    color: "from-blue-500 via-cyan-500 to-teal-500",
  },
  {
    title: "Welcome Baby Decoration",
    price: "₹2,499",
    popular: true,
    desc: "Elegant welcome baby decoration",
    details: [
      "🎀 Arch backdrop",
      "👶 Baby foil balloons set (5 pcs)",
      "✨ Welcome baby banner",
      "🌹 ½ kg rose petals",
      "📸 20 chrome balloons",
    ],
    color: "from-emerald-400 via-teal-400 to-cyan-400",
  },
  {
    title: "Surprise Decoration",
    price: "₹1,999",
    popular: false,
    desc: "Perfect surprise celebration setup",
    details: [
      "🎉 Surprise backdrop",
      "🎈 Premium balloons",
      "❤️ Love foil balloon banner",
      "💖 Heart shape foil balloons (2 pcs)",
      "📸 Chrome balloons",
    ],
    color: "from-orange-400 via-amber-400 to-yellow-400",
  },
  {
    title: "Couple Room Decoration",
    price: "₹2,199",
    popular: false,
    desc: "Romantic couple room decoration",
    details: [
      "🌹 1 kg flower petals",
      "🎈 150 balloons",
      "❤️ Birthday or Love banner",
      "🎈 Transparent balloons (5 pcs)",
      "📸 20 chrome balloons",
    ],
    color: "from-red-400 via-pink-500 to-rose-500",
  },
];


  return (
    <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Decoration <span className="text-pink-500">Pricing</span>
          </h1>
          <p className="text-gray-600">
            Prices start from the amount shown. Final price depends on location & customization.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br ${pkg.color} text-white p-8 rounded-3xl shadow-2xl
              transform transition duration-500 hover:-translate-y-4 hover:rotate-1 hover:scale-105`}
            >
              {/* MOST POPULAR BADGE */}
              {pkg.popular && (
                <span className="absolute -top-4 right-6 bg-yellow-400 text-black text-sm font-bold px-4 py-1 rounded-full shadow">
                  ⭐ Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
              <p className="opacity-90 mb-4">{pkg.desc}</p>

              <div className="bg-white/20 rounded-xl p-4 mb-6 text-center">
                <p className="text-sm">Starting From</p>
                <p className="text-3xl font-extrabold">{pkg.price}</p>
              </div>

              <button
                onClick={() => setSelected(pkg)}
                className="w-full mb-3 bg-white text-gray-800 font-semibold py-3 rounded-full hover:bg-gray-100"
              >
                🧾 View Details
              </button>

              <Link
                href="https://wa.me/919582060618"
                className="block text-center bg-black/30 py-3 rounded-full hover:bg-black/40"
              >
                💬 Book on WhatsApp
              </Link>
            </div>
          ))}
        </div>

        {/* AREA NOTE */}
        <p className="text-center text-gray-500 mt-14">
          📍 Pricing applicable for <strong>Faridabad</strong>.  
          Extra charges may apply for Delhi, Noida, Gurgaon & nearby areas.
        </p>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✖
            </button>

            <h3 className="text-2xl font-bold mb-2">{selected.title}</h3>
            <p className="text-pink-500 font-bold mb-4">
              Starting From {selected.price}
            </p>

            <ul className="space-y-2 text-gray-700 mb-6">
              {selected.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <Link
              href="https://wa.me/919582060618"
              className="block text-center bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600"
            >
              📞 Book Now on WhatsApp
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
