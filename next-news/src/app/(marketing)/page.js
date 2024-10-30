import logo from "@/../assets/logo.jpg";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-3xl text-center space-y-6">
        {/* Logo */}
        <img
          src={logo.src}
          alt="A newspaper"
          className="w-32 h-32 mx-auto rounded-full shadow-lg"
        />

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
          A News Site For The Next Generation
        </h1>

        {/* Introductory Text */}
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Next News is here to deliver you all the latest news - concise &
          unbiased!
        </p>

        {/* Additional Description */}
        <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed">
          NextNews aims to provide you with the latest news in a concise and
          unbiased manner. We strive to deliver the news in a way that is easy
          to understand and to the point. We want to keep you informed without
          overwhelming you with unnecessary information.
        </p>

        <p className="text-md text-gray-700 dark:text-gray-300 leading-relaxed">
          We employ a team of dedicated journalists who are committed to
          delivering the news in a fair and unbiased manner. Our team is
          passionate about keeping you informed and up to date with the latest
          news.
        </p>

        {/* CTA Link */}
        <p>
          <Link
            href="/news"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Read the latest news
          </Link>
        </p>
      </div>
    </div>
  );
}
