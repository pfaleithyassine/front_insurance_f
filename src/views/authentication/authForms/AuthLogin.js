import React, { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';

// common component
import Breadcrumb from '../../../layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '../../../components/container/PageContainer';
import ParentCard from '../../../components/shared/ParentCard';
import ChildCard from '../../../components/shared/ChildCard';
import {
  Grid, Box, Tab, Tabs,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Divider,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CustomCheckbox from '../../../components/forms/theme-elements/CustomCheckbox';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '../../../components/forms/theme-elements/CustomFormLabel';

// icon
import { IconHeart, IconPhone, IconUser } from "@tabler/icons";

import AuthSocialButtons from './AuthSocialButtons';
import { logininsr, loginrepair, loginsell, loginuser } from 'src/store/auth';
import { useDispatch } from 'react-redux';


const AuthLogin = ({ title, subtitle, subtext }) =>{
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
 const [email, setEmail] = useState("");
 console.log(email)
 const [password, setPassword] = useState("");
 console.log(password)
 const COMMON_TAB = [
  { value: 'Client', icon: <IconUser width={20} height={20} />, label: <>  <Stack
 
  >
  <Box>
    <CustomFormLabel htmlFor="email">EMAIL_Client</CustomFormLabel>
    <CustomTextField id="email" type="email" variant="outlined" fullWidth   onChange={(e) => {
                  setEmail(e.target.value);
                }} />
  </Box>
  <Box>
    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
    <CustomTextField id="password" type="password" variant="outlined" fullWidth  onChange={(e) => {
                  setPassword(e.target.value);
                }} />
  </Box>
  <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
    <FormGroup>
      <FormControlLabel
        control={<CustomCheckbox defaultChecked />}
        label="Remeber this Device"
      />
    </FormGroup>
    <Typography
      component={Link}
      to="/auth/forgot-password"
      fontWeight="500"
      sx={{
        textDecoration: 'none',
        color: 'primary.main',
      }}
    >
      Forgot Password ?
    </Typography>
  </Stack>
</Stack>
<Box>
  <Button
    color="primary"
    variant="contained"
    size="large"
    fullWidth
    onClick={(e) => {
      e.preventDefault();
      dispatch(loginuser({ email , password })).then((res) => {
     if (!res.error) {
      console.log('Welcome! You are now logged in.');
     navigate("/");
     
    } else console.log('Authentication failed ! Please check your credentials.');
  })}}

   
  >
    Sign In
  </Button>
</Box></> },
  { value: 'Seller', icon: <IconUser width={20} height={20} />, label: <>  <Stack>
  <Box>
    <CustomFormLabel htmlFor="email">EMAIL_Seller</CustomFormLabel>
    <CustomTextField id="email" type="email" variant="outlined" fullWidth   onChange={(e) => {
                  setEmail(e.target.value);
                }} />
  </Box>
  <Box>
    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
    <CustomTextField id="password" type="password" variant="outlined" fullWidth   onChange={(e) => {
                  setPassword(e.target.value);
                }} />
  </Box>
  <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
    <FormGroup>
      <FormControlLabel
        control={<CustomCheckbox defaultChecked />}
        label="Remeber this Device"
      />
    </FormGroup>
    <Typography
      component={Link}
      to="/auth/forgot-password"
      fontWeight="500"
      sx={{
        textDecoration: 'none',
        color: 'primary.main',
      }}
    >
      Forgot Password ?
    </Typography>
  </Stack>
</Stack>
<Box>
  <Button
    color="primary"
    variant="contained"
    size="large"
    fullWidth
    onClick={(e) => {
      e.preventDefault();
      dispatch(loginsell({ email , password })).then((res) => {
     if (!res.error) {
      console.log('Welcome! You are now logged in.');
     navigate("/");
     
    } else console.log('Authentication failed ! Please check your credentials.');
  })}}
  >
    Sign In
  </Button>
</Box></> },
  { value: 'Insurance', icon: <IconUser width={20} height={20} />, label: <>  <Stack>
  <Box>
    <CustomFormLabel htmlFor="email">EMAIL_Insurance</CustomFormLabel>
    <CustomTextField id="email" type="email" variant="outlined" fullWidth   onChange={(e) => {
                  setEmail(e.target.value);
                }} />
  </Box>
  <Box>
    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
    <CustomTextField id="password" type="password" variant="outlined" fullWidth   onChange={(e) => {
                  setPassword(e.target.value);
                }}  />
  </Box>
  <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
    <FormGroup>
      <FormControlLabel
        control={<CustomCheckbox defaultChecked />}
        label="Remeber this Device"
      />
    </FormGroup>
    <Typography
      component={Link}
      to="/auth/forgot-password"
      fontWeight="500"
      sx={{
        textDecoration: 'none',
        color: 'primary.main',
      }}
    >
      Forgot Password ?
    </Typography>
  </Stack>
</Stack>
<Box>
  <Button
    color="primary"
    variant="contained"
    size="large"
    fullWidth
    onClick={(e) => {
      e.preventDefault();
      dispatch(logininsr({ email , password })).then((res) => {
     if (!res.error) {
      console.log('Welcome! You are now logged in.');
     navigate("/");
     
    } else console.log('Authentication failed ! Please check your credentials.');
  })}}
  >
    Sign In
  </Button>
</Box></> },
  { value: 'Repair', icon: <IconUser width={20} height={20} />, label: <>  <Stack>
  <Box>
    <CustomFormLabel htmlFor="email">EMAIL_Repair</CustomFormLabel>
    <CustomTextField id="email" type="email" variant="outlined" fullWidth   onChange={(e) => {
                  setEmail(e.target.value);
                }}  />
  </Box>
  <Box>
    <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
    <CustomTextField id="password" type="password" variant="outlined" fullWidth   onChange={(e) => {
                  setPassword(e.target.value);
                }}  />
  </Box>
  <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
    <FormGroup>
      <FormControlLabel
        control={<CustomCheckbox defaultChecked />}
        label="Remeber this Device"
      />
    </FormGroup>
    <Typography
      component={Link}
      to="/auth/forgot-password"
      fontWeight="500"
      sx={{
        textDecoration: 'none',
        color: 'primary.main',
      }}
    >
      Forgot Password ?
    </Typography>
  </Stack>
</Stack>
<Box>
  <Button
    color="primary"
    variant="contained"
    size="large"
    fullWidth
    onClick={(e) => {
      e.preventDefault();
      dispatch(loginrepair({ email , password })).then((res) => {
     if (!res.error) {
      console.log('Welcome! You are now logged in.');
     navigate("/");
     
    } else console.log('Authentication failed ! Please check your credentials.');
  })}}
  >
    Sign In
  </Button>
</Box></> }
];
return(
  
  <>
    {title ? (
      <Typography fontWeight="è00" variant="h6" mb={1}>
        {title}
      </Typography>
    ) : null}

    

  
    <Box mt={3}>
      <Divider>
        <Typography
          component="span"
          color="textSecondary"
          variant="h6"
          fontWeight="400"
          position="relative"
          px={2}
        >
          sign in with
        </Typography>
      </Divider>
    </Box>

   
              <TabContext value={value}>
                <Tabs variant="scrollable"
                  scrollButtons="auto" value={value} onChange={handleChange} aria-label="icon tabs example">
                  {COMMON_TAB.map((tab, index) => (
                    <Tab key={tab.value} icon={tab.icon} label={tab.value} value={tab.value} disabled={tab.disabled} />
                  ))}

                </Tabs>
                <Box bgcolor="grey.A200" mt={2}>
                  {COMMON_TAB.map((panel, index) => (
                    <TabPanel key={panel.value} value={panel.value} >
                      {panel.label}
                    </TabPanel>
                  ))}
                </Box>
              </TabContext>
     
    {subtitle}
  </>
)};

export default AuthLogin;
