"use client";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="flex items-center justify-center bg-inherit">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          An error occured...
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          You might have entered {error.message}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Try Again
          </button>
          <Link
            href="/archive"
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
