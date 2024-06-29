import { useEffect, useState } from "react";
import TopicButton from "./TopicButton";
import LikeShare from "./LikeShare";

interface BlogPost {
  title: string;
  content: string;
  author: string;
}

const BlogSection: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setBlogPosts([
      {
        title: "The Best Dog Care Tips",
        content:
          "Dog care is important for a healthy and happy pet. Here are some tips to help you take care of your dog.",
        author: "Fashionista123",
      },
    ]);
  }, []);

  return (
    <div className="flex-1 p-1 px-10">
      <div className="bg-white p-1 rounded-md shadow-md h-[calc(100vh-100px)] ">
        {/* <div className="flex mb-4">
        <button className="mr-2 px-4 py-2 bg-black text-white rounded-md">
          For You
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md">
          Following
        </button>
      </div> */}
        {blogPosts.map((post, index) => (
          <div key={index} className="mb-4">
            <div className="relative h-[calc(100vh-100px)] w-full rounded-md shadow-md">
              <img
                src="images/1.jpg"
                alt="first image"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-6">
                <h2 className="text-white text-3xl font-bold mb-2">
                  {post.title}
                </h2>
                <p className="text-white text-lg">{post.content}</p>
                <div className="mt-4">
                  <p className="text-sm text-blue-700">
                    #doglover #dogcare #dogtraining
                  </p>
                </div>
                <div className="flex items-center my-1">
                  <TopicButton />
                </div>
                <div className="flex items-center mt-2">
                  <img
                    src="images/2.jpg"
                    alt="User"
                    className="w-8 h-8 rounded-full mr-2 border border-white"
                  />
                  <span className="font-semibold text-white">{post.author}</span>
                  <LikeShare/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
