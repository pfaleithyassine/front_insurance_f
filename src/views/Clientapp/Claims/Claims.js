import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';



import ClaimCardClient from './ClaimCard';




const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Cards',
  },
];

const WidgetCards = () => {
  return (
    <PageContainer title="Cards" description="this is Cards page">
    {/* breadcrumb */}
    <Breadcrumb title="Cards" items={BCrumb} />
    {/* end breadcrumb */}
    <Grid container spacing={3}>
      
    
  
      <Grid item xs={12}>
        <ClaimCardClient/>
      </Grid>
      
    </Grid>
    </PageContainer>
  );
};

export default WidgetCards;
