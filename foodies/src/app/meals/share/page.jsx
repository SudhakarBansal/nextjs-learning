import HeaderShareMealsPage from "@/components/ShareMeals/HeaderShareMeals";
import ShareMealForm from "@/components/ShareMeals/ShareMealsForm";

export default function ShareMealPage() {
  return (
    <>
      <HeaderShareMealsPage />
      <main className="max-w-2xl mx-auto p-6 dark:bg-gray-800 bg-white shadow-lg rounded-lg">
        <ShareMealForm />
      </main>
    </>
  );
}
