import decorations from "../../../../data/decorations";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* SEO */
export async function generateMetadata({ params }) {

  const { slug } = await params;

  const decoration = decorations.find(
    (item) => item.slug === slug
  );

  if (!decoration) {
    return {
      title: "Decoration Not Found | Balloonzaa",
      description:
        "The requested decoration page could not be found.",
    };
  }

  return {
    title: `${decoration.title}`,

    description:
      ` Book premium balloon decoration setups for birthdays, anniversaries, baby showers and surprise celebrations in Faridabad.`,

    keywords: [
      decoration.title,
      "balloon decoration",
      "birthday decoration",
      "anniversary decoration",
      "baby shower decoration",
      "party decoration",
      "balloon decoration in Faridabad",
    ],

    alternates: {
      canonical: `https://www.balloonzaa.in/gallery/${decoration.slug}`,
    },

    openGraph: {
      title: `${decoration.title} | Balloonzaa`,

      description:
        `${decoration.description} Book beautiful balloon decorations in Faridabad.`,

      url: `https://www.balloonzaa.in/gallery/${decoration.slug}`,

      siteName: "Balloonzaa",

      images: [
        {
          url: `https://www.balloonzaa.in/${decoration.image}`,
          width: 1200,
          height: 630,
          alt: decoration.title,
        },
      ],

      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: `${decoration.title} | Balloonzaa`,

      description:
        `${decoration.description} Explore premium balloon decorations.`,

      images: [
        `https://www.balloonzaa.in/${decoration.image}`,
      ],
    },
  };
}

/* STATIC PAGES */
export async function generateStaticParams() {

  return decorations.map((item) => ({
    slug: item.slug,
  }));

}

/* PAGE */
export default async function DecorationPage({ params }) {

  const { slug } = await params;

  const decoration = decorations.find(
    (item) => item.slug === slug
  );

  if (!decoration) {
    notFound();
  }

  /* RELATED DECORATIONS */
  const relatedDecorations = decorations.filter(
    (item) => item.slug !== decoration.slug
  );

  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* MAIN SECTION */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <div className="relative w-full h-[500px]">

          <Image
            src={`/${decoration.image}`}
            alt={decoration.title}
            fill
            priority
            className="object-cover rounded-2xl"
          />

        </div>

        {/* DETAILS */}
        <div>

          <h1 className="text-3xl md:text-4xl font-bold">
            {decoration.title}
          </h1>

          {/* PRICE */}
          <div className="mt-5">

            {decoration.cutPrice && (
              <p className="text-gray-400 line-through text-lg">
                {decoration.cutPrice}
              </p>
            )}

            <p className="text-pink-600 text-4xl font-bold">
              {decoration.price}
            </p>

            {decoration.discount && (
              <p className="text-green-600 font-medium mt-1">
                {decoration.discount}
              </p>
            )}

          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-700 leading-7">
            {decoration.description}
          </p>

          {/* DELIVERY DETAILS */}
          <div className="mt-8 border rounded-2xl overflow-hidden bg-white shadow-sm">

            <details className="group">

              <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-gray-800 list-none">

                <div className="flex items-center gap-2 text-lg">
                  🚚 Delivery Detail
                </div>

                <span className="transition-transform duration-300 group-open:rotate-180 text-xl">
                  ⌃
                </span>

              </summary>

              <div className="px-6 pb-6 text-gray-600 text-sm leading-7">

                <ul className="space-y-3 list-disc pl-5">

                  <li>
                    Displayed images are illustrative; actual products may vary in shape, color, or design based on availability.
                  </li>

                  <li>
                    Our balloon expert will arrive at your chosen time slot to set up the balloons.
                  </li>

                  <li>
                    Please provide a stool or ladder to assist with ceiling decoration.
                  </li>

                  <li>
                    Decoration can be arranged in hotel rooms with prior permission from hotel management.
                  </li>

                  <li>
                    All decoration items are rented and will be collected the following day.
                  </li>

                  <li>
                    Any complaints must be reported within 2 hours of delivery.
                  </li>

                  <li>
                    No cancellations or rescheduling are permitted once decoration has begun.
                  </li>

                </ul>

              </div>

            </details>

          </div>

          {/* ITEMS USED */}
          {decoration.itemsUsed?.length > 0 && (

            <div className="mt-8">

              <h2 className="text-2xl font-semibold mb-3">
                Items Used
              </h2>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">

                {decoration.itemsUsed.map((item, index) => (

                  <li key={index}>
                    {item}
                  </li>

                ))}

              </ul>

            </div>

          )}

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="tel:+919582060618"
              className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl font-semibold"
            >
              📞 Call Now
            </a>

            <a
              href={`https://wa.me/919582060618?text=Hi I want to book ${decoration.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 transition text-white px-8 py-4 rounded-xl font-semibold"
            >
              💬 Book on WhatsApp
            </a>

          </div>

        </div>

      </div>

      {/* RELATED DECORATIONS */}
      <div className="mt-24">

        <h2 className="text-4xl font-bold mb-10">
          Explore More Decorations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {relatedDecorations.map((item) => (

            <Link
              key={item.id}
              href={`/gallery/${item.slug}`}
              className="border rounded-2xl overflow-hidden shadow hover:shadow-xl transition bg-white"
            >

              {/* IMAGE */}
              <div className="relative w-full h-72">

                <Image
                  src={`/${item.image}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <h3 className="font-semibold text-lg line-clamp-2">
                  {item.title}
                </h3>

                <div className="mt-3">

                  {item.cutPrice && (
                    <p className="text-gray-400 line-through text-sm">
                      {item.cutPrice}
                    </p>
                  )}

                  <p className="text-pink-600 font-bold text-xl">
                    {item.price}
                  </p>

                  {item.discount && (
                    <p className="text-green-600 text-sm mt-1">
                      {item.discount}
                    </p>
                  )}

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </div>
  );
}