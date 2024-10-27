import { getMealBySlug } from "@/actions/meals";
import MealRecipe from "@/components/MealDetails/MealRecipe";
import MealsDetailsHeader from "@/components/MealDetails/MealsDetailsHeader";
import { notFound } from "next/navigation";

export default async function MealDetailsPage({ params }) {
  const meal = await getMealBySlug(params.mealsSlug);

  if (!meal) {
    notFound();
  }
  const recipie = meal.instructions
    ? meal.instructions.replace(/\n/g, "<br/>")
    : "";

  return (
    <>
      <MealsDetailsHeader
        image={meal.image}
        title={meal.title}
        creator={meal.creator}
        summary={meal.summary}
      />
      <MealRecipe recipie={recipie} />
    </>
  );
}
