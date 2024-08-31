# FYP

## Directory
1. api
    
    Backend running on NestJS, with support of Prisma to connect to PostgreSQL

2. web

    Frontend running on NextJS

3. compose.yml
  
    Running PostgreSQL

## How to start up
Prerequisites:
- Docker Daemon

Make a copy of `.env` file from `template.env`:
```
cp template.env .env
```

To start database:
```
docker compose up
```

To enter database and see its contents (where postgres is the name of the database):
```
docker exec -it postgres psql
```

In the future, to reinit database:
```
docker-compose down --volumes
```