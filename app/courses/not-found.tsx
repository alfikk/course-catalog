import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center">
      <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
        Course not found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        The course you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/courses"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
      >
        Back to Courses
      </Link>
    </main>
  );
}
