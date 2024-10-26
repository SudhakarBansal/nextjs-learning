export default function Section({ title, content }) {
  return (
    <section className="flex flex-col sm:items-start xl:items-center xl:text-center sm:text-start mt-10 md:py-9 bg-white dark:bg-inherit py-6">
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
