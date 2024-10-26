export default function Loader() {
    return (
      <div className="flex items-center justify-center bg-gray-100 dark:bg-black">
        <div className="flex flex-col items-center">
          {/* Spinner */}
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          
          {/* Loading Text */}
          <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Loading...
          </p>
        </div>
      </div>
    );
  }
  