'use client';

import { useEffect, useState } from "react";
import { getCourse } from "@/api/CourseApi";
import { Course, IdProps } from "../../../types";
import { Box, Button, Typography, Paper, List, ListItem, ListItemText, CircularProgress } from "@mui/material";
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
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    ) : (
      <Box display="flex" flexDirection='column' py={'2rem'}>
        <Typography variant="h4" component="h1" gutterBottom>
          {course.name} ⚡
        </Typography>

        <Box display='flex' flexDirection={{ xs: 'column', md: 'row'}}>
          <Box flex={4} pr={2}>
            <Typography variant="body1" mb={3}>
              {course.description}
            </Typography>
            
            <Box mb={3}>
              <Typography variant="h6" component="h2" gutterBottom>
                In this course, you will learn 👩🏻‍💻📓✍🏻💡
              </Typography>
              {course.learning_objective ? (
                <List>
                  {Object.entries(course.learning_objective).map(([title, description], index) => (
                    <ListItem key={index}>
                      <ListItemText
                        primary={title}
                        secondary={description}
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Typography variant="body1">No learning objectives available.</Typography>
              )}
            </Box>
            
            <Box mb={3}>
              <Typography variant="h6" component="h2" gutterBottom>
                Prerequisites 📚
              </Typography>
              <Typography variant="body1">
                {course.prerequisite 
                  ? `${course.prerequisite}`
                  : 'No prerequisites required for this course.'
                }
              </Typography>
            </Box>

            <Typography variant="body1" mb={3}>{course.conclusion}</Typography>
          </Box>

          <Box flex={1} width={'100%'}>
            <Link href={Object.values(nav)[0]} passHref>
              <Button variant="contained" color="primary" fullWidth sx={{ mb: 3 }}>
                <Typography variant="button" color="inherit">
                  Start Now 🚀
                </Typography>
              </Button>
            </Link>

            <Paper variant="outlined" sx={{ p: 2 }}>
              <ListItem>
                <ListItemText
                  primary="Duration 🕒"
                  secondary={
                    <>
                      {Math.floor(courseDetails.duration / 60) > 0 && (
                        ` ${Math.floor(courseDetails.duration / 60)} ${Math.floor(courseDetails.duration / 60) === 1 ? 'hour' : 'hours'}`
                      )}
                      {courseDetails.duration % 60 > 0 && (
                        ` ${courseDetails.duration % 60} ${courseDetails.duration % 60 === 1 ? 'minute' : 'minutes'}`
                      )}
                    </>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Difficulty 💪"
                    secondary={courseDetails.difficulty}
                  />
              </ListItem>
              <ListItem>
                <ListItemText
                    primary="Rating ⭐"
                    secondary={courseDetails.rating}
                  />
              </ListItem>
            </Paper>
          </Box>
        </Box>
      </Box>
    )
  );
};

export default CoursePage;
