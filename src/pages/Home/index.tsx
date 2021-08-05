import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Divider, IconButton, Typography} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import {Tweet} from '../../components/Tweet';
import {AddTweetForm} from '../../components/AddTweetForm'
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import Button from '@material-ui/core/Button/Button';
import {useHomeStyles} from './theme'
import {SearchTextFields} from '../../components/SearhTextFields'
import { SideMenu } from '../../components/SideMenu';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/actionCreator';
import CircularProgress from '@material-ui/core/CircularProgress';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/selectors';
import { Tags } from '../../components/Tags';
import { fetchTags } from '../../store/tags/actionCreator';
import { Route } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { BackButton } from '../../components/BackButton';
import { FullTweet } from './components/FullTweet';









export const  Home = () => {

    const dispatch = useDispatch()
    const classes  = useHomeStyles()
    const isLoading = useSelector(selectIsTweetsLoading)
    const tweets  = useSelector(selectTweetsItems)


    React.useEffect(() => {
     dispatch(fetchTweets())
     dispatch(fetchTags())
    }, [fetchTweets])

    return (
      <Container className={classes.wrapper} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid sm={1} md={3} item>
            <SideMenu classes={classes} />
          </Grid>
          <Grid sm={8} md={6} item>
            <Paper className={classes.tweetsWrapper} variant="outlined">
              <Paper className={classes.tweetsHeader} variant="outlined">
              <Route path='/home/:any' >
                <BackButton/>
                </Route>
                <Route path={['/home', '/home/search']} exact>
                <Typography variant="h6">Твиты</Typography>
                </Route>
                <Route path='/home/tweet' >
                <Typography  variant="h6">Твитнуть</Typography>
                </Route>
                
              </Paper>
              
              <Paper>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes} />
                </div>
                <div className={classes.addFormBottomLine} />
              </Paper>
           
             

              <Route path={'/home'} exact>
                {
           isLoading ? 
          <div className={classes.tweetsCentred}>
          <CircularProgress/>
        </div> :
        tweets.map((tweet) => {
        //@ts-ignore
         return  <Tweet _id={tweet._id} key={tweet._id}  classes={classes}  {...tweet}/>
           })

           }
              </Route>
              <Route path="/home/tweet/:id" component={FullTweet} exact/>
          
            </Paper>
          </Grid>
          <Grid sm={3} md={3} item>
            <div className={classes.rightSide}>
              <SearchTextFields
                variant="outlined"
                placeholder="Поиск по Твиттеру"
                fullWidth
              />
             <Tags classes={classes} />
              <Paper className={classes.rightSideBlock}>
                <Paper className={classes.rightSideBlockHeader} variant="outlined">
                  <b>Кого читать</b>
                </Paper>
                <List>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemAvatar>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Dock Of Shame"
                      secondary={
                        <Typography component="span" variant="body2" color="textSecondary">
                          @FavDockOfShame
                        </Typography>
                      }
                    />
                    <Button color="primary">
                      <PersonAddIcon />
                    </Button>
                  </ListItem>
                  <Divider component="li" />
                </List>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  
    };
    



