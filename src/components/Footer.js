import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Pricing", href: "/pricing" },
    { name: "Areas", href: "/areas" },
   
    { name: "Contact Us", href: "/contact" },
  ];

  const decorations = [
    { name: "Balloon Decoration", href: "/decorations/balloon-decoration" },
    { name: "Birthday Party", href: "/decorations/birthday-party" },
    { name: "Kids Theme", href: "/decorations/kids-theme" },
    { name: "Anniversary", href: "/decorations/anniversary" },
    { name: "First Night", href: "/decorations/first-night" },
    { name: "Balloon Bouquets", href: "/decorations/balloon-bouquets" },
    { name: "Surprise Balloon", href: "/decorations/surprise-balloon" },
    { name: "Car Boot Decor", href: "/decorations/car-boot-decor" },
    { name: "Flower Delivery", href: "/decorations/flower-delivery" },
    { name: "At Home Decor", href: "/decorations/at-home-decor" },
    { name: "At Office Decor", href: "/decorations/at-office-decor" },
  ];

  const occasions = [
    { name: "Baby Shower", href: "/occasions/baby-shower" },
    { name: "Welcome Baby", href: "/occasions/welcome-baby" },
    { name: "Festive Decor", href: "/occasions/festive-decor" },
    { name: "Valentine Decor", href: "/occasions/valentine-decor" },
    { name: "Holi", href: "/occasions/holi" },
    { name: "Janmashtami", href: "/occasions/janmashtami" },
    { name: "Independence Day", href: "/occasions/independence-day" },
    { name: "Diwali", href: "/occasions/diwali" },
    { name: "Christmas", href: "/occasions/christmas" },
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* CALL US */}
        <div>
          <a
            href="tel:+919582060618"
            className="inline-flex items-center gap-3 bg-yellow-500 text-black px-5 py-3 rounded-full font-semibold shadow hover:scale-105 transition"
          >
            📞 CALL US
          </a>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.name} className="hover:text-[#6D5DF6] transition">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* DECORATIONS */}
        <div>
          <h3 className="text-white font-semibold mb-4">DECORATIONS</h3>
          <ul className="space-y-2 text-sm">
            {decorations.map((item) => (
              <li key={item.name} className="hover:text-[#6D5DF6] transition">
                <Link href="/">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* OCCASIONS */}
        <div>
          <h3 className="text-white font-semibold mb-4">OCCASIONS</h3>
          <ul className="space-y-2 text-sm">
            {occasions.map((item) => (
              <li key={item.name} className="hover:text-[#6D5DF6] transition">
                <Link href="/">{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="space-y-4">
          <div className="bg-[#111] rounded-xl p-4 space-y-3">
            <div className="flex gap-3 text-sm">
              <MapPin className="text-[#6D5DF6]" size={18} />
              <span>2H/58, New Industrial Town, Faridabad, Haryana 121001</span>
            </div>

            <div className="flex gap-3 text-sm">
              <Phone className="text-[#6D5DF6]" size={18} />
              <a href="tel:+919582060618" className="hover:text-[#6D5DF6]">
                +91 95820 60618
              </a>
            </div>

            <div className="flex gap-3 text-sm">
              <Mail className="text-[#6D5DF6]" size={18} />
              <span>info@balloonzaa.in</span>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-2">
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#6D5DF6] transition cursor-pointer">
                🌐
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#6D5DF6] transition cursor-pointer">
                📘
              </span>
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#6D5DF6] transition cursor-pointer">
                📸
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © 2025 <span className="text-[#6D5DF6] font-semibold">Balloonzaa Decoration</span> |
        Balloon Decoration in Faridabad
      </div>
    </footer>
  );
}
