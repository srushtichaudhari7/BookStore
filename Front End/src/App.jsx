import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import BooksInfo from "./components/BooksInfo";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import AdminDashboard from "./components/Admin";
import BookDetail from "./components/BookDetails";
import  BookInfoGenerator  from "./components/Chatbot.jsx";


function App() {
  const [authUser] = useAuth();
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={ authUser && authUser.isAdmin ? <AdminDashboard /> : <Navigate to="/signup" />} />
        <Route path="/books-info" element={authUser ? <BooksInfo /> : <Navigate to="/signup" />} />
        <Route
          path="/course"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/chat/:title" element={<BookInfoGenerator/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;