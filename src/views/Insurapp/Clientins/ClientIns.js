import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
  Typography,
  Box,
  Avatar,
  Chip,
  Paper,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ParentCard from 'src/components/shared/ParentCard';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import img1 from 'src/assets/images/products/s1.jpg';

import { Stack } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getContractDetailsPerUser } from 'src/store/apps/eCommerce/UserSlice';

const rows = [
  {
    imgsrc: img1,
    pname: 'Good butterscotch ice-cream',
    customer: 'Sunil Joshi',
    inventory: true,
    price: '250.00',
    items: '2',
    history: [
      { date: '2021-02-05', customerId: '11091700', amount: 3 },
      { date: '2021-02-02', customerId: 'Anonymous', amount: 1 },
    ],
    
  },
  
];

function Row(props) {
  const dispatch = useDispatch()
  useEffect(
    ()=>{
      if (open) {
      dispatch(getContractDetailsPerUser(1)).then((res)=>{
      
    },[dispatch,row.id,open]
)}

})
const contractDetails = useSelector((state)=> state.userReducer.contractDetails  )
  console.log(contractDetails)
  const { row } = props;

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              src={row.imgsrc}
              alt={row.imgsrc}
              sx={{
                width: 90,
                height: 70,
                borderRadius: '10px',
              }}
            />
            <Typography variant="h6" fontWeight="600">
              {row.email}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" variant="h6">
            {row.customer}
          </Typography>
        </TableCell>
        <TableCell>
          <Chip
            size="small"
            label={row.inventory ? 'In Stock' : 'Out of Stock'}
            color={row.inventory ? 'success' : 'error'}
            sx={{ borderRadius: '6px' }}
          />
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" variant="h6" fontWeight="400">
            ${row.price}
          </Typography>
        </TableCell>
        <TableCell>
          <Typography color="textSecondary" fontWeight="400">
            {row.items}
          </Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell sx={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography
                gutterBottom
                variant="h5"
                sx={{
                  mt: 2,
                  backgroundColor: (theme) => theme.palette.grey.A200,
                  p: '5px 15px',
                  color: (theme) =>
                    `${
                      theme.palette.mode === 'dark'
                        ? theme.palette.grey.A200
                        : 'rgba(0, 0, 0, 0.87)'
                    }`,
                }}
              >
                Contract Signed by User
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Typography variant="h6">Date</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Customer</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Amount</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="h6">Total price ($)</Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  
                {contractDetails.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row">
                        <Typography color="textSecondary" fontWeight="400">
                          {historyRow.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" fontWeight="400">
                          {historyRow.description}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography color="textSecondary" fontWeight="400">
                          {historyRow.price}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography fontWeight="600">
                          {Math.round(historyRow.amount * row.price * 100) / 100}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))} 
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
Row.propTypes = {
  row: PropTypes.shape({
    price: PropTypes.string,
    items: PropTypes.string,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    inventory: PropTypes.string.isRequired,
    imgsrc: PropTypes.string.isRequired,
    customer: PropTypes.string.isRequired,
    pname: PropTypes.string,
  }),
};
const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Collapsible Table',
  },
];


function ClientIns() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.allUsers);

  useEffect(() => {
    if (!users.length) {
      dispatch(getAllUsers()).then((res) => {
        console.log(res);
      });
    }
  }, [dispatch, users.length]);
  return (
    
    <>
  <PageContainer title="Collapsible Table" description="this is Collapsible Table page">
      {/* breadcrumb */}
      <Breadcrumb title="Collapsible Table" items={BCrumb} />
      {/* end breadcrumb */}
      <ParentCard title="Collapsible">
        <Paper variant="outlined">
          <TableContainer component={Paper} >
            <Table
              aria-label="collapsible table"
              sx={{
                whiteSpace: {
                  xs: 'nowrap',
                  sm: 'unset',
                },
              }}
              >
              <TableHead>
                <TableRow>
                  <TableCell />
                  <TableCell>
                    <Typography variant="h6">Product</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Customer</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Inventory</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Price</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">Items</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  
                  users.map((row,index) => (
                    <Row key={row.id} row={row} />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </ParentCard>
    </PageContainer>
    </>
  )
}

export default ClientIns
