export default function NewsDetailsPage({ params }) {
  const news = params.newsSlug;
  return (
    <>
      <h1>New Details page {news}</h1>
    </>
  );
}
