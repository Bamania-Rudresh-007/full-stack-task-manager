# 📝 Full Stack Task Manager (MERN)

A robust, full-stack Task Management application designed for productivity. Built using the **MERN stack**, it features secure user authentication, private data isolation, and a seamless CRUD experience.

---

## 🚀 Live Demo
* **Frontend:** [https://full-stack-task-manager-beige.vercel.app/]
* **Backend API:** [https://full-stack-task-manager-hzhr.onrender.com]

---

## ✨ Features

* **Secure Authentication:** User signup and login powered by JWT (JSON Web Tokens).
* **Protected Access:** Secure routes on both Frontend (React Router) and Backend (Middleware).
* **Complete CRUD:** Users can Create, Read, Update, and Delete their own tasks.
* **Data Isolation:** Users only see and manage their own data; no cross-user access.
* **Task Filtering:** Quickly sort through tasks by their current status.
* **State Management:** Efficient API integration using Axios.
* **Persistent Storage:** Data is stored securely in MongoDB Atlas.
* **Architecture:** Follows a clean **MVC (Model-View-Controller)** pattern for scalability.

---

## 🛠 Tech Stack

### Frontend
* **React.js** (UI Library)
* **React Router** (Navigation)
* **Axios** (API Calls)

### Backend
* **Node.js** (Runtime Environment)
* **Express.js** (Web Framework)
* **JWT & bcrypt** (Security & Encryption)

### Database & Deployment
* **MongoDB Atlas** (Cloud Database)
* **Mongoose** (ODM for MongoDB)
* **Vercel** (Frontend Hosting)
* **Render** (Backend Hosting)

---

## 🧠 Key Learnings

* **RESTful API Design:** Implementing structured endpoints for resource management.
* **Authentication Flow:** Handling token storage (LocalStorage/Cookies) and securing private routes.
* **Schema Design:** Creating efficient data models with Mongoose for relational-like behavior.
* **Error Handling:** Implementing global error middleware to handle API failures gracefully.
* **Full-Stack Deployment:** Connecting cross-origin services (CORS) between Vercel and Render.

---

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/task-manager.git](https://github.com/your-username/task-manager.git)
   
2. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   
3. **Install Frontend Dependencies:**
   ```bash
   cd ../frontend
   npm install
   
4. **Environment Variables:**
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   
5. **Run the App:**
   ```bash
      # In backend folder
      npm run dev
         
      # In frontend folder
      npm run dev
