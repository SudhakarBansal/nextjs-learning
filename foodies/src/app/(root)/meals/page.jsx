import MealsHeader from "@/components/Meals/Header";
import MealsGrid from "@/components/Meals/MealsGrid";

const Mealspage = () => {
  return (
    <div className="px-6 md:px-32 md:py-16">
      <MealsHeader/>
      <MealsGrid meals={[]}/>
    </div>
  );
};

export default Mealspage;
