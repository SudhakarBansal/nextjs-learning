export default function Section({ title, content }) {
  return (
    <section className="flex flex-col items-center text-center mt-10 md:p-9 bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
      <h2 className="text-3xl md:text-4xl text-black dark:text-white font-bold mb-6">
        {title}
      </h2>
      {content.map((paragraph, index) => (
        <p
          key={index}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 my-2"
        >
          {paragraph}
        </p>
      ))}
    </section>
  );
}
