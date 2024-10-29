import Link from "next/link";
import NewsList from "@/components/News/NewsList";
import {
  getAvailableNewsMonths,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/helper/news";

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;
  let selectedYear = filter?.[0];
  let selectedMonth = filter?.[1];
  let news;
  let links;
  let newsContent = <p>No news found for the selected period</p>;

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
    console.log(links);
  }
  if (!selectedYear && !selectedMonth) {
    newsContent = <p>Please select a year</p>;
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  }

  if (news && news.length > 0) {
    newsContent = <NewsList newsList={news} />;
  }

  return (
    <>
      {selectedYear && (
        <div className="bg-inherit py-8">
          <nav className="container">
            <ul className="flex space-x-6">
              {Array.isArray(links) &&
                links.length > 0 &&
                links.map((month) => (
                  <li key={month}>
                    <Link
                      href={`/archive/${selectedYear}/${month}`}
                      className="text-xl text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {month}
                    </Link>
                  </li>
                ))}
            </ul>
            {/* <ul className="flex space-x-6">
              {links.length > 0 &&
                links.map((months) => (
                  <li key={months}>
                    <Link
                      href={`/archive/${selectedYear}/${months}`}
                      className="text-xl text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {months}
                    </Link>
                  </li>
                ))}
            </ul> */}
          </nav>
        </div>
      )}
      {newsContent}
    </>
  );
}
