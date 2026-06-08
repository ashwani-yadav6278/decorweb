"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingClient() {
  const [selected, setSelected] = useState(null);

  const packages = [
    {
      title: "Birthday Decoration",
      price: "₹1,299",
      popular: false,
      desc: "Perfect balloon setup for birthdays",
      details: ["🎈 120 balloons", "🎉 Birthday banner", "✨ Theme colors"],
      color: "from-pink-400 via-rose-400 to-red-400",
    },
    {
      title: "Arch Balloon Decoration",
      price: "₹1,999",
      popular: true,
      desc: "Most booked decoration style",
      details: ["🎈 Balloon arch", "🎨 Custom theme", "📸 Photo setup"],
      color: "from-purple-500 via-indigo-500 to-blue-500",
    },
    {
      title: "Ring Decoration",
      price: "₹3,599",
      popular: false,
      desc: "Elegant party decoration",
      details: ["💍 Ring backdrop", "🎈 Premium balloons"],
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
      {/* HERO */}
      <div className="text-center mb-16 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Birthday Decoration
          <span className="text-pink-500"> Pricing in Faridabad</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Affordable balloon decoration packages starting from ₹1299 for
          birthdays, anniversaries, welcome baby and surprise celebrations in
          Faridabad & Delhi NCR.
        </p>
      </div>

      {/* PACKAGES */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${pkg.color} text-white p-8 rounded-3xl shadow-xl`}
          >
            <h3 className="text-2xl font-bold">{pkg.title}</h3>
            <p className="mb-4">{pkg.desc}</p>

            <div className="bg-white/20 p-4 rounded-xl mb-4 text-center">
              <p>Starting From</p>
              <p className="text-3xl font-bold">{pkg.price}</p>
            </div>

            <button
              onClick={() => setSelected(pkg)}
              className="w-full bg-white text-black py-2 rounded-full mb-2"
            >
              View Details
            </button>

            <Link
              href="https://wa.me/919582060618"
              className="block text-center bg-black/30 py-2 rounded-full"
            >
              WhatsApp Book
            </Link>
          </div>
        ))}
      </div>

      {/* SEO CONTENT (IMPORTANT FOR RANKING) */}
      <div className="max-w-5xl mx-auto mt-20 px-6 bg-white p-10 rounded-3xl shadow">
        <h2 className="text-3xl font-bold mb-4">
          Birthday Decoration Services in Faridabad
        </h2>

        <p className="text-gray-600 mb-4 leading-7">
          Balloonzaa provides affordable and premium birthday decoration
          services in Faridabad, Delhi, Noida and Gurgaon. We specialize in
          balloon arch decoration, welcome baby setup, romantic room decoration,
          surprise decoration and anniversary decorations.
        </p>

        <p className="text-gray-600 mb-4 leading-7">
          Our packages are designed for all budgets starting from ₹1299. We use
          high-quality balloons, foil balloons, chrome balloons, flower petals
          and lighting setups.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Our Services</h3>

        <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
          <li className="text-pink-500 font-bold text-xl underline">
            {" "}
            <Link href="/service/birthday-balloon-decoration">
              🎈 Birthday Decoration
            </Link>
          </li>
          <li className="text-pink-500 font-bold text-xl underline">
            {" "}
            <Link href="/service/welcome-baby-decoration-faridabad">
              🎀 Welcome Baby Decoration
            </Link>
          </li>
          <li className="text-pink-500 font-bold text-xl underline">
            {" "}
            <Link href="/service/first-night-room-decoration">
              ❤️ Couple Room Decoration
            </Link>
          </li>
          <li className="text-pink-500 font-bold text-xl underline">
            {" "}
            <Link href="/service/romantic-room-decoration-for-couple">
              🎉 Surprise Decoration
            </Link>
          </li>
          <li className="text-pink-500 font-bold text-xl underline">
            {" "}
            <Link href="/service/anniversary-decoration">
              💍 Anniversary Decoration
            </Link>
          </li>
          <li className="text-pink-500 font-bold text-xl underline">
            {" "}
            <Link href="/gallery/arch-balloon-birthday-decoration-chrome-rose-gold">
              🌈 Balloon Arch Setup
            </Link>
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-3">Why Choose Us?</h3>

        <ul className="text-gray-600 space-y-2">
          <li>✔ Affordable pricing</li>
          <li>✔ Same-day decoration available</li>
          <li>✔ Professional decorators</li>
          <li>✔ Custom themes</li>
          <li>✔ Service across Delhi NCR</li>
        </ul>
      </div>

      {/* MODAL */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full">
            <button onClick={() => setSelected(null)}>Close</button>
            <h2 className="text-xl font-bold">{selected.title}</h2>
            <ul className="mt-3 text-gray-600">
              {selected.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
