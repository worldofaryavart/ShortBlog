import { useState,useEffect } from "react";

interface LikedBlog {
  title: string;
}

interface MyBlog {
  title: string;
}

const TrendingGrid = () => {
  const [trendingBlogs, setTrendingBlogs] = useState<LikedBlog[]>([]);
  const [topics, setTopics] = useState<MyBlog[]>([]);

  useEffect(() => {
    // Simulated data fetching
    setTrendingBlogs([{ title: "Blog Title" }, { title: "Blog Title" }]);
    setTopics([{ title: "AI" }, { title: "Robotics" }]);
  }, []);
  return (
    <div className="w-64 px-6 bg-white h-[calc(100vh-100px)]">
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Trending Blogs</h3>
        <ul>
          {trendingBlogs.map((blog, index) => (
            <li key={index} className="flex items-center mb-2">
              <span className="mr-2">❤️</span>
              <span>{blog.title}</span>
            </li>
          ))}
        </ul>
        <button className="text-sm text-blue-500">More</button>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Topics to Follow</h3>
        <ul>
          {topics.map((topic, index) => (
            <li key={index} className="flex items-center mb-2">
              <img src="/blog-icon.png" alt="Blog" className="w-6 h-6 mr-2" />
              <span>{topic.title}</span>
            </li>
          ))}
        </ul>
        <button className="text-sm text-blue-500">More</button>
      </div>
    </div>
  );
};

export default TrendingGrid;
