import Link from "next/link";

export default function MealNotFound() {
  return (
    <div className="flex items-center justify-center mt-32">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          News Not Found
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Unfortunately, we could not find the requested page or news data.
        </p>
        <Link
          href="/news"
          className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg"
        >
          Explore Other News
        </Link>
      </div>
    </div>
  );
}
