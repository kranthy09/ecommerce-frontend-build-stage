// src/components/Profile.js

import React, { useState, useEffect } from 'react';
import { getUserProfile } from '../services/userService';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await getUserProfile(accessToken);
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div style={styles.container}>
      <h2>User Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Admin:</strong> {user.is_admin ? 'Yes' : 'No'}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
    maxWidth: '400px',
    margin: '2rem auto',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
};

export default Profile;
