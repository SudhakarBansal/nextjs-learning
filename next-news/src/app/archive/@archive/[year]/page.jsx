export default async function FilteredNewsPage({ params }) {
  const { year } = await params;
  return (
    <>
      <h1>hello - {year}</h1>
    </>
  );
}
