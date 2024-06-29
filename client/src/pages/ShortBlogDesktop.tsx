import React from "react";
import BlogSection from "../components/BlogSection";
import UserGrid from "../components/UserGrid";
import TrendingGrid from "../components/TrendingGrid";
// import LoginPage from "./LoginPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// const user = {
//   name: "shiva",
//   email: "factwiths@gmail.com",
//   login: false,
// };

const ShortBlogDesktop: React.FC = () => {

  const navigate = useNavigate();
  const {authState} = useAuth();

  const handleLogin = () => {
    // Perform login logic here
    navigate('/login');
  };
  const handleRegister = () => {
    navigate('/register');
  }
  
  return (
    <>
      <Navbar />
      <div className="flex p-1 bg-gray-100">
        <TrendingGrid />
        <BlogSection />
        <div className="w-[calc(100vh-230px)] p-6 bg-white h-[calc(100vh-100px)]">
          <h2 className="text-xl font-bold mb-4">ShortBlog</h2>
          {authState.isAuthenticated && authState.user ? (
            <UserGrid />
          ) : (
            <div className="flex justify-center items-center">
              <button className="m-2 p-2 rounded-md text-white bg-black border border-white" onClick={handleLogin}>
                Login
              </button>
              <button className="m-2 p-2 rounded-md text-black bg-transparent border-black" onClick={handleRegister}>
                Register
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShortBlogDesktop;
