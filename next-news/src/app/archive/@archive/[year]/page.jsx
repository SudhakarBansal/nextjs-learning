import NewsList from "@/components/News/NewsList";
import { getNewsForYear } from "@/helper/news";

export default async function FilteredNewsPage({ params }) {
  const { year } = await params;
  const newsForYear = getNewsForYear(year);

  return (
    <>
      <NewsList newsList={newsForYear} />
    </>
  );
}
