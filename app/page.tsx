import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
        Course Catalog
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8">
        Welcome! Browse our curated selection of courses covering modern web
        development, databases, security, and more.
      </p>
      <Link
        href="/courses"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        Browse Courses
      </Link>
    </main>
  );
}
