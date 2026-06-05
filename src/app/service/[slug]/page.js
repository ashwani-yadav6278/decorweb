
import services from "../../../../data/services";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-gray-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-red-500">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-40">

          <p className="text-white/70 text-sm">
            Home / Service
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mt-4 leading-tight max-w-5xl">
            {service.title}
          </h1>

          <p className="text-white/90 mt-6 text-lg max-w-3xl leading-8">
            {service.description}
          </p>

        </div>
      </section>

      {/* MAIN */}

      <section className="-mt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-[380px_minmax(0,1fr)_300px] gap-10">

            {/* LEFT IMAGE */}

            <div className="lg:sticky lg:top-28 self-start">

              <div
                className="
                bg-white
                rounded-[36px]
                shadow-[0_20px_80px_rgba(0,0,0,.18)]
                overflow-hidden
                "
              >
                <div className="p-5">

                  <Image
                    src={service.image}
                    alt={service.title}
                    width={700}
                    height={700}
                    priority
                    className="
                    w-full
                    rounded-[28px]
                    object-cover
                    "
                  />

                </div>

                <div className="px-8 pb-8 text-center">

                  <span
                    className="
                    inline-block
                    px-5
                    py-3
                    rounded-full
                    bg-pink-100
                    text-pink-600
                    text-sm
                    font-semibold
                    "
                  >
                    {service.imageTitle || service.title}
                  </span>

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <article className="bg-white rounded-[32px] shadow-sm border border-gray-100">

              <div className="p-8 lg:p-14">

                <ReactMarkdown
                  components={{
                    h2: ({ children }) => (
                      <h2 className="text-4xl font-bold mt-20 mb-8 border-b pb-4">
                        {children}
                      </h2>
                    ),

                    h3: ({ children }) => (
                      <h3 className="text-2xl font-semibold mt-12 mb-6 text-pink-600">
                        {children}
                      </h3>
                    ),

                    p: ({ children }) => (
                      <p className="text-[18px] leading-[2] text-gray-700 mb-8">
                        {children}
                      </p>
                    ),

                    ul: ({ children }) => (
                      <ul className="list-disc pl-6 mb-10 space-y-4">
                        {children}
                      </ul>
                    ),

                    li: ({ children }) => (
                      <li className="text-[18px] leading-8">
                        {children}
                      </li>
                    ),

                    hr: () => (
                      <div className="h-px bg-pink-200 my-14" />
                    ),

                    strong: ({ children }) => (
                      <strong className="bg-pink-50 px-1 rounded">
                        {children}
                      </strong>
                    ),
                  }}
                >
                  {service.content}
                </ReactMarkdown>

              </div>

            </article>

            {/* SIDEBAR */}

            <aside className="space-y-6 lg:sticky lg:top-28 self-start">

              <div className="bg-white rounded-[28px] p-8 shadow-sm">

                <h3 className="text-2xl font-bold mb-6">
                  Popular Services
                </h3>

                <div className="space-y-3">

                  {[
                    "Birthday Decoration",
                    "Anniversary Decoration",
                    "Baby Shower",
                    "Theme Decoration",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                      p-4
                      rounded-xl
                      border
                      hover:border-pink-500
                      hover:text-pink-600
                      transition
                      cursor-pointer
                      "
                    >
                      {item}
                    </div>
                  ))}

                </div>

              </div>

              <div className="rounded-[28px] bg-gradient-to-br from-pink-500 to-purple-600 text-white p-8">

                <h3 className="text-4xl font-bold">
                  Plan Your Celebration
                </h3>

                <p className="mt-5 leading-8">
                  Get decoration ideas and create memorable moments.
                </p>

                <button className="mt-8 bg-white text-pink-600 px-7 py-4 rounded-xl font-semibold">
                  Book Now
                </button>

              </div>

            </aside>

          </div>

        </div>
      </section>

    </main>
  );
}

