import React, { useEffect } from 'react';

import {
  Box,
  Typography,
  LinearProgress,
  Tabs,
  Tab,
  Grid,
  Stack,
  Rating,
  Button,
  Paper,
} from '@mui/material';
import { IconPencil } from '@tabler/icons';
import ChildCard from 'src/components/shared/ChildCard';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchProducts, getProductById } from 'src/store/apps/eCommerce/EcommerceSlice';

// progress
function ProgressBar({ like, star, value, ...others }) {
  return (
    <Box display={'flex'} alignItems="center" gap="20px">
      <Box sx={{ minWidth: 50 }}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(star)} Stars`}</Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <LinearProgress value={value} variant="determinate" color="primary" {...others} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="subtitle2">{`(${Math.round(like)})`}</Typography>
      </Box>
    </Box>
  );
}

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
 
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const ProductDesc = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch();
  const Id = useParams();
  console.log(Id.id)

  // Get Product
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(getProductById(Id.id));
  }, [dispatch]);

  // Get Products
  const product = useSelector((state) => state.ecommerceReducer.product);

  return (
    <ChildCard>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: 'grey.100' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="primary"
            allowScrollButtonsMobile
            scrollButtons
            indicatorColor="primary"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Reviews" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {/* ------------------------------------------- */}
        {/* Decription */}
        {/* ------------------------------------------- */}
        <TabPanel value={value} index={0}>
          <Typography variant="h5">
           Welcome to our intelligent store
          </Typography>
          <Typography color="textSecondary" mt={4}>
            You can purchase any product and get it delivered to your doorstep. We have a wide range
          </Typography>
          <Typography color="textSecondary" variant="body1" fontWeight={400} mt={4}>
           {/* {product.description} */}
          </Typography>
        </TabPanel>
        {/* ------------------------------------------- */}
        {/* Reviews Tab */}
        {/* ------------------------------------------- */}
        <TabPanel value={value} index={1}>
          <Grid container spacing={3}>
            {/* ------------------------------------------- */}
            {/* Average Rate Tab */}
            {/* ------------------------------------------- */}
            <Grid item xs={12} lg={4}>
              <Paper variant="outlined" sx={{ height: '100%', p: 3 }}>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  sx={{ height: '100%' }}
                >
                  <Typography variant="subtitle1">Average Rating</Typography>
                  <Typography variant="h1" color="primary" fontWeight={600}>
                    4/5
                  </Typography>
                  <Rating name="rate" value={4} />
                </Stack>
              </Paper>
            </Grid>
            {/* ------------------------------------------- */}
            {/* Progrees Rate Tab */}
            {/* ------------------------------------------- */}
            <Grid item xs={12} lg={4}>
              <Paper variant="outlined" sx={{ p: 3 }}>
                <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
                  <Grid item xs={12}>
                    <ProgressBar star={1} value={45} like={485} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={2} value={25} like={215} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={3} value={20} like={110} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={4} value={80} like={620} />
                  </Grid>
                  <Grid item xs={12}>
                    <ProgressBar star={5} value={12} like={160} />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            {/* ------------------------------------------- */}
            {/* Button */}
            {/* ------------------------------------------- */}
            <Grid item xs={12} lg={4}>
              <Paper sx={{ height: '100%', p: 3 }} variant="outlined">
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  spacing={2}
                  sx={{ height: '100%' }}
                >
                  <Button variant="outlined" size="large" startIcon={<IconPencil />}>
                    Write an Review
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </ChildCard>
  );
};

export default ProductDesc;
