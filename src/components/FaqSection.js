"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      question: "What is the price of balloon decoration in Faridabad?",
      answer:
        "Our balloon decoration packages start from budget-friendly options and vary based on theme, customization, backdrop, and setup size.",
    },
    {
      question: "Do I need to arrange anything for the decorators?",
      answer:
        "No, our team carries all necessary materials. Only a small tool or chair may be required, and sometimes access to an electric socket may be needed.",
    },
    {
      question: "Do you provide same-day balloon decoration?",
      answer:
        "Yes, same-day balloon decoration is available in Faridabad depending on slot availability.",
    },
    {
      question: "Which events do you decorate?",
      answer:
        "We provide balloon decoration for birthdays, anniversaries, baby showers, welcome baby parties, romantic room surprises, engagements, and corporate events.",
    },
    {
      question: "Do you offer cash-on-delivery (COD)?",
      answer:
        "We do not offer COD as decoration is a customized service for each user. However, you can confirm your booking with a 50% advance payment and pay the rest after the decoration is completed."
    },
    {
        question: "How many people will come?",
        answer:
          "Generally, 1 decorator comes with all materials. However, for bigger decorations, the number of people will increase based on the decorations.",
    },
    {
        question: "Can I change my time slot after booking?",
        answer:
          "Yes, you can change your time slot up to 6 hours before the scheduled decoration date, subject to availability.",
    },
    {
        question: "I'm getting lower price quote from other brand?",
        answer:"Yes, we ensure premium, safe materials for all decorations, unlike local decorators who may reuse or use low-quality items. Our pricing reflects quality and timely service, but you can WhatsApp us for the best quote."
    },


    {
      question: "How can I book a decoration?",
      answer:
        "Simply contact us on WhatsApp, share your event details, choose a design, and confirm your booking.",
    },
    {
      question: "Do you provide decoration at home?",
      answer:
        "Yes, we provide home balloon decoration services across Faridabad and nearby areas.",
    },
    {
      question: "Can I customize my decoration theme?",
      answer:
        "Absolutely. We can customize colors, themes, balloon arrangements, backdrops, neon signs, and props according to your requirements.",
    },
    {
      question: "How long does the decoration last?",
      answer:
        "Most balloon decorations last 24–72 hours depending on weather conditions and balloon type.",
    },
    {
      question: "Do you serve all sectors of Faridabad?",
      answer:
        "Yes, we serve Sector 15, Sector 16, Sector 21, NIT, Greenfield Colony, Greater Faridabad, Surajkund, Charmwood Village, and nearby areas.",
    },
    {
      question: "Do you provide anniversary balloon decoration?",
      answer:
        "Yes, we offer romantic anniversary room decoration, ring decoration, canopy setups, and customized anniversary themes.",
    },
    {
      question: "How much advance booking is required?",
      answer:
        "We recommend booking at least 1 day in advance, but same-day bookings are also accepted whenever slots are available.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F9F7FF] py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-600">
            Everything you need to know about Balloon Decoration in Faridabad
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-800 text-lg">
                  {faq.question}
                </span>

                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="font-bold text-lg">
              Still have questions?
            </h3>

            <p className="text-gray-600">
              Our team usually replies within minutes on WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/919582060618"
            target="_blank"
            className="mt-4 md:mt-0 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}