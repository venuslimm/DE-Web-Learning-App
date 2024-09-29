'use client';

import { useEffect, useState } from "react";
import { getCourse } from "@/api/CourseApi";
import { Course, IdProps } from "../../../types";
import { Box, Button } from "@mui/material";
import { nav } from "@/constants";
import Link from "next/link";

const CoursePage = ({ params: { id } }: IdProps) => {
  const [course, setCourse] = useState<Course | null>(null);

  // TODO: Get from db
  const courseDetails = {
    duration: 90,
    difficulty: 'Easy',
    rating: 4.5
  };

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
      <div className="flex flex-row">
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
        <div className="mx-5">
          <Button variant="contained" className="whitespace-nowrap my-5">
            <Link href={Object.values(nav)[0]}>
              Start Course Now!
            </Link>
          </Button>
          <Box sx={{ p: 2, border: '1px dashed grey' }}>
            <h2>Course Details</h2>
            <p>
              Duration:
              {Math.floor(courseDetails.duration / 60) > 0 && (
                ` ${Math.floor(courseDetails.duration / 60)} ${Math.floor(courseDetails.duration / 60) === 1 ? 'hour' : 'hours'}`
              )}
              {courseDetails.duration % 60 > 0 && (
                ` ${courseDetails.duration % 60} ${courseDetails.duration % 60 === 1 ? 'minute' : 'minutes'}`
              )}
            </p>
            <p>Difficulty: {courseDetails.difficulty}</p>
            <p>Rating: {courseDetails.rating}</p>
          </Box>
        </div>
      </div>
    )
  );
};

export default CoursePage;
