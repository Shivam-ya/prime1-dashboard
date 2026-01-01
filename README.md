# Prime1 – Client Dashboard Web Application

Prime1 is a full-stack web application featuring a secure authentication system and a modern, interactive dashboard. Built with the MERN stack 
(MongoDB, Express, React, Node.js), this project allows users to manage tasks, update roles, and experience a seamless UI/UX designed for productivity.

# Project Overview
This project was developed to demonstrate full-stack integration, focusing on:

**Secure Authentication:** JWT-based login and signup flow.
**Dynamic Dashboard:** Real-time state management for tasks and user profiles.
**Modern UI:** A futuristic dark-themed interface built for responsiveness.

# Features

# Authentication

**Secure Signup & Login:** Validation for email and password.
**Protected Routes:** Only authenticated users can access the dashboard.
**JWT Integration:** Secure token-based session management stored in `localStorage`.
**Logout:** Complete session clearing and redirection.

# Dashboard Functionality

**Profile Management:** View and edit user roles dynamically.
**Task Management:** View assigned work, edit task descriptions, and mark tasks as completed.
**Persistent UI:** Fixed layout design for a smooth scrolling experience.

# Technologies Used

| Layer | Technologies |
| --- | --- |
| **Frontend** | React (Vite), React Router DOM, Context API, CSS3 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Security** | JWT (JSON Web Tokens), bcryptjs |
| **Development** | Dotenv, CORS |

# Folder Structure

```text
prime1/
├── client/                # Frontend (React + Vite)
│   ├── src/
│   │   ├── pages/         # Login, Signup, Dashboard
│   │   ├── components/    # ProtectedRoute, Layout components
│   │   ├── context/       # AuthContext for global state
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
├── server/                # Backend (Node + Express)
│   ├── models/            # Mongoose Schemas (User, Task)
│   ├── routes/            # API Endpoints
│   ├── middleware/        # Auth verification middleware
│   ├── index.js           # Server entry point
│   └── package.json
└── README.md

# Setup & Installation

# 1. Clone the Repository

git clone https://github.com/Shivam-ya/prime1-dashboard.git
cd prime1

# 2. Backend Setup

Create a `.env` file in the `server` directory and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_random_secret_key


# Install dependencies and start the server:
cd server
npm install
node index.js

*Backend running on: `http://localhost:5000*`

 # 3. Frontend Setup

Install dependencies and start the development server:
cd client
npm install
npm run dev

Frontend running on:`http://localhost:5173`

# Future Roadmap

 [ ] Database Persistence: Fully sync dashboard task edits with MongoDB.
 [ ] Admin Panel: Create a specific view for managers to assign tasks.
 [ ] RBAC: Implement Role-Based Access Control for different user levels.
 [ ] Deployment: Host the frontend on Netlify/Vercel and backend on Render.

#  Author

*Shivam Yadav* Frontend Developer | React & UI Enthusiast* [GitHub Profile](https://github.com/Shivam-ya/prime1-dashboard.git)


> Note:
If you find this project helpful, feel free to ⭐ star the repository!
