import Link from "next/link";
import { getAvailableNewsYears } from "../../../helper/news";

export default function ArchivePage() {
  const years = getAvailableNewsYears();

  return (
    <header className="bg-inherit py-8">
      <nav className="container">
        <ul className="flex space-x-6">
          {years.map((year) => (
            <li key={year}>
              <Link
                href={`/archive/${year}`}
                className="text-xl text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {year}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
