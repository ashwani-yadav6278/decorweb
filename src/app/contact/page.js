"use client";

export default function ContactForm() {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-pink-500">Balloonza</span>
          </h2>
          <p className="text-gray-600">
            Share your event details and we’ll contact you shortly 🎈
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <form
            action="https://formsubmit.co/ashwaniyadav6278@gmail.com"
            method="POST"
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* REQUIRED FOR FORMSUBMIT */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="New Balloon Decoration Enquiry - Balloonza"
            />
            {/* OPTIONAL: redirect after submit */}
            {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Purpose */}
            <select
              name="purpose"
              required
              className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Purpose of Decoration</option>
              <option>Birthday Decoration</option>
              <option>Anniversary Decoration</option>
              <option>Welcome Baby</option>
              <option>Surprise Decoration</option>
              <option>Ring Ceremony</option>
              <option>Corporate / Office Event</option>
              <option>Other</option>
            </select>

            {/* Budget */}
            <select
              name="budget"
              required
              className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Decoration Budget</option>
              <option>₹1,000 – ₹1,500</option>
              <option>₹1,500 – ₹2,000</option>
              <option>₹2,000 – ₹3,000</option>
              <option>₹3,000 – ₹5,000</option>
              <option>₹5,000 – ₹8,000</option>
              <option>₹8,000 – ₹12,000</option>
              <option>₹12,000 – ₹20,000</option>
              <option>₹20,000+</option>
            </select>

            {/* Event Date */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Event Date
              </label>

              <input
                type="date"
                name="event_date"
                required
                className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>

            {/* Location */}
            <input
              type="text"
              name="location"
              placeholder="Event Location / Sector (Faridabad)"
              className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Additional requirements or decoration ideas..."
              rows="4"
              className="border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-pink-400 md:col-span-2"
            />

            {/* Buttons */}
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Send Enquiry
              </button>

              <a
                href="https://wa.me/919582060618"
                target="_blank"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition text-center"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
