import DashboardSidebar from '@/components/allNavPage/dashboard/dashboardSidebar/DashboardSidebar';
import React from 'react';

const dashboardLayout = ({children}) => {
  return (
    <div className='flex items-center min-h-screen'>
      <DashboardSidebar/>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  );
};

export default dashboardLayout;