import { getMealBySlug } from "@/actions/meals";
import Image from "next/image";

export default function MealDetailsPage({ params }) {
  const meal = getMealBySlug(params.mealsSlug);
  const recipie = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 h-[27rem] relative overflow-hidden">
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start md:px-10">
          <h1 className=" text-4xl md:text-5xl font-extrabold uppercase md:leading-snug">
            {meal.title}
          </h1>
          <p className="bg-gradient-to-r from-orange-600 via-orange-400 to-orange-300 bg-clip-text text-transparent text-xl md:text-2xl my-4 tracking-wide">
            by {meal.creator}
          </p>
          <div className="flex flex-col sm:flex-row text-lg">
            {meal.summary}
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center mt-10 sm:mt-20 xl:mt-32 md:p-9 p-6">
        <h2 className="text-3xl md:text-4xl text-black dark:text-white font-bold mb-6">
          Recipe
        </h2>
        <p className=" bg-white dark:bg-gray-800 rounded-lg shadow-md p-7" dangerouslySetInnerHTML={{ __html: recipie }}></p>
      </main>
    </>
  );
}
