import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogsApi, selectAll } from '../../reducers/blogReducer';
import Grid from "@mui/material/Unstable_Grid2"
import ShowTime from './ShowTime';
import { useNavigate } from 'react-router-dom';

const cardComments = () => {
  const dispatch = useDispatch();
  const blogStatus = useSelector(state => state.blogs.status);
  const navigate = useNavigate()
  React.useEffect(() => {
    if (blogStatus === "idle") {
      dispatch(getBlogsApi())
    }
  }, [dispatch, blogStatus]);

  const blogs = useSelector(selectAll);

  return (
    <React.Fragment>
      <Box sx={{ minWidth: 275 }}>
        <Grid container>
          {

            blogs.map((blog, index) => (
              <>
                {index < 4 ? (
                  <Grid xs={12} md={6} lg={3} sx={{ p: 2 }} key={blog.id}>
                    <Card variant="outlined" >
                      <CardContent>
                        <Typography variant="h5" component="div" sx={{mb: 1}}>
                          {blog.title}  <Typography variant='body1'> نام نویسنده: {blog.fullname} </Typography>
                        </Typography>
                        <ShowTime timestamp={blog.date}/>
                        <Divider sx={{ my: 2.3 }} />
                        <Typography variant="body2">
                          {blog.content}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button onClick={() => navigate("/پست ها")} size="small" >اطلاعات بیشتر</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ) : null}
              </>

            ))
          }
        </Grid>
      </Box>
    </React.Fragment >
  )
}
  ;

export default cardComments;