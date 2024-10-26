import { Suspense } from "react";
import MealsHeader from "@/components/Meals/Header";
import Loader from "../../components/Common/loader";
import FetchMeals from "@/components/Meals/FetchMeals";

const Mealspage = async () => {
  return (
    <div className="">
      <MealsHeader />
      <Suspense fallback={<Loader />}>
        <FetchMeals/>
      </Suspense>
    </div>
  );
};

export default Mealspage;
