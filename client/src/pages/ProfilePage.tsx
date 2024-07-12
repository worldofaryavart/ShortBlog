// src/pages/ProfilePage.tsx
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { Link } from 'react-router-dom';

interface Post {
  _id: string;
  title: string;
}

const ProfilePage: React.FC = () => {
  const { authState } = useAuth();
  const [recentPosts, setRecentPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchRecentPosts = async () => {
      try {
        const response = await api.get('/users/recent-posts');
        setRecentPosts(response.data);
      } catch (error) {
        console.error('Error fetching recent posts:', error);
      }
    };

    if (authState.user) {
      fetchRecentPosts();
    }
  }, [authState.user]);

  if (!authState.user) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-2xl mx-auto">
        <div className='flex justify-center items-center'>
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
        </div>
        <div className="flex items-center mb-8">
          <img
            src={`http://localhost:5001/uploads/${authState.user.profileImage}`}
            alt={authState.user.username}
            className="w-24 h-24 rounded-full mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{authState.user.username}</h1>
            <p className="text-gray-600 mb-2">{authState.user.email}</p>
            <div className="flex space-x-4">
              <span>{authState.user.followers.length} followers</span>
              <span>{authState.user.following.length} following</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Bio</h2>
          <p className="text-gray-700">{authState.user.bio}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Join Date</h2>
          <p className="text-gray-700">{new Date(authState.user.joinDate).toLocaleDateString()}</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <ul className="space-y-2">
            {recentPosts.map(post => (
              <li key={post._id} className="border-b border-gray-200 pb-2">
                <Link to={`/post/${post._id}`} className="hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/edit-profile" className="bg-black text-white px-4 py-2 rounded">
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;