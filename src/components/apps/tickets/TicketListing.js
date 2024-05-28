import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
  IconButton,
  Chip,
  Stack,
  Avatar,
  Tooltip,
  TextField,
  Pagination,
  TableContainer,
 
} from '@mui/material';
import {  SearchTicket } from '../../../store/apps/tickets/TicketSlice';
import { getAllClaim } from 'src/store/apps/eCommerce/ClaimSlice';
import MaxWidthDialog from 'src/components/material-ui/dialog/MaxWidthDialog';

const TicketListing = () => {
  const dispatch = useDispatch();
  const allclaims = useSelector((state) => state.claimReducer.allClaims);
  const [claimsChanged, setClaimsChanged] = useState(false);

  useEffect(() => {
    dispatch(getAllClaim()).then((res) => console.log(res));
  }, [dispatch]);
 

  const getVisibleTickets = (allclaims, filter, ticketSearch) => {
    switch (filter) {
      case 'total_tickets':
        return allclaims.filter(
          (c) => !c.deleted && c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      case 'Pending':
        return allclaims.filter(
          (c) =>
            !c.deleted &&
            c.Status === 'Pending' &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      case 'Closed':
        return allclaims.filter(
          (c) =>
            !c.deleted &&
            c.Status === 'Closed' &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      case 'Open':
        return allclaims.filter(
          (c) =>
            !c.deleted &&
            c.Status === 'Open' &&
            c.ticketTitle.toLocaleLowerCase().includes(ticketSearch),
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };

 
  return (
    <Box mt={4}>
      <Box sx={{ maxWidth: '260px', ml: 'auto' }} mb={3}>
        <TextField
          size="small"
          label="Search"
          fullWidth
          onChange={(e) => dispatch(SearchTicket(e.target.value))}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Id</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Description</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Image of the problem</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Status</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">Date</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="h6">Action</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allclaims.map((ticket) => (
              <TableRow key={ticket.Id} hover>
                <TableCell>{ticket.id}</TableCell>
                <TableCell>
                  <Box>
                    <Typography variant="h6" fontWeight="500" noWrap>
                      {ticket.description}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      noWrap
                      sx={{ maxWidth: '250px' }}
                      variant="subtitle2"
                      fontWeight="400"
                    >
                      {ticket.ticketDescription}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Stack direction="row" gap="10px" alignItems="center">
                    <Avatar
                      src={ticket.claimImage}
                      alt={ticket.claimImage}
                      width="35"
                      sx={{
                        borderRadius: '100%',
                      }}
                    />
                    <Typography variant="h6">{ticket.AgentName}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      backgroundColor:
                        ticket.status === 'Repaired'
                          ? (theme) => theme.palette.success.light
                          : ticket.status === 'rejected'
                            ? (theme) => theme.palette.error.light
                            : ticket.status === 'inProgress'
                              ? (theme) => theme.palette.warning.grey
                              : ticket.status === 'inProgress',
                    }}
                    size="small"
                    label={ticket.status}
                  />
                </TableCell>
                <TableCell>
                  <Typography>{ticket.dateClaim}</Typography>
                </TableCell>
                <TableCell align="right">
                  <Tooltip title="Change state">
                   <MaxWidthDialog ticket={ticket}/>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box my={3} display="flex" justifyContent={'center'}>
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
};

export default TicketListing;
