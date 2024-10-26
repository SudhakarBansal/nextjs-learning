"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error); // Logs error for debugging
  }, [error]);

  return (
    <div className="flex items-center justify-center bg-inherit">
      <div className="text-center p-6 max-w-md">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          An unexpected error occurred. Please try again later.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={reset}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Try Again
          </button>
          <Link href="/" className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-lg">
              Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
