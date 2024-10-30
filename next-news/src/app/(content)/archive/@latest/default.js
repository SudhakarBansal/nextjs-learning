import NewsList from "@/components/News/NewsList";
import { getLatestNews } from "@/helper/news";

export default function LatestNewsPage() {
  const news = getLatestNews();
  return (
    <>
      <h1 className="text-3xl font-bold text-start mb-8">Latest News page</h1>
      <NewsList newsList={news} />
    </>
  );
}
