import { DUMMY_NEWS } from "../../../dummy-news";
import NewsCard from "./NewsCard";

export default function NewsList() {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {DUMMY_NEWS.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </ul>
  );
}
