# 📝 TaskMaster - Full Stack Todo Application

<video src="/TodoMernAssignment/frontend/public/todoassignment.mp4" controls="controls" style="max-width: 100%;">
</video>

![Screenshot 1](/TodoMernAssignment/frontend/public/todoassigmnent1.png)
![Screenshot 2](/TodoMernAssignment/frontend/public//todoassigmnet2.png)
![Screenshot 3](/TodoMernAssignment/frontend/public/todoassigmnet3.png)

A full-stack Todo application built using **React (Frontend)** and **Node.js + Express + SQLite (Backend)** with secure JWT authentication.

---

## 🔗 Important Links

- 🌐 Live App (Frontend): https://taskmaster19.netlify.app/
- ⚙️ Backend API: https://taskmaster-backend-w4y3.onrender.com/
- 💻 Frontend Repo: https://github.com/rojanagunoori/TaskMaster-frontend
- 🔧 Backend Repo: https://github.com/rojanagunoori/TaskMaster-backend

---

## 📌 Project Overview

TaskMaster is a full-stack task management web application designed to help users efficiently organize and track their daily activities. It provides a seamless experience where users can securely authenticate, manage personal tasks, and maintain their profile information.

The application follows a **client-server architecture**, with a React-based frontend communicating with a RESTful API built using Node.js and Express. SQLite is used as a lightweight database for storing user and task data.

This project demonstrates core full-stack development concepts such as:

- Authentication and authorization using JWT
- CRUD operations with persistent storage
- API integration between frontend and backend
- State management and protected routing in React
- Deployment of a full-stack application

It is designed to be scalable and can be extended with advanced features like filtering, reminders, and cloud database integration.

---

## 🚀 Features

- 🔐 **User Authentication System**
  Secure signup and login functionality using hashed passwords and JWT tokens.

- 🔑 **JWT-Based Authorization**
  Protected API endpoints ensure that only authenticated users can access their data.

- 👤 **Profile Management**
  Users can view, update, and delete their account information.

- ✅ **Complete Task Management (CRUD)**
  Users can create, read, update, and delete tasks with real-time updates in the UI.

- 📱 **Responsive User Interface**
  Mobile-friendly design with a collapsible navigation menu for smaller screens.

- 🔔 **Real-Time Feedback with Toast Notifications**
  Instant success and error messages improve user experience.

- 🧭 **Protected Routes in Frontend**
  Prevents unauthorized access to sensitive pages like profile and tasks.

- ⚡ **Fast and Lightweight Backend**
  Uses SQLite for quick setup and efficient data handling.

---

## 📁 Folder / Project Structure

```bash
TaskMaster/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth.js
│   │   │   ├── Tasks.js
│   │   │   ├── Profile.js
│   │   │   ├── Navbar.js
│   │   │   └── ...
│   │   ├── context/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── config.js
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── database.db
│   └── .env
```

---

## 🛠️ Tech Stack / Environment

### Frontend

- React.js
- React Router DOM
- Axios
- React Toastify
- CSS

### Backend

- Node.js
- Express.js
- SQLite3
- JSON Web Token (JWT)
- bcryptjs

---

## ⚙️ Installation / Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rojanagunoori/TaskMaster-frontend.git
git clone https://github.com/rojanagunoori/TaskMaster-backend.git
```

---

### 2️⃣ Backend Setup

```bash
cd TaskMaster-backend
npm install
```

Create `.env` file:

```env
PORT=5000
JWT_SECRET=your_secure_secret
MONGO_URL=your_mongo_url
```

Run backend:

```bash
node server.js
```

---

### 3️⃣ Frontend Setup

```bash
cd TaskMaster-frontend
npm install
npm start
```

---

## 🔐 Environment Variables

### Backend

```env
MONGO_URL=your_mongo_url
PORT=5000
JWT_SECRET=your_secure_secret
```

---

## 📡 API Usage

### 🔐 Authentication

```http
POST /signup
POST /login
```

### 👤 Profile

```http
GET /profile
PUT /updateprofile
DELETE /deleteprofile
```

### 📌 Tasks

```http
GET /gettasks
POST /createtask
PUT /updatetasks/:id
DELETE /deletetasks/:id
```

### Example Request

```js
axios.get("/gettasks", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
```

---

## 🧩 Key Components

### Frontend

- **Auth.js**
  Handles both login and signup functionality with dynamic form switching. Integrates with backend APIs and manages authentication state.

- **Tasks.js**
  Core component for task management. Supports creating, updating, deleting, and displaying tasks with API integration and state updates.

- **Profile.js**
  Displays user information and allows editing or deleting the account. Communicates securely with protected backend endpoints.

- **Navbar.js**
  Provides navigation across the application. Includes responsive design with a mobile toggle menu and conditional rendering based on authentication status.

---

### Backend

- **server.js**
  Main server file containing API routes, middleware (JWT authentication), and request handling logic. Acts as the backbone of the application.

- **db.js**
  Initializes and manages the SQLite database. Defines schema for users and tasks, ensuring relational integrity.

---

## 🔒 Security

- Password hashing using **bcrypt**
- Token-based authentication using **JWT**
- Protected routes via middleware
- Authorization headers required for secured endpoints

---

## ⚔️ Challenges Faced During Development

- 🔐 **JWT Authentication Handling**
  Implementing secure token-based authentication and ensuring tokens are correctly verified for protected routes required careful middleware design.

- 🔄 **Protected Routing in React**
  Managing user sessions and redirecting users based on authentication state was challenging, especially with page refresh scenarios.

- 🌐 **CORS Issues During Deployment**
  Configuring CORS correctly between Netlify (frontend) and Render (backend) required debugging origin policies and headers.

- 🔗 **Frontend-Backend Synchronization**
  Ensuring consistent API communication and handling different environments (local vs production) required proper configuration management.

- 🐞 **Debugging Asynchronous API Calls**
  Handling errors in async operations and preventing UI crashes required robust error handling strategies.

---

## 🚧 Future Improvements

- 🗂️ **Task Categories & Filtering**
  Allow users to categorize tasks (e.g., Work, Personal) and filter them for better organization.

- 📄 **Pagination & Performance Optimization**
  Improve performance for large datasets by implementing pagination or lazy loading.

- ⏰ **Due Dates & Reminders**
  Add deadlines and notification systems to enhance productivity.

- 🎨 **Enhanced UI/UX**
  Introduce animations, better design systems, and improved accessibility.

- ☁️ **Database Upgrade (SQLite → MongoDB)**
  Transition to a scalable cloud database for production-level applications.

- 🧪 **Testing Implementation**
  Add unit tests and integration tests to improve reliability and maintainability.

- 🔐 **Advanced Security Enhancements**
  Implement features like refresh tokens, rate limiting, and input validation.

---

## 🤝 Contributing

Contributions are welcome!

Steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request

---

## 🙏 Acknowledgments

- React Documentation
- Express.js Docs
- SQLite Docs
- JWT & bcrypt libraries

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 🙋‍♀️ Author / Contact

**Nagunoori Roja**

- 📧 Email: [nagunooriroja@gmail.com](mailto:nagunooriroja@gmail.com)
- 🌐 GitHub: [https://github.com/rojanagunoori](https://github.com/rojanagunoori)
- 🌐 LinkedIn: [https://www.linkedin.com/in/nagunoori-roja-51b936267/](https://www.linkedin.com/in/nagunoori-roja-51b936267/)
- 🌐 Personal Portfolio: [portfolio-roja.netlify.app](https://portfolio-roja.netlify.app/)
- 🌐 LeetCode: [https://leetcode.com/u/dSdsi6XkI8/](https://leetcode.com/u/dSdsi6XkI8/)
- 🌐 Kaggle: [https://www.kaggle.com/nagunooriroja](https://www.kaggle.com/nagunooriroja)

---
