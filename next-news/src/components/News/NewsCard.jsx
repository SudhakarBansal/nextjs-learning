// NewsCard.js
import Link from "next/link";
import Image from "next/image";

export default function NewsCard({ news }) {
  return (
    <li className="transform transition-transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:scale-105">
      <Link href={`/news/${news.slug}`} className="block">
        <div className="relative w-full h-48">
          <Image
            src={`/images/news/${news.image}`}
            alt={news.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-6">
          <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-100">
            {news.title}
          </h2>
        </div>
      </Link>
    </li>
  );
}
