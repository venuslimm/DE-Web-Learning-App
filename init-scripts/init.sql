SET search_path TO public;

CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS "course" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    learning_objective JSONB NOT NULL,
    prerequisite TEXT DEFAULT NULL,
    conclusion TEXT NOT NULL
);

-- CREATE TYPE course_section_type AS ENUM (
--     'text',
--     'text_iframe'
-- );
-- CREATE TABLE IF NOT EXISTS course_section (
--     id SERIAL PRIMARY KEY,
--     course_id INT REFERENCES course(id),
--     name VARCHAR(100),
--     description TEXT NOT NULL,
--     -- type course_section_type NOT NULL,
--     iframe_url TEXT DEFAULT NULL
-- );

INSERT INTO "user" (name, email) VALUES 
('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com')
ON CONFLICT DO NOTHING;

INSERT INTO "course" (name, description, learning_objective, conclusion, prerequisite) VALUES 
('Introduction to ETL', 
'Unlock the power of data with our introductory course on ETL (Extract, Transform, Load) using Mage.ai. This course is designed for beginners who want to understand the fundamentals of ETL processes and how to implement them using Mage.ai, a powerful and user-friendly tool for building and managing data pipelines.',
'{
    "The Basics of ETL": "Understand the core concepts of ETL and its importance in data processing and analytics.",
    "Introduction to Mage.ai": "Get acquainted with the Mage.ai platform, its features, and how it simplifies the ETL process.",
    "Building ETL Pipelines": "Learn how to extract data from various sources, transform it to meet business needs, and load it into your desired destination using Mage.ai.",
    "Data Transformation Techniques": "Explore different data transformation methods, including cleaning, filtering, and aggregating data to prepare it for analysis.",
    "Automation and Scheduling": "Discover how to automate ETL tasks and schedule pipelines for regular data processing.",
    "Hands-On Guided Experience": "Apply your knowledge by building real-world ETL pipelines on Mage.ai."
}'::jsonb,
'By the end of this course, youll have a solid foundation in ETL processes and be equipped with the skills to build and manage your own data pipelines using Mage.ai. Whether youre a data enthusiast, aspiring data engineer, or someone looking to enhance their data handling skills, this course will provide you with the essential tools to succeed.',
'No prior experience with ETL or Mage.ai is required. Basic familiarity with data concepts and Python is helpful but not necessary.'
)
ON CONFLICT DO NOTHING;