import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        All Courses
      </h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </main>
  );
}
