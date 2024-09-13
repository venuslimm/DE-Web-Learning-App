# DE Web Learning App
A gamified web learning platform for users to master data engineering, with a focus on building ETL pipelines and data visualizations, and with the potential to expand into other related topics within the realm of data engineering in the future.

## Directory
1. db
    
    Backend running on NestJS, with support of Prisma to connect to PostgreSQL and returns data from database.

2. execution

    Backend running on NestJS. Creates new child process everytime its called to execute python code in precreated virtual python environment.

3. llm

    Backend running on NestJS. To communicate to OpenAI API.

2. web

    Frontend running on NextJS, using MUI frontend library.

3. compose.yml
  
    Running PostgreSQL, Mage.ai.

## How to start up
**Prerequisites:**
- Docker Daemon (Make sure its running)

**Steps for initial setup:**

For subsequent setup, make sure Docker is running and follow only steps 4 and 5.

1. Make a copy of `.env` file from `template.env` in the root folder. Replace `OPENAI_API_KEY` with your own API key:
    ```
    cp template.env .env
    ```

2. Make a copy of `.env` file from `template.env` in the `db` folder:
    ```
    cd db
    cp template.env .env
    ```

3. Create virtual python environment in `execution` folder:
    ```
    cd ../execution
    python3 -m venv myenv
    source myenv/bin/activate // for unix
    myenv\Scripts\activate // for windows
    pip install psycopg2 plotly pandas
    ```
4. To start containers:
    ```
    docker compose up
    ```

5. To access the app, open Google Chrome browser and enter `http://localhost:3000/`.

## Management related information
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
