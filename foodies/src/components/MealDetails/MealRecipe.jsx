export default function MealRecipe({ recipie }) {
  return (
    <main className="flex flex-col items-center mt-10 sm:mt-20 md:p-9 p-6">
      <h2 className="text-3xl md:text-4xl text-black dark:text-white font-bold mb-6">
        Recipe
      </h2>
      <p
        className=" bg-white dark:bg-gray-800 rounded-lg shadow-md p-7"
        dangerouslySetInnerHTML={{ __html: recipie }}
      ></p>
    </main>
  );
}
