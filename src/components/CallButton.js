"use client";

export default function FloatingButtons({ hidden }) {
  if (hidden) return null;

  return (
    <div className="fixed bottom-6 right-4 flex flex-col gap-3 z-40">
      <a
        href="tel:+919582060618"
        className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        📞 Call
      </a>

      <a
        href="https://wa.me/919582060618"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
