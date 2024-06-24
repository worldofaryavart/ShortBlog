import React, { useState, useEffect } from 'react';

interface BlogPost {
  title: string;
  content: string;
  author: string;
}

interface LikedBlog {
  title: string;
}

interface MyBlog {
  title: string;
}

const ShortBlogDesktop: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [likedBlogs, setLikedBlogs] = useState<LikedBlog[]>([]);
  const [myBlogs, setMyBlogs] = useState<MyBlog[]>([]);

  useEffect(() => {
    // Simulated data fetching
    setBlogPosts([{ title: 'Sample Blog', content: 'Trends senectus ipsum?', author: 'Fashionista123' }]);
    setLikedBlogs([{ title: 'Blog Title' }, { title: 'Blog Title' }]);
    setMyBlogs([{ title: 'Your Blog Title' }, { title: 'Your Blog Title' }]);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex mb-4">
          <button className="mr-2 px-4 py-2 bg-black text-white rounded-md">For You</button>
          <button className="px-4 py-2 border border-gray-300 rounded-md">Following</button>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md h-[calc(100vh-200px)] overflow-y-auto">
          {blogPosts.map((post, index) => (
            <div key={index} className="mb-4">
              <p className="text-center text-gray-400">{post.content}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Check out these amazing accessories I found! #accessories #haul</p>
                <div className="flex items-center mt-2">
                  <img src="/avatar.png" alt="User" className="w-8 h-8 rounded-full mr-2" />
                  <span className="font-semibold">{post.author}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-64 p-6 bg-white">
        <h2 className="text-xl font-bold mb-4">ShortBlog</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">My Profile</h3>
          <div className="flex items-center">
            <img src="/avatar.png" alt="User" className="w-8 h-8 rounded-full mr-2" />
            <span>User Name</span>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Create ShortBlog</h3>
          <button className="w-full px-4 py-2 border border-gray-300 rounded-md">New Blog</button>
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
        <button className="w-full px-4 py-2 border border-gray-300 rounded-md">Logout</button>
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>ShortBlog</p>
          <p>Copyright 2022</p>
        </div>
      </div>
    </div>
  );
};

export default ShortBlogDesktop;