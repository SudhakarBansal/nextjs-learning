export default function ArchiveLayout({ archive, latest }) {
  return (
    <div className="min-h-screen p-8 text-gray-800 dark:text-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">News Archive</h1>

      {/* Archive Section */}
      <section className="mb-8">{archive}</section>

      {/* Divider Line */}
      <div className="border-t-8 rounded-lg border-gray-300 dark:border-gray-500 my-8" />

      {/* Latest Section */}
      <section>{latest}</section>
    </div>
  );
}
