import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
export default function AboutWhyCTA() {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">

        {/* ABOUT US */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="text-pink-500">Balloonza</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Balloonza is a trusted balloon decoration service in{" "}
            <strong>Faridabad</strong>, creating beautiful and memorable
            celebrations for every special occasion. From elegant birthday
            setups to romantic anniversaries and welcome baby decorations,
            we transform your space with creativity, premium balloons, and
            perfect finishing.
          </p>
        </div>

        {/* WHY CHOOSE US */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-14">
            Why Choose <span className="text-pink-500">Balloonza</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "🎈 Premium Quality",
                desc: "We use high-quality balloons and decorative items for a classy and long-lasting setup.",
              },
              {
                title: "🎨 Creative Designs",
                desc: "Every decoration is uniquely designed to match your theme, space, and celebration.",
              },
              {
                title: "⏱ On-Time Setup",
                desc: "We value your time and ensure timely delivery and professional installation.",
              },
              {
                title: "💰 Affordable Pricing",
                desc: "Transparent pricing with budget-friendly packages and no hidden charges.",
              },
              {
                title: "📍 Local Experts",
                desc: "Based in Faridabad, we understand local venues and customer expectations.",
              },
              {
                title: "😊 Customer Satisfaction",
                desc: "Your happiness is our priority. We aim for 100% satisfaction on every event.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-pink-500 text-white rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Decorate Your Celebration?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Make your moments unforgettable with Balloonza’s professional
            balloon decoration services in Faridabad. Book now and let us
            handle the magic 🎉
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="https://wa.me/91XXXXXXXXXX"
              className="bg-white text-pink-500 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition"
            >
              Book on WhatsApp
            </Link>

            <Link
              href="tel:+91XXXXXXXXXX"
              className="border-2 border-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-pink-500 transition"
            >
              Call Now
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
