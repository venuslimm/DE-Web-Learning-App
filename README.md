# DE Web Learning App
A gamified web learning platform for users to master data engineering, with a focus on building ETL pipelines and data visualizations, and with the potential to expand into other related topics within the realm of data engineering in the future.

## Directory (Important files/folders)
1. db
    
    Backend running on NestJS, with support of Prisma to connect to PostgreSQL and returns data from database.

2. execution

    Backend running on NestJS. Creates new child process everytime its called to execute python code in precreated virtual python environment.

3. llm

    Backend running on NestJS. To communicate to OpenAI API.

4. steaming-data

    Backend that publishes messages to 'healthcare-topic' topic in the Docker Kafka. To be consumed by Mage.ai in the streaming guide.

5. web

    Frontend running on NextJS, using MUI frontend library.

6. compose.yml
  
    Runs all the services mentioned in points 1-5 in their own independent containers. Also runs Zookeeper,  Kafka, Mage.ai, and PostgreSQL.

7. init-scripts

    Contains scripts that will be executed when docker is bootup. Currently, it initialises tables and data in the database.

## How to start up

A full guide on how to setup and run this app locally on Docker can be found in `.\Setup Guide.docx`.

**Prerequisites:**
- Docker Desktop (Docker Daemon) (Make sure its running)

**Steps for initial setup to run on Docker:**

For subsequent setup, make sure Docker is running and follow only steps 2 and 3.

1. Make a copy of `.env` file from `template.env` in the root folder. Replace `OPENAI_API_KEY` with your own API key:
    ```
    cp template.env .env
    ```

2. To start containers:
    ```
    docker compose up
    ```

3. To access the app, open Google Chrome browser and enter `http://localhost:3000/`.

## Database management related information
In the future, to reinit database (clears db, reruns `init-script/init.sql`):
```
docker-compose down --volumes
cd api
// if you update schema.prisma
npx prisma db pull
npx prisma generate
OR
// if you update db
npx prisma migrate dev --name init
npx prisma generate
```

To enter psql and see its contents (where postgres is the name of the psql container):
```
docker exec -it postgres psql
```

In psql, connect to database (e.g. db) in psql:
```
\c db
```
