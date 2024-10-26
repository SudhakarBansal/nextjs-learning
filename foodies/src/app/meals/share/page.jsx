export default function ShareMealPage() {
  return (
    <>
      <header className="text-center my-20">
        <h1 className="text-5xl font-extrabold">
          Share your{" "}
          <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-300 bg-clip-text text-transparent">
            favorite meal
          </span>
        </h1>
        <p className="text-lg dark:text-gray-300 text-gray-600 mt-2">
          Or any other meal you feel needs sharing!
        </p>
      </header>
      <main className="max-w-2xl mx-auto p-6 dark:bg-gray-800 bg-white shadow-lg rounded-lg">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium dark:text-gray-200 text-gray-700"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 p-2 w-full border dark:border-gray-600 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-700 outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium dark:text-gray-200 text-gray-700"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border dark:border-gray-600 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-700 outline-none"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium dark:text-gray-200 text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              className="mt-1 p-2 w-full border dark:border-gray-600 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-700 outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="summary"
              className="block text-lg font-medium dark:text-gray-200 text-gray-700"
            >
              Short Summary
            </label>
            <input
              type="text"
              id="summary"
              name="summary"
              required
              className="mt-1 p-2 w-full border dark:border-gray-600 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-700 outline-none"
            />
          </div>
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
          <div className="mb-4">
            <label className="block text-lg font-medium dark:text-gray-200 text-gray-700">
              Image Picker
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="mt-1 p-2 w-full border dark:border-gray-600 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 dark:bg-slate-700 outline-none"
            />
          </div>
          <p>
            <button
              type="submit"
              className="w-full text-xl font-bold py-3 px-6 transition duration-300 ease-in-out bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-md hover:from-orange-500 hover:via-orange-600 hover:to-orange-500 hover:scale-95 hover:shadow-lg transform focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-60"
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
}
