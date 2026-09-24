export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        About This Catalog
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        This course catalog is the semester project for the Advanced Web
        Technologies course. It is built with Next.js 16 using the App Router,
        TypeScript, and Tailwind CSS.
      </p>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        The project demonstrates key concepts from the course: file-based
        routing, Server and Client Components, dynamic routes, and static
        generation with <code className="font-mono text-sm">generateStaticParams</code>.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Each lab builds on the previous one — by the end of the semester this
        catalog will be backed by a real FastAPI backend and a PostgreSQL
        database.
      </p>
    </main>
  );
}
