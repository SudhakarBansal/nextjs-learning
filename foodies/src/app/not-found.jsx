import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href='/' className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg">
            Go Back Home
        </Link>
      </div>
    </div>
  );
}
