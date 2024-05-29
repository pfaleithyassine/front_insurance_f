import React from 'react';
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import BlogListing from 'src/components/apps/blog/BlogListing';
import ContactCard from './ContractCard';

const Contract_Type = () => {
  return (
    <PageContainer title="Contract_Type" description="this is Contract_Type page">
      <Breadcrumb title="Contract_Type app" subtitle="Get the latest contracts" />
      {/* ------------------------------------------- */}
      {/* Contract_Type Listing */}
      {/* ------------------------------------------- */}
      <ContactCard />
    </PageContainer>
  );
};

export default Contract_Type;
