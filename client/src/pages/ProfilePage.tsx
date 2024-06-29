// src/pages/ProfilePage.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { authState } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      {authState.user && (
        <div>
          <p>Username: {authState.user.username}</p>
          <p>Email: {authState.user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;