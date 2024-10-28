import NewsList from "@/components/News/NewsList";
import { DUMMY_NEWS } from "../../../dummy-news";

export default function NewsPage() {
  return (
    <div className="bg-gray-50 dark:bg-black min-h-screen p-8">
      <h1 className="text-4xl font-bold text-start text-gray-800 dark:text-gray-200 mb-10">
        Explore News
      </h1>
      <NewsList newsList={DUMMY_NEWS} />
    </div>
  );
}
