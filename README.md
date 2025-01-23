# Learning Management System (LMS)
# Link to  <a href="https://github.com/margamvinay7/lmsServer">LMS Server</a>


## Overview

This is a comprehensive Learning Management System (LMS) designed to provide robust functionality for administrators, students, and trainers. The LMS includes an admin dashboard with features like course management, community interaction, live classes, doubt clearing, and analytics. Future development will add pages for students, trainers, and other LMS-specific functionalities.

---

## Current Features

### Admin Pages

1. **Dashboard Page**: Overview of key metrics and insights.
2. **Course Page**: Manage courses, including creation, updates, and deletion.
3. **Community Page**: Facilitate discussions and engagement among users.
4. **Chat Page**: Real-time messaging capabilities.
5. **Live Classes Page**: Organize and manage live class sessions.
6. **Doubt Classes Page**: Schedule and manage doubt-clearing sessions.
7. **Analytics Page**: Visualize data and track performance metrics.

### Upcoming Features

- **All Students Page**: Manage and monitor student data.
- **Trainers Page**: Manage trainer profiles and activities.
- Additional LMS functionalities to enhance the user experience.

---

## Tech Stack

- **Frontend**:
  - [Next.js](https://nextjs.org/): React framework for server-rendered and static web applications.
  - [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework for styling.
  - [Shadcn UI](https://shadcn.dev/): Pre-built components for streamlined UI development.
- **Backend**:
  - [Node.js](https://nodejs.org/): JavaScript runtime for server-side development.
  - [Express.js](https://expressjs.com/): Web framework for Node.js.
  - [PostgreSQL](https://www.postgresql.org/): Relational database management system.
  - [Docker](https://www.docker.com/): Containerization for consistent development and deployment environments.

---

## Installation and Setup

### Prerequisites

- Node.js (v16 or higher)
- Docker
- PostgreSQL

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-name/lms.git
   cd lms
   ```

2. Install frontend dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:

   ```bash
   cd ../backend
   npm install
   ```

4. Set up environment variables for both frontend and backend:

   - Frontend: `.env.local`
   - Backend: `.env`

   Example `.env` file for the backend:

   ```env
   DATABASE_URL=postgresql://username:password@localhost:5432/lms
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

5. Run the application:

   - Start PostgreSQL using Docker:
     ```bash
     docker-compose up -d
     ```
   - Start the backend server:
     ```bash
     cd backend
     npm run dev
     ```
   - Start the frontend application:
     ```bash
     cd ../frontend
     npm run dev
     ```

6. Open the application in your browser:

   ```
   http://localhost:3000
   ```

---

<p align="center">
  <img src="./designs/adminDashboard.png" alt="Swagger UI" style="width:800px; height:400px;">
  <img src="./designs/community.png" alt="Swagger UI" style="width:800px; height:400px;">
  <img src="./designs/chat.png" alt="Swagger UI" style="width:800px; height:400px;">
  <img src="./designs/adminCourses.png" alt="Swagger UI" style="width:800px; height:400px;">
  <img src="./designs/adminLiveClassesSchedule.png" alt="Swagger UI" style="width:800px; height:400px;">

</p>

---


## Contribution Guidelines

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

