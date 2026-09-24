import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link
      href={`/courses/${id}`}
      className="block rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm hover:shadow-md hover:border-blue-400 transition-all"
    >
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {description}
      </p>
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
        <span>{credits} credits</span>
        <span>❤ {likes}</span>
      </div>
    </Link>
  );
}
