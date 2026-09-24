import { notFound } from "next/navigation";
import { getCourse, getCourses } from "@/lib/courses";
import LikeButton from "@/components/LikeButton";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({ params }: Props) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <div className="mb-2">
        <span
          className={`text-xs font-medium px-2 py-1 rounded-full ${
            course.isElective
              ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
              : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
          }`}
        >
          {course.isElective ? "Elective" : "Required"}
        </span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-4 mb-3">
        {course.title}
      </h1>

      <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
        {course.description}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
        Credits: <span className="font-semibold">{course.credits}</span>
      </p>

      <LikeButton initialLikes={course.likes} />
    </main>
  );
}
