import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../dummy-news";
import Image from "next/image";
import Link from "next/link";

export default async function NewsDetailsPage({ params }) {
  const { newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }
  return (
    <article className="min-h-screen p-8 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="relative md:w-1/2 mb-10 md:mb-0">
          <Link href={`/news/${newsItem.slug}/image`}>
            <Image
              src={`/images/news/${newsItem.image}`}
              alt={newsItem.title}
              className="object-fill rounded-lg"
              width={500}
              height={100}
            />
          </Link>
        </div>

        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {newsItem.title}
          </h1>
          <time
            dateTime={newsItem.date}
            className="text-sm text-gray-500 dark:text-gray-400 my-6"
          >
            {newsItem.date}
          </time>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed my-6">
            {newsItem.content}
          </p>
        </div>
      </div>
    </article>
  );
}
