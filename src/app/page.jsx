import Banner from '@/components/homePage/banner/Banner';
import FeatureJobs from '@/components/homePage/featureJobs/FeatureJobs';
import JobPricing from '@/components/homePage/jobPricing/JobPricing';
import NextRole from '@/components/homePage/nextRole/NextRole';
import SmartJobs from '@/components/homePage/smartJob/SmartJobs';
import StatsSection from '@/components/homePage/stateSection/StateSection';
import React from 'react';

const Home = () => {
  return (
    <div>
    <Banner/>
    <StatsSection/>
    <SmartJobs/>
    <FeatureJobs/>
    <JobPricing/>
    <NextRole/>
    </div>
  );
};

export default Home;
