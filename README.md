📝 Todo List — MERN Stack (TypeScript + Vite + Tailwind)

A full-stack Todo List application built using the MERN stack with TypeScript on both frontend and backend.
This project supports creating, updating, deleting, and viewing todos, with JWT authentication and a clean React UI.

🚀 Tech Stack
Backend

Node.js
Express.js
TypeScript
MongoDB + Mongoose
JWT Authentication
bcrypt for password hashing
dotenv for environment variables
Nodemon + ts-node for development
Compiled using TypeScript (dist/ folder)

Frontend

React (Vite)
TypeScript
TailwindCSS
Axios
React Router DOM
Formik
Lucide-react icons
React-toastify for alerts

Monorepo Utilities

Concurrently (run frontend & backend together)


⚙️ Installation & Setup
1. Clone the repository
git clone <repo-url>
cd todo-list

2. Install all dependencies

(Automatically installs both frontend & backend)

npm run install-all

3. Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
