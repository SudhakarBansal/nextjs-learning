export default function HeaderShareMealsPage() {
    return (
      <header className="text-center my-20">
        <h1 className="text-5xl font-extrabold">
          Share your{" "}
          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-300 bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="text-lg dark:text-gray-300 text-gray-600 mt-2">
          Or any other meal you feel needs sharing!
        </p>
      </header>
    );
  }