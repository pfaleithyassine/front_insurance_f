import React, { useEffect } from 'react';
import { Grid, Pagination } from '@mui/material';
import { orderBy } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogPosts } from 'src/store/apps/blog/BlogSlice';
import OneCardContract from './OneCardContact';
import { getAllContracts } from 'src/store/apps/eCommerce/ContractSlice';

const ContactCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllContracts());
  }, [dispatch]);
  const allContracts = useSelector((state) => state.contractReducer.contracts);
  const filterBlogs = (posts, sortBy, cSearch) => {
    // SORT BY

    if (sortBy === 'newest') {
      posts = orderBy(posts, ['createdAt'], ['desc']);
    }
    if (sortBy === 'oldest') {
      posts = orderBy(posts, ['createdAt'], ['asc']);
    }
    if (sortBy === 'popular') {
      posts = orderBy(posts, ['view'], ['desc']);
    }
    if (posts) {
      return (posts = posts.filter((t) => t.featured === false));
    }
    return posts;
  };
  const filterFeaturedpost = (posts) => {
    return (posts = posts.filter((t) => t.featured));
  };
  const blogPosts = useSelector((state) =>
    filterBlogs(
      state.blogReducer.blogposts,
      state.blogReducer.sortBy,
      state.blogReducer.blogSearch,
    ),
  );
  const featuredPost = useSelector((state) => filterFeaturedpost(state.blogReducer.blogposts));

  return (
    <Grid container spacing={3}>
      
      {allContracts.map((post) => {
        return <OneCardContract post={post} key={post.id} />;
      })}
      <Grid item lg={12} sm={12} mt={3}>
        <Pagination count={10} color="primary" sx={{ display: 'flex', justifyContent: 'center' }} />
      </Grid>
    </Grid>
  );
};

export default ContactCard;
