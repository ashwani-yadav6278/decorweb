import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 p-6">

      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-xl text-center">

        <div className="text-6xl mb-5">
          🎉
        </div>

        <h1 className="text-4xl font-bold text-pink-500 mb-4">
          Enquiry Sent Successfully!
        </h1>

        <p className="text-gray-600 text-lg leading-8">
          Thank you for contacting Balloonza.
          <br />
          Our team will contact you shortly on WhatsApp or Call 📞
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Back to Home
          </Link>

          <a
            href="https://wa.me/919582060618"
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Chat on WhatsApp
          </a>

        </div>

      </div>

    </div>
  );
}