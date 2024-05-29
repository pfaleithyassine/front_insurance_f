import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import pck1 from 'src/assets/images/backgrounds/silver.png';
import pck2 from 'src/assets/images/backgrounds/bronze.png';
import pck3 from 'src/assets/images/backgrounds/gold.png';
// third-party
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  CardContent,
  Stack,
  Avatar,
  Typography,
  CardMedia,
  Chip,
  Grid,
  Tooltip,
  Box,
  Skeleton,
} from '@mui/material';
import { IconCurrencyDollar, IconEye, IconFileDollar, IconMessage2, IconPoint } from '@tabler/icons';
import { fetchBlogPost } from 'src/store/apps/blog/BlogSlice';

import BlankCard from 'src/components/shared/BlankCard';

const OneCardContract = ({ post }) => {
  const dispatch = useDispatch();
  const { coverImg, title, view, comments, category, author, createdAt } = post;
  const linkTo = title
    ?.toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');

  const [isLoading, setLoading] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid item xs={12} lg={4} md={4} sm={6} display="flex" alignItems="stretch">
      {isLoading ? (
        <>
          <Skeleton
            animation="wave"
            variant="square"
            width="100%"
            height={400}
            sx={{ borderRadius: (theme) => theme.shape.borderRadius / 5 }}
          ></Skeleton>
        </>
      ) : (
        <BlankCard className="hoverCard">
          <Typography
            component={Link}
            to={`/apps/blog/detail/${linkTo}`}
            onClick={() => dispatch(fetchBlogPost(linkTo))}
          >
            {post.price == "2" && <CardMedia component="img" height="240" image={ pck2  } alt="green iguana" />}
            {post.price == "5" && <CardMedia component="img" height="240" image={ pck1 } alt="green iguana" />}
            {post.price == "10" && <CardMedia component="img" height="240" image={ pck3 } alt="green iguana" />}
              
          </Typography>
          <CardContent>
            <Stack direction="row" sx={{ marginTop: '-45px' }}>
              <Box  title={post?.name} placement="center">
             
              </Box>
              <Chip
                sx={{ marginLeft: 'auto', marginTop: '-21px', backgroundColor: 'white' }}
                label="Available Contract"
                size="small"
              ></Chip>
            </Stack>
            <Box mt={5}>
            {post.name  }
            </Box>
            <Box my={3}>
              <Typography
                gutterBottom
                variant="h5"
                color="inherit"
                sx={{ textDecoration: 'none' }}
                component={Link}
                to={`/apps/blog/detail/${linkTo}`}
                onClick={() => dispatch(fetchBlogPost(linkTo))}
              >
                
                {post.description}
              </Typography>
            </Box>
            <Stack direction="row" gap={3} alignItems="center">
              <Stack direction="row" gap={1} alignItems="center">
                <IconEye size="18" /> {view}
              </Stack>
              <Stack direction="row" gap={1} alignItems="center">
                TND {post?.price}
              </Stack>

              <Stack direction="row" ml="auto" alignItems="center">
                <IconPoint size="16" />
              
              </Stack>
            </Stack>
          </CardContent>
        </BlankCard>
      )}
    </Grid>
  );
};
OneCardContract.propTypes = {
  post: PropTypes.object.isRequired,
};
export default OneCardContract;
