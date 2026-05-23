import Image from "next/image";
import Link from "next/link";

import decorations from "../../../../data/decorations";
import { getCategory } from "@/lib/getCategory";

export async function generateMetadata({ params }) {

  const category = params.category.replace("-", " ");

  return {
    title: `${category} Balloon Decoration in Faridabad | Balloonzaa`,
    description: `Best ${category} balloon decoration services in Faridabad. Book  balloon decor for your celebration.`,
  };
}

export default function CategoryPage({ params }) {

  const category = params.category;

  const filteredDecorations = decorations.filter(
    (item) => getCategory(item.image) === category
  );

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold text-center mb-8 capitalize">
        {category.replace("-", " ")} Balloon Decoration
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {filteredDecorations.map((item) => (

          <Link
            key={item.id}
            href={`/gallery/${item.slug}`}
            className="border rounded-xl overflow-hidden shadow hover:shadow-xl transition"
          >

            <div className="relative w-full h-60">

              <Image
                src={`/${item.image}`}
                alt={item.title}
                fill
                className="object-cover"
              />

            </div>

            <div className="p-4">

              <h2 className="font-semibold text-lg">
                {item.title}
              </h2>

              <p className="text-pink-600 font-bold mt-2">
                {item.price}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}