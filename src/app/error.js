"use client";

import Link from "next/link";

export default function Error({ reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-blue-100 to-yellow-100 px-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full text-center p-8 relative overflow-hidden">

        {/* Floating Balloons */}
        <div className="absolute -top-10 -left-10 w-24 h-24 bg-pink-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute -top-16 -right-10 w-32 h-32 bg-blue-400 rounded-full opacity-30 animate-bounce delay-200"></div>
        <div className="absolute -bottom-16 left-10 w-28 h-28 bg-yellow-400 rounded-full opacity-30 animate-bounce delay-300"></div>

        <h1 className="text-6xl font-extrabold text-pink-500 mb-4">
          Oops! 🎈
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Party Paused!
        </h2>

        <p className="text-gray-600 mb-8">
          Something went wrong while setting up the decorations.
          Don’t worry — we’ll fix it in no time!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition"
          >
            Retry 🎉
          </button>

          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
          >
            Back to Home 🏠
          </Link>
        </div>
      </div>
    </div>
  );
}
