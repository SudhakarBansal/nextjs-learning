import Link from "next/link";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <header>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            by {creator}
          </p>
        </div>
      </header>
      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-300 mb-4">{summary}</p>
      </div>
      <div className="p-4">
        <Link
          href={`/meals/${slug}`}
          className="text-orange-600 dark:text-orange-400 font-bold hover:underline absolute bottom-0 py-4"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
