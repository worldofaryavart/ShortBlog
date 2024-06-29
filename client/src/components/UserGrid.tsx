import { useState,useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface LikedBlog {
  title: string;
}

interface MyBlog {
  title: string;
}

const UserGrid = () => {
  const [likedBlogs, setLikedBlogs] = useState<LikedBlog[]>([]);
  const [myBlogs, setMyBlogs] = useState<MyBlog[]>([]);
  const { authState, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulated data fetching
    setLikedBlogs([{ title: "Blog Title" }, { title: "Blog Title" }]);
    setMyBlogs([{ title: "Your Blog Title" }, { title: "Your Blog Title" }]);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">My Profile</h3>
        <div className="flex items-center">
          <img
            src="/avatar.png"
            alt="User"
            className="w-8 h-8 rounded-full mr-2"
          />
          <span>{authState.user?.username || 'User'}</span>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Create ShortBlog</h3>
        <button className="w-full px-4 py-2 border border-gray-300 rounded-md">
          New Blog
        </button>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Liked Blogs</h3>
        <ul>
          {likedBlogs.map((blog, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2">❤️</span>
              <span>{blog.title}</span>
            </li>
          ))}
        </ul>
        <button className="text-sm text-blue-500">More</button>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">My Blogs</h3>
        <ul>
          {myBlogs.map((blog, index) => (
            <li key={index} className="flex items-center mb-2">
              <img src="/blog-icon.png" alt="Blog" className="w-6 h-6 mr-2" />
              <span>{blog.title}</span>
            </li>
          ))}
        </ul>
        <button className="text-sm text-blue-500">More</button>
      </div>
      <button 
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        onClick={handleLogout}
        >
        Logout
      </button>
    </div>
  );
};

export default UserGrid;
