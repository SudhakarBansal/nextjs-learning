import Link from "next/link";

const MealsHeader = () => {
  return (
    <header className="bg-gray-100 dark:bg-black text-left">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-gray-800 dark:text-gray-100">
        Delicious meals, created{" "}
        <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 bg-clip-text text-transparent">
          by you
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
        Choose your favourite recipe and cook it yourself. It's easy and fun.
      </p>
      <p className="mt-6">
        <Link
          href="/meals/share"
          className="text-white bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 px-5 py-3 text-xl rounded-lg font-bold sm:mt-0 mt-4"
        >
          Share your favourite recipe
        </Link>
      </p>
    </header>
  );
};

export default MealsHeader;
