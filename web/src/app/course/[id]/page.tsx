'use client';

import { useEffect, useState } from "react";
import { getCourse } from "@/api/CourseApi";
import { Course } from "../../../types";

// TODO: extract out
interface CoursePageProps {
  params: {
    id: string;
  };
}

const CoursePage = ({ params: { id } }: CoursePageProps) => {
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const fetchCourse = async () => {
      const course = await getCourse(id);
      setCourse(course);
    }

    fetchCourse();
  }, [id]);

  return (
    !course ? (
      <div>Loading...</div>
    ) : (
      <div>
        <h1 className="my-5">{course.name}</h1>
        <p className="mb-5">{course.description}</p>
        <div className="mb-5">
          <h2 className="mb-1">
            In this course, you will learn:
          </h2>
          {course.learning_objective ? (
            <ul>
              {Object.entries(course.learning_objective).map(([title, description], index) => (
                <li key={index}>
                  <strong>{title}:</strong> {description}
                </li>
              ))}
            </ul>
          ) : (
            <p>No learning objectives available.</p>
          )}
        </div>
        <div className="mb-5">
          <h2 className="mb-1">
            Prerequisites
          </h2>
          <p>
            {course.prerequisite 
              ? `${course.prerequisite}`
              : 'No prerequisites required for this course.'
            }
          </p>
        </div>
        <p>{course.conclusion}</p>
      </div>
    )
  );
};

export default CoursePage;
