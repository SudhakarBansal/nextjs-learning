import Image from "next/image";
import { DUMMY_NEWS } from "../../../../../../dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ImagePage({ params }) {
  const { newsSlug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug);

  if (!newsItem) {
    notFound();
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-2xl text-center">
        <Link href={`/news/${newsItem.slug}`} className="block">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            width={700}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </Link>
      </div>
    </div>
  );
}
