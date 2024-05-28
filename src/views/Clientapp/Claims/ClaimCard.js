import React, { useEffect } from 'react';
import { CardContent, Typography, Grid, Button, Box, AvatarGroup, Avatar, Stack, CardMedia } from '@mui/material';
import BlankCard from 'src/components/shared/BlankCard';


import { useDispatch, useSelector } from 'react-redux';
import { getAllClaim } from 'src/store/apps/eCommerce/ClaimSlice';




const ClaimCardClient = () => {
const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getAllClaim()).then((res)=>{
    console.log(res)
  }
)
})
const cl = useSelector((state)=> state.claimReducer.allClaims)
  


  return (
    <Grid container spacing={3}>
      {cl && cl.map((c, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <BlankCard>
            <CardContent>
            <CardMedia
        sx={{ height: 140 }}
        image={c.claimImage}
        title="green iguana"
      />
              <Stack direction="row" spacing={2} mt={3}>
                <Box>
                  <Typography variant="h6" mb={1}>
                    {c.id}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                   
                    <Typography variant="subtitle2" color="textSecondary">
                      Statut : {c.status}
                    </Typography>
                  </Stack>
                </Box>
              </Stack>
              <Stack spacing={2} mt={3}>
                <Button size="large" variant="text" color="primary">
                  See Claim
                </Button>
                <Button size="large" variant="text" color="secondary">
                  Remove
                </Button>
              </Stack>
            </CardContent>
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ClaimCardClient;
