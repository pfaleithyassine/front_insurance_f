import React from 'react';
import { Box, Grid, Paper, Radio, Stack, Typography } from '@mui/material';
import Paypal from 'src/assets/images/svgs/paypal.svg';
import payment from 'src/assets/images/products/payment.svg';
import mastercard from 'src/assets/images/svgs/mastercard.svg';

const Delivery = [
  {
    id: 1,
    title: 'Fast Delivery',
    description: 'Tomorrow you will get your product',
  },
  {
    id: 2,
    title: 'GLOVO',
    description: 'Few hours and you get your product ;)',
  },
];

const Payment = [
  {
    value: 'Pay with Bank Card',
    title: 'Pay with Bank Card',
    description: 'You will be redirected to the website of the your bank agency  to complete your purchase securely.',
    
  },
  {
    value: 'credit_card',
    title: 'D17 Card',
    description: 'We support D17.',
    icons: mastercard,
  },
  {
    value: 'Paypal',
    title: 'Paypal',
    description: 'if you are in tunisia you can,t pay with paypal.',
    cons: Paypal,
  },
];

const ThirdStep = () => {
  const [selectedValue, setSelectedValue] = React.useState('Free delivery');

  const handleDChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [selectedPyament, setSelectedPyament] = React.useState('paypal');

  const handlePChange = (event) => {
    setSelectedPyament(event.target.value);
  };

  return (
    <>
      {/* ------------------------------------------- */}
      {/* Delivery Option */}
      {/* ------------------------------------------- */}
      <Paper variant="outlined" sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6">Delivery Option</Typography>
        <Grid container spacing={3} mt={1}>
          {Delivery.map((option) => (
            <Grid item lg={6} xs={12} key={option.id}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2,
                  borderColor: selectedValue === option.title ? 'primary.main' : '',
                  backgroundColor: selectedValue === option.title ? 'primary.light' : '',
                }}
              >
                <Stack direction={'row'} alignItems="center" gap={1}>
                  <Radio
                    checked={selectedValue === option.title}
                    onChange={handleDChange}
                    value={option.title}
                    name="radio-buttons"
                    inputProps={{ 'aria-label': option.title }}
                  />
                  <Box>
                    <Typography variant="h6">{option.title}</Typography>
                    <Typography variant="subtitle2">{option.description}</Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
      {/* ------------------------------------------- */}
      {/* Payment Option */}
      {/* ------------------------------------------- */}
      <Paper variant="outlined" sx={{ p: 3, mt: 4 }}>
        <Typography variant="h6">Payment Option</Typography>
        <Grid container spacing={3} alignItems="center">
          <Grid lg={8} xs={12} item>
            <Grid container spacing={3} mt={2}>
              {Payment.map((option) => (
                <Grid item lg={12} xs={12} key={option.value}>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2,
                      borderColor: selectedPyament === option.value ? 'primary.main' : '',
                      backgroundColor: selectedPyament === option.value ? 'primary.light' : '',
                    }}
                  >
                    <Stack direction={'row'} alignItems="center" gap={1}>
                      <Radio
                        checked={selectedPyament === option.value}
                        onChange={handlePChange}
                        value={option.value}
                        name="radio-buttons"
                        inputProps={{ 'aria-label': option.title }}
                      />
                      <Box>
                        <Typography variant="h6">{option.title}</Typography>
                        <Typography variant="subtitle2">{option.description}</Typography>
                      </Box>
                      <Box ml="auto">
                        {option.icons ? <img src={option.icons} alt="payment" /> : ''}
                      </Box>
                    </Stack>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid lg={4} xs={12} item>
            <Box sx={{ width: { xs: '200px', sm: 'auto' } }}>
              <img src={payment} alt="payment" />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ThirdStep;
