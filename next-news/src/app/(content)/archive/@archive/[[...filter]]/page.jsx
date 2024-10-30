import Link from "next/link";
import NewsList from "@/components/News/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/helper/news";

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let news = [];
  let links = [];
  let newsContent;

  // Validate filters and set up content
  if (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) {
    throw new Error("Invalid Year");
  }
  if (
    selectedMonth &&
    !getAvailableNewsMonths(selectedYear)?.includes(+selectedMonth)
  ) {
    throw new Error("Invalid Month");
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
  } else if (selectedYear) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear) || [];
  }

  newsContent =
    news.length > 0 ? (
      <NewsList newsList={news} />
    ) : (
      <p>No news found for the selected period</p>
    );

  return (
    <>
      {/* Month Navigation */}
      {selectedYear && links.length > 0 && (
        <div className="bg-inherit py-8">
          <nav className="container">
            <ul className="flex space-x-6">
              {links.map((month) => (
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
          </nav>
        </div>
      )}

      {/* News Content */}
      {newsContent}
    </>
  );
}
