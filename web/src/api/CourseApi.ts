import { axiosCourse, getConfig } from './utils';
import { Course } from '../types';

export const getCourses = async (): Promise<Course[]> => {
  try {
    const response = await axiosCourse.get('/course', getConfig());
    console.log("Courses fetched from API:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};

export const getCourse = async (id: string): Promise<Course | null> => {
  try {
    const response = await axiosCourse.get(`/course/${id}`, getConfig());
    console.log("Course fetched from API:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
};

// TODO: Change fn name if this becomes dynamic
export const verifyGuideCompletion = async (id: string): Promise<boolean | null> => {
  try {
    const response = await axiosCourse.get(`/course/verify/${id}`, getConfig());
    console.log("Status fetched from API:", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching status:", error);
    return null;
  }
};
