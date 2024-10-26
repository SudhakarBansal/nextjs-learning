import { getMealBySlug } from "@/actions/meals";
import MealRecipe from "@/components/MealDetails/MealRecipe";
import MealsDetailsHeader from "@/components/MealDetails/MealsDetailsHeader";

export default function MealDetailsPage({ params }) {
  const meal = getMealBySlug(params.mealsSlug);
  const recipie = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <MealsDetailsHeader image={meal.image} title={meal.title} creator={meal.creator} summary={meal.summary}/>
      <MealRecipe recipie={recipie} />
    </>
  );
}
