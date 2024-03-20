'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useRouter } from 'next/navigation';
import { CircularProgress } from '@mui/material';

export default function CheckRole() {
  const { user } = useAuth0();
  const userInfo = user?.email;
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleCheckRole = async () => {
      try {
        const api = 'http://localhost:8000/admin/admincheckrole';
        const response = await axios.post(api, {
          role: 'admin',
        });
        if (response.data.email === userInfo) {
          setTimeout(() => {
            router.push('dashboard');
          }, 1500);
        } else {
          console.log('User does not have admin role');
        }
      } catch (err) {
        console.log(err, 'axios error');
      } finally {
        setLoading(false);
      }
    };
    handleCheckRole();
  }, [userInfo]);

  if (loading) {
    return (
      <div>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className='fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
      <CircularProgress color='secondary' />
      <CircularProgress color='success' />
      <CircularProgress color='inherit' />
    </div>
  );
}
