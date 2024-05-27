import React from 'react';
import { CardContent, Typography, Grid, Button, Box, AvatarGroup, Avatar, Stack, CardMedia } from '@mui/material';
import BlankCard from '../../shared/BlankCard';

import img1 from 'src/assets/images/profile/user-1.jpg';
import img2 from 'src/assets/images/profile/user-2.jpg';
import img3 from 'src/assets/images/profile/user-3.jpg';
import img4 from 'src/assets/images/profile/user-4.jpg';


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

const ClaimCard = () => {
  return (
    <Grid container spacing={3}>
      {followerCard.map((card, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <BlankCard>
            <CardContent>
            <CardMedia
        sx={{ height: 140 }}
        image={card.avatar}
        title="green iguana"
      />
              <Stack direction="row" spacing={2} mt={3}>
                <Box>
                  <Typography variant="h6" mb={1}>
                    {card.title}
                  </Typography>
                  <Stack direction="row" spacing={2} alignItems="center">
                   
                    <Typography variant="subtitle2" color="textSecondary">
                      Statut
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

export default ClaimCard;
