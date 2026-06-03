import { getCompanyJobs } from '@/lib/api/jobs';
import React from 'react';

const DashboardJobsPage = async() => {
  const companyId = 'company_123'
  const jobs = await getCompanyJobs(companyId) || []; 
  console.log(jobs, 'Sumitted');
  return (
    <div>
      DashboardJobsPage
      <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, quos?</h1>
    </div>
  );
};

export default DashboardJobsPage;