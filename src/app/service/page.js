import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Birthday Balloon Decoration",
    slug: "birthday-balloon-decoration",
    image: "/services/birthday.jpeg",
    description:
      "Creative birthday balloon decorations with arches, backdrops, neon signs and customized themes.",
  },
  {
    title: "Anniversary Decoration",
    slug: "anniversary-decoration",
    image: "/services/25th anniversary decoration.jpg",
    description:
      "Romantic anniversary decorations with balloons, candles, rose petals and personalized setups.",
  },
  {
    title: "Baby Shower Decoration",
    slug: "baby-shower-decoration",
    image: "/services/baby shower balloon decoration.jpg",
    description:
      "Elegant baby shower decorations with pastel balloons, themed backdrops and welcome boards.",
  },
  {
    title: "1st birthday Decoration",
    slug: "1st-birthday-decoration",
    image: "/services/1st birthday balloon decor.jpg",
    description:
      "Fun and colorful 1st birthday decorations with themed backdrops and custom designs.",
  },
  {
    title: "Theme Party Decoration",
    slug: "theme-party-decoration",
    image: "/services/jungle safari theme birthday balloon decor.jpg",
    description:
      "Exciting theme party decorations with balloons, banners and customized setups.",
  },
  {
    title: "First Night Decoration",
    slug: "first-night-room-decoration",
    image: "/services/romantic first nigt decor.jpg",
    description:
      "Traditional haldi ceremony decoration with floral themes, balloons and vibrant backdrops.",
  },
  {
    title: "Romantic Room  Decoration for Couple",
    slug: "romantic-room-decoration-for-couple",
    image: "/services/romantic-room.jpg",
    description:
      "Traditional haldi ceremony decoration with floral themes, balloons and vibrant backdrops.",
  },
  {
    title: "Welcome Baby Decoration",
    slug: "welcome-baby-decoration",
    image: "/services/welcome-baby.jpg",
    description:
      "Beautiful room decorations to welcome your newborn with balloons and custom themes.",
  },
  {
    title: "Bride To Be Decoration",
    slug: "bride-to-be-decoration",
    image: "/services/bride-to-be.jpg",
    description:
      "Stylish bride-to-be and bachelorette decorations with balloon arches and neon signs.",
  },
  
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
     <section className="bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold">
            Balloon Decoration Services
          </h1>

          <p className="mt-3 text-lg">
            Home / Services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-pink-600 uppercase text-sm font-semibold">
                  Balloon Decoration
                </span>

                <h2 className="text-2xl font-bold mt-2 mb-3">
                  {service.title}
                </h2>

                <p className="text-gray-600">
                  {service.description}
                </p>

                <Link
                  href={`/service/${service.slug}`}
                  className="inline-block mt-5 text-pink-600 font-semibold"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}