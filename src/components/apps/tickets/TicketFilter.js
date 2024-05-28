import { Box, Grid, Typography, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setVisibilityFilter } from '../../../store/apps/tickets/TicketSlice';

const BoxStyled = styled(Box)(() => ({
  padding: '30px',
  transition: '0.1s ease-in',
  cursor: 'pointer',
  color: 'inherit',
  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const TicketFilter = () => {
  const dispatch = useDispatch();
  const allClaims = useSelector((state) => state.claimReducer.allClaims);
  const pendingC = allClaims.filter((t) => t.status === 'inProgress').length;
  const openC = allClaims.filter((t) => t.status === 'Repaired').length;
  const closeC = allClaims.filter((t) => t.status === 'rejected').length;
  return (
    <Grid container spacing={3} textAlign="center">
      <Grid item xs={12} sm={6} lg={3}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter('total_tickets'))}
          sx={{ backgroundColor: 'primary.light', color: 'primary.main' }}
        >
          <Typography variant="h3">{allClaims.length}</Typography>
          <Typography variant="h6">Total Claims</Typography>
        </BoxStyled>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter('Pending'))}
          sx={{ backgroundColor: 'warning.light', color: 'warning.main' }}
        >
          <Typography variant="h3">{pendingC}</Typography>
          <Typography variant="h6">Claims in Progress</Typography>
        </BoxStyled>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter('Open'))}
          sx={{ backgroundColor: 'success.light', color: 'success.main' }}
        >
          <Typography variant="h3">{openC}</Typography>
          <Typography variant="h6">Repaired Claims</Typography>
        </BoxStyled>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <BoxStyled
          onClick={() => dispatch(setVisibilityFilter('Closed'))}
          sx={{ backgroundColor: 'error.light', color: 'error.main' }}
        >
          <Typography variant="h3">{closeC}</Typography>
          <Typography variant="h6">Rejected Claims</Typography>
        </BoxStyled>
      </Grid>
    </Grid>
  );
};

export default TicketFilter;
