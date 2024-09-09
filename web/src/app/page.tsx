'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import { getCourses } from "../api/CourseApi";
import { Course } from "../types";

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourses();
      setCourses(courses);
    }

    fetchCourses();
  }, []);

  return (
    <main>
      <h1 className="text-danger">Hello Bootstrap</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`/course/${course.id}`}>
              {course.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
