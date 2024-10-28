import NewsCard from "./NewsCard";

export default function NewsList({ newsList }) {
  return (
    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {newsList.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </ul>
  );
}
