import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>New page</h1>
      <Link href="/news/fist-item">fist links</Link>
      <Link href="/news/second-item">second links</Link>
      <Link href="/news/third-item">third links</Link>
    </>
  );
}
