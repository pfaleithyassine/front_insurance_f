import { Typography, Grid, Button, Paper, Box } from '@mui/material';
import { IconDeviceMobile } from '@tabler/icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChildCard from 'src/components/shared/ChildCard';
import { getAllContracts } from 'src/store/apps/eCommerce/ContractSlice';
import React from 'react';
import pck1 from 'src/assets/images/backgrounds/silver.png';
import pck2 from 'src/assets/images/backgrounds/bronze.png';
import pck3 from 'src/assets/images/backgrounds/gold.png';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { format } from 'date-fns';

const SecondStep = ({ nexStep  }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllContracts()).then((res) => {
      console.log(res);
    });
    
  }, [dispatch]);
  const handleDateChange = (newValue) => {
    if (newValue) {
      const formattedDate = format(newValue, 'yyyy-MM-dd');
      localStorage.setItem('date', JSON.stringify(formattedDate));
      setValue(newValue);
    }
  };
  const [value, setValue] = React.useState(new Date());

  const [value2, setValue2] = React.useState(new Date());
  const contract = useSelector((state) => state.contractReducer.contracts);
  console.log(contract)
  return (
    <>
      <Grid container spacing={3} mb={3} mt={1}>
        {contract && contract.map((c,key) => (
          <Grid item lg={4} xs={12} key={c.id}>
            <Paper variant="outlined" sx={{ p: 3 }}>
              <Typography variant="h6" mb={2}>
                {c.name +" " +(key+1)}
              </Typography>
              <Typography variant="body2" gutterBottom   >
                <Box display={"flex"} justifyContent={"space-around"} alignItems={"center"}>
                { c.description} { c.price === 2 ? <img  src={pck1}  width={90} /> : '' }
                { c.price === 5 ? <img src={pck2}  width={90} /> : '' }
                { c.price === 10 ? <img src={pck3}  width={90} /> : '' }
                </Box>
                
              </Typography>
              <Typography variant="h6" my={3} alignItems="center" display="flex" gap={1}>
                <IconDeviceMobile /> {c.price + " TND "}
              </Typography>
              
              <Grid item xs={16} lg={12} sm={12} display="flex" alignItems="stretch">
            <ChildCard title="Choose the final Date of your contract">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker views={['year', 'month', 'day']} 

                  renderInput={(props) => <CustomTextField {...props} fullWidth size="small" sx={{
                    '& .MuiSvgIcon-root': {
                      width: '18px',
                      height: '18px',
                    },
                    '& .MuiFormHelperText-root': {
                      display: 'none',
                    },
                  }} />}
                  placeholder="DateTimePicker"
                  value={value}
                  

                  onChange={
                    handleDateChange
                  }
                />
              </LocalizationProvider>
            </ChildCard>
          </Grid>


              <Button variant="outlined" onClick={()=>{
                nexStep()
                localStorage.setItem("contractId",JSON.stringify(c.id))

                }}>
                Choose contract
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SecondStep;
