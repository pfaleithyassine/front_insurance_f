import React, { useEffect } from 'react';
import { CardContent, Typography, Grid, Button, Box, AvatarGroup, Avatar, Stack, CardMedia } from '@mui/material';

import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClaim } from 'src/store/apps/eCommerce/ClaimSlice';


const followerCard = [
  {
    title: 'Andrew Grant',
    location: 'El Salvador',
    avatar: img1,
  },
  {
    title: 'Leo Pratt',
    location: 'Bulgaria',
    avatar: img2,
  },
  {
    title: 'Charles Nunez',
    location: 'Nepal',
    avatar: img3,
  },
  {
    title: 'Lora Powers',
    location: 'Nepal',
    avatar: img4,
  },
];

const RepClaimCard = () => {
  const dispatch = useDispatch();
  const allclaims = useSelector((state) => state.claimReducer.allClaims);

  useEffect(() => {
    dispatch(getAllClaim()).then((res) => console.log(res));
  }, [dispatch]);
  
  return (
    <Grid container spacing={3}>
      {allclaims.map((card, index) => {
        // Filter cards based on status
        if (card.status === 'onRepair') {
          return (
            <Grid item xs={12} sm={6} lg={3} key={index}>
              {/* Your card component */}
              <CardContent>
                <CardMedia
                  sx={{ height: 140 }}
                  image={card.claimImage}
                  title="green iguana"
                />
                <Stack direction="row" spacing={2} mt={3}>
                  <Box>
                    <Typography variant="h6" mb={1}>
                      {card.description}
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography variant="subtitle2" color="textSecondary">
                        {card.status}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
                <Stack spacing={2} mt={3}>
                  <Button size="large" variant="text" color="primary">
                      I Fix it
                    
                  </Button>
                  {/* <Button size="large" variant="text" color="secondary">
                    Remove
                  </Button> */}
                </Stack>
              </CardContent>
            </Grid>
          );
        } else {
          return null; // Skip rendering if status doesn't match
        }
      })}
    </Grid>
  );};

export default RepClaimCard;
