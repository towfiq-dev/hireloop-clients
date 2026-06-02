'use client'
import { authClient } from '@/lib/auth-client';
import React from 'react';

const RecruiterDashboardHomePage = () => {
  
  
  const { data: session, isPending } = authClient.useSession()
  const user = session?.user
  if (isPending) {
    return <h2>Data is loading...</h2>
  }
  return (
    <div>
      RecruiterPage
      <h2>{user?.name}</h2>
    </div>
  );
};

export default RecruiterDashboardHomePage;