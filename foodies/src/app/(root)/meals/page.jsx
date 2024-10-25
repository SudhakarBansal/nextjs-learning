import MealsHeader from "@/components/Meals/Header";
import MealsGrid from "@/components/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";

const Mealspage = async() => {

    const meals = await getMeals();

  return (
    <div className="px-6 md:px-32 md:py-16">
      <MealsHeader/>
      <MealsGrid meals={meals}/>
    </div>
  );
};

export default Mealspage;
