import MealItem from "./MealItem";

export default function MealsGrid({ meals }) {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <MealItem key={meal.slug} {...meal} />
        ))}
      </div>
    </main>
  );
}
