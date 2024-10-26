import FormField from "./FormField";
import ImagePicker from "./ImagePicker";
export default function ShareMealForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField id="name" label="Your name" required />
        <FormField id="email" label="Your email" type="email" required />
      </div>
      <FormField id="title" label="Title" required />
      <FormField id="summary" label="Short Summary" required />
      <div>
        <label
          htmlFor="instructions"
          className="block text-lg font-medium dark:text-gray-200 text-gray-700"
        >
          Instructions
        </label>
        <textarea
          id="instructions"
          name="instructions"
          rows="10"
          required
          className="mt-1 p-2 w-full border dark:border-gray-600 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-700 outline-none"
        ></textarea>
      </div>
     <ImagePicker name={'image'}/>
      <button
        type="submit"
        className="w-full text-xl font-bold py-3 px-6 transition duration-300 ease-in-out bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-md hover:from-orange-500 hover:via-orange-600 hover:to-orange-500 hover:scale-95 hover:shadow-lg transform focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-60"
      >
        Share Meal
      </button>
    </form>
  );
}
