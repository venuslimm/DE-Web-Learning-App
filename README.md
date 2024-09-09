# DE Web Learning App
A gamified web learning platform for users to master data engineering, with a focus on building ETL pipelines and data visualizations, and with the potential to expand into other related topics within the realm of data engineering in the future.

## Directory
1. api
    
    Backend running on NestJS, with support of Prisma to connect to PostgreSQL

2. web

    Frontend running on NextJS, using MUI frontend library

3. compose.yml
  
    Running PostgreSQL, Mage.ai

## How to start up
Prerequisites:
- Docker Daemon

Make a copy of `.env` file from `template.env`:
```
cp template.env .env
```

To start containers:
```
docker compose up
```

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
