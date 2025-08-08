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
