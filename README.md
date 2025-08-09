# EventMatch
Event and networking management platform. Allows users to create and discover events, confirm attendance, and connect with people who share the same interests.

---
## 1. Analysis and design
### Users:
- Register with Name, Email and password.
- Profile photo.
### Events
- Public events
- Everyone can create an event.
- Mandatory data (Title, Description, Ubication, Date and tags).
### RSVP
- Only attendance.
- Can confirm and cancel.
### Tags
- Predefined tags.
- As many tags as User wants.
## Entity-Relationship Model
![Texto alternativo](/imgs/EventMatch.png)
## API Contract
### Auth
- **POST**  /auth/register -> Create an user
- **POST**  /auth/login -> Returns JWT
### Users
- **GET**  /users/profile -> Retrieve authenticated user's profileprofile
- **PATCH**  /users/profile/tags -> set user tags
- **GET**  /users -> List all users
### Events
- **POST**  /events -> Create an event
- **GET**  /events -> Return all events
- **GET**  /events/:id -> Event details
- **GET**  /events/:id/suggestions -> Suggested attendees
### RSVP
- **POST**  /events/:id/rsvp -> Confirm attendance
- **DELETE**  /events/:id/rsvp -> Cancel attendance 
- **GET**  /events/:id/attendees -> Return attendees

## 2. Backend: NestJS + Prisma + PostgreSQL

### Make sure you have Node.js installed

- Check Node.js version: `node -v`  
- Check npm version: `npm -v`  

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/en).

---

### Install NestJS CLI

- Install globally: `npm i -g @nestjs/cli`  
- Verify installation: `nest --version`  

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/en).

---

### Create Project

- Create a new project with:  
  `nest new EventMatch`  
- The CLI will ask you which package manager to use: **npm** or **yarn**  
- Navigate to your project folder with:  
  `cd folder-name`

### Setting up the Project

- Add a `.env` file for environment variables. Here, I set the port to `3000`.
- Modify `main.ts` to display a message with the server URL:  
  `"Application is running on: http://localhost:3000"`

### Environment Variables

To run the backend application properly, the following environment variables need to be set:

| Variable       | Description                             | Example                                               |
|----------------|-------------------------------------|-------------------------------------------------------|
| `PORT`          | Port on which the backend server will run | `3000`                                                |
| `DATABASE_URL`  | PostgreSQL connection string           | `postgresql://user:password@localhost:5432/dbname?schema=public` |
| `JWT_SECRET`    | Secret key used to sign JWT tokens     | `yourSuperSecretKey123!`                              |
| `JWT_EXPIRATION`| JWT token expiration time (e.g., in seconds or duration format) | `3600s` (1 hour)                                      |
| `NODE_ENV`      | Application environment (development, production, etc.) | `development`                                         |

---

### Notes

- Make sure to keep `JWT_SECRET` secure and never commit it to source control.
- Use a `.env.example` file to share variable names without exposing sensitive data.
- Adjust `DATABASE_URL` according to your local or production PostgreSQL setup.

## Setting up Database: PostgreSQL and Prisma

### 1. Make `psql` Available in Terminal (Windows)
If `psql` is not recognized as a command, add PostgreSQL's `bin` folder to your PATH:

1. Find where PostgreSQL is installed. By default:
   ```
   C:\Program Files\PostgreSQL\<version>\bin
   ```
   Example: `C:\Program Files\PostgreSQL\16\bin`

2. Go to **System Properties** → **Advanced** → **Environment Variables**.

3. In **System Variables**, edit `Path` and add the `bin` folder path.

4. Open a new terminal and test:
   ```bash
   psql -U postgres
   ```

---

### 2. Access the PostgreSQL Console
```bash
psql -U postgres
```
*(It may ask for the password you set during installation.)*

---

### 3. Create a New Database
Inside the PostgreSQL console:
```sql
CREATE DATABASE name_bd;
```

---

### 4. Verify the Database
```sql
\l
```

---

### 5. (Optional) Connect to the Database
```sql
\c name_bd
```

---

### 6. (Optional) Create a New User
```sql
CREATE USER my_user WITH PASSWORD 'my_password';
GRANT ALL PRIVILEGES ON DATABASE name_bd TO my_user;
```

---

# Setting up Prisma with PostgreSQL

## 1. Install Prisma and Prisma Client
Install Prisma CLI (development dependency) and Prisma Client (runtime dependency):

```bash
npm install --save-dev prisma
npm install @prisma/client
```

---

## 2. Initialize Prisma in Your Project
```bash
npx prisma init
```
This will create:
```
prisma/
  schema.prisma
.env
```

---

## 3. Configure Database Connection
In your `.env` file, set the database connection string:
```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/DATABASE_NAME?schema=public"
```

Replace:
- `USER` → your PostgreSQL username
- `PASSWORD` → your PostgreSQL password
- `DATABASE_NAME` → the name of your database

---

## 4. Edit `schema.prisma` with Your Models
Open `prisma/schema.prisma` and replace its content with:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model role {
  id_role    String   @id @default(uuid())
  role       String
  descripcion String?
  users      users[]

  @@map("role")
}

model users {
  id         String    @id @default(uuid())
  name       String
  id_role    String?
  email      String    @unique
  password   String
  createdAt  DateTime  @default(now())
  updatedAt  DateTime  @updatedAt

  role       role?     @relation(fields: [id_role], references: [id_role])
  user_tags  user_tag[]
  events     event[]   @relation("UserEvents")
  rsvps      rsvp[]

  @@map("users")
}

model tags {
  id_tag     String     @id @default(uuid())
  tag        String
  user_tags  user_tag[]
  event_tags event_tags[]

  @@map("tags")
}

model user_tag {
  id_user String
  id_tag  String

  user users @relation(fields: [id_user], references: [id])
  tag  tags  @relation(fields: [id_tag], references: [id_tag])

  @@id([id_user, id_tag])
  @@map("user_tag")
}

model event {
  id_event   String      @id @default(uuid())
  title      String
  description String?
  location   String?
  date       DateTime
  id_creator String?
  createdAt  DateTime    @default(now())
  updatedAt  DateTime    @updatedAt

  creator    users?      @relation("UserEvents", fields: [id_creator], references: [id])
  event_tags event_tags[]
  rsvps      rsvp[]

  @@map("event")
}

model event_tags {
  id_event String
  id_tag   String

  event event @relation(fields: [id_event], references: [id_event])
  tag   tags  @relation(fields: [id_tag], references: [id_tag])

  @@id([id_event, id_tag])
  @@map("event_tags")
}

model rsvp {
  id_rsvp  String   @id @default(uuid())
  id_user  String?
  id_event String?
  status   String

  user  users? @relation(fields: [id_user], references: [id])
  event event? @relation(fields: [id_event], references: [id_event])

  @@map("rsvp")
}
```

---

## 5. Create Tables in the Database
Since your database is empty, run:
```bash
npx prisma migrate dev --name init
```
This will:
- Create all the tables in PostgreSQL based on your schema.
- Generate Prisma Client.

---

## 6. Verify Tables
To check your tables in PostgreSQL, open `psql`:
```bash
psql -U postgres -d DATABASE_NAME
```
Then:
```sql
\dt
```

---

## 7. Using Prisma Client in Your Code
Example usage:
```ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const roles = await prisma.role.findMany();
  console.log(roles);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
```

---



