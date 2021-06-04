import React, { useState } from 'react';
import { Container, Grow, Grid, Paper, TextField, Button} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import { getPostsBySearch } from '../../actions/posts';
import Posts from '../../components/Posts/Posts';
import Form from '../../components/Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const Home = () => {
    const classes = useStyles();
    const query = useQuery();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
  
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
    const history = useHistory();
  
    const searchPost = () => {
      if (search.trim() || tags) {
        dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
        history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
      } else {
        history.push('/');
      }
    };
  
    const handleKeyPress = (e) => {
      if (e.keyCode === 13) {
        searchPost();
      }
    };
  
    const handleAdd = (tag) => setTags([...tags, tag]);
  
    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));
    return (
        <Grow in>
          <Container maxWidth="xl">
            <div className={classes.appBarSearch}>
            <Grid container spacing={2} justify="center" >
              <Grid item>
                  <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Meetups"  value={search} onChange={(e) => setSearch(e.target.value)} />
                  </Grid>
                  <Grid item>
                  <ChipInput
                    value={tags}
                    onAdd={(tag) => handleAdd(tag)}
                    onDelete={(tag) => handleDelete(tag)}
                    label="Search Tags"
                    variant="outlined"
                  />
                  </Grid>
                  <Grid item >
                  <Button onClick={searchPost} className={classes.searchButton} variant="contained" size="large" color="primary">Search</Button>
                  </Grid>
                  </Grid>
                </div>
            <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
              <Grid item xs={12} sm={6} md={9}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={6} md={3} >
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
            </Grid>
            {(!searchQuery && !tags.length) && (
                  <Paper className={classes.pagination} elevation={6}>
                    <Pagination page={page} />
                  </Paper>
                )}
          </Container>
        </Grow>
      );
    };
    
    export default Home;