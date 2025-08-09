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