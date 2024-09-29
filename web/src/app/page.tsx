'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { getCourses } from "../api/CourseApi";
import { Course } from "../types";

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);
  // TODO: Replace with path from db
  const imageUrl = '/resources/intro_to_etl/icon.png';

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourses();
      setCourses(courses);
    }

    fetchCourses();
  }, []);

  return (
    <main>
      <Typography variant="h5" component="h1" className="my-5 font-bold">
        Courses Available Now!
      </Typography>
      <div className="flex flex-row flex-wrap justify-start">
        {courses.map((course) => (
          <Link key={course.id} href={`/course/${course.id}`} className="w-full sm:w-1/2 lg:w-1/4 m-2">
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                image={imageUrl}
                alt={course.name}
                className="p-2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {course.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
