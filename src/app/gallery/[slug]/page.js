import decorations from "../../../../data/decorations";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* SEO */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  const decoration = decorations.find((item) => item.slug === slug);

  if (!decoration) {
    return {
      title: "Decoration Not Found | Balloonzaa",
      description: "The requested decoration page could not be found.",
    };
  }

  return {
    title: `${decoration.title}`,

    description: decoration.description,

    keywords: [
      decoration.title,
      "balloon birthday decoration",
      "birthday balloon decoration",
      "anniversary balloon decoration",
      "baby shower balloon decoration",
      "balloon decoration baby shower",
      "welcome baby decoration in Faridabad",
      "party decoration",
      "welcome baby balloon decoration in ideas",
      "balloon decoration in Faridabad",
      "romantic room  decoration for her",
      "car boot decoration for girldfriend",
      "engagement decoration",
      "jungle theme decoration",
      "kids theme decoration",
      "first night decoration ideas",
      "retirement decoration",
      "couple room  decoration ideas",
      "themed decoration ideas for boy",
      "newborn baby decoration ideas",
    ],

    alternates: {
      canonical: `https://www.balloonzaa.in/gallery/${decoration.slug}`,
    },

    openGraph: {
      title: `${decoration.title} in Faridabad| Balloonzaa`,

      description: decoration.description,

      url: `https://www.balloonzaa.in/gallery/${decoration.slug}`,

      siteName: "Balloonzaa",

      images: [
        {
          url: `https://www.balloonzaa.in/${decoration.image}`,
          width: 1200,
          height: 630,
          alt: decoration.alt,
        },
      ],

      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title: `${decoration.title} | Balloonzaa`,

      description: decoration.description,

      images: [`https://www.balloonzaa.in/${decoration.image}`],
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

  const decoration = decorations.find((item) => item.slug === slug);

  if (!decoration) {
    notFound();
  }

  /* RELATED DECORATIONS */
  const relatedDecorations = decorations.filter(
    (item) =>
      item.category === decoration.category && item.slug !== decoration.slug,
  );

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* MAIN SECTION */}
      <div className="grid md:grid-cols-[65%_35%] gap-10">
        {/* IMAGE + DELIVERY DETAILS */}
        <div>
          {/* IMAGE */}
          <div className="relative w-full bg-gray-50 rounded-2xl overflow-hidden border">
            <Image
              src={`/${decoration.image}`}
              alt={decoration.alt}
              width={1200}
              height={1600}
              priority
              className="w-full h-auto rounded-2xl"
            />
          </div>

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
                    Displayed images are illustrative; actual products may vary
                    based on availability.
                  </li>

                  <li>
                    Our balloon expert will arrive at your selected time slot.
                  </li>

                  <li>
                    Please provide a stool or ladder for ceiling decoration.
                  </li>

                  <li>
                    Decoration can be arranged in hotel rooms with prior
                    permission.
                  </li>

                  <li>Rental items will be collected the following day.</li>

                  <li>
                    Complaints must be reported within 2 hours of delivery.
                  </li>

                  <li>No cancellation once decoration work has started.</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
        {/* DETAILS */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{decoration.title}</h1>

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

          {/* ITEMS USED */}
          {decoration.items?.length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">Items Used</h2>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {decoration.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {/* SEO CONTENT */}
          {decoration.seoContent && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">About This Decoration</h2>

              <div className="text-gray-700 leading-8 whitespace-pre-line">
                {decoration.seoContent}
              </div>
            </section>
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
        <h2 className="text-4xl font-bold mb-10">Related Decorations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {relatedDecorations.slice(0, 8).map((item) => (
            <Link
              key={item.id}
              href={`/gallery/${item.slug}`}
              className="border rounded-2xl overflow-hidden shadow hover:shadow-xl transition bg-white"
            >
              {/* IMAGE */}
              <div className="relative w-full h-72">
                <Image
                  src={`/${item.image}`}
                  alt={item.alt}
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
        <Link
          href="/gallery"
          className="text-blue-500 text-2xl hover:text-blue-700"
        >
          <div className="flex items-center gap-2">
            <span>←</span>
            <span>Back to Gallery</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

<div className="max-w-7xl mx-auto p-6">
  {/* BREADCRUMBS */}
  <div className="text-sm text-gray-500 mb-6 flex flex-wrap gap-2">
    <Link href="/" className="hover:text-pink-500">
      Home
    </Link>

    <span>/</span>

    <Link href="/gallery" className="hover:text-pink-500">
      Gallery
    </Link>

    <span>/</span>

    <span className="text-gray-700">{decorations.title}</span>
  </div>
</div>;
