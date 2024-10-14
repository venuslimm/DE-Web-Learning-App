'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import { Box, Card, CardMedia, CardContent, Typography, CircularProgress } from '@mui/material';
import { getCourses } from "../api/CourseApi";
import { Course } from "../types";

export default function CourseCatalogue() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  // TODO: Replace with path from db
  const imageUrl = '/resources/intro_to_etl/icon.png';

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await getCourses();
        setCourses(courses);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <>
      <Typography variant="h6" component="h1" sx={{ py: 2, fontWeight: 'bold' }}>
        🏋️‍♂️ Courses Available Now!
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      ) : courses.length === 0 ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
            No courses available
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'start',
          }}
        >
          {courses.map((course) => (
            <Box
              key={course.id}
              sx={{
                width: {
                  xs: '100%', // 1 card per row on extra-small screens
                  sm: '50%',  // 2 cards per row on small screens
                  md: '33%',  // 3 cards per row on medium screens
                  lg: '25%',  // 4 cards per row on large screens
                },
                p: 1,
              }}
            >
              <Link href={`/course/${course.id}`} style={{ textDecoration: 'none' }}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={course.name}
                    className="p-2"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {course.name}
                    </Typography>
                    <Typography variant="body2">
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
}