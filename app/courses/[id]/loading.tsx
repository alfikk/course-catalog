export default function Loading() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="animate-pulse">
        <div className="h-4 w-16 bg-gray-200 dark:bg-gray-700 rounded-full mb-6" />
        <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded mb-2" />
        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded mb-8" />
        <div className="h-10 w-28 bg-gray-200 dark:bg-gray-700 rounded-lg" />
      </div>
      <p className="mt-6 text-sm text-gray-400 dark:text-gray-500">
        Loading course…
      </p>
    </main>
  );
}
