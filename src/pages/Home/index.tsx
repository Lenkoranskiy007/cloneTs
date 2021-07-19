import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Divider, Typography} from '@material-ui/core';
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

// import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';







export const  Home = () => {

    const classes  = useHomeStyles()

    return (
      <Container className={classes.wrapper} maxWidth="lg">
        <Grid container spacing={3}>
          <Grid sm={1} md={3} item>
            <SideMenu classes={classes} />
          </Grid>
          <Grid sm={8} md={6} item>
            <Paper className={classes.tweetsWrapper} variant="outlined">
              <Paper className={classes.tweetsHeader} variant="outlined">
                <Typography variant="h6">Главная</Typography>
              </Paper>
              <Paper>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes} />
                </div>
                <div className={classes.addFormBottomLine} />
              </Paper>
              {/* {isLoading ? (
                <div className={classes.tweetsCentred}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => (
                  <Tweet key={tweet._id} text={tweet.text} user={tweet.user} classes={classes} />
                ))
              )} */}
             <Tweet text={'dkdkkd'} user={{ username: 'sss',
               fullname: 'sss',
               avatarUrl: 'kkkk'
             }} classes={classes} />

            </Paper>
          </Grid>
          <Grid sm={3} md={3} item>
            <div className={classes.rightSide}>
              <SearchTextFields
                variant="outlined"
                placeholder="Поиск по Твиттеру"
                // InputProps={{
                //   startAdornment: (
                //     <InputAdornment position="start">
                //       <SearchIcon />
                //     </InputAdornment>
                //   ),
                // }}
                fullWidth
              />
              <Paper className={classes.rightSideBlock}>
                <Paper className={classes.rightSideBlockHeader} variant="outlined">
                  <b>Актуальные темы</b>
                </Paper>
                <List>
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemText
                      primary="Санкт-Петербург"
                      secondary={
                        <Typography component="span" variant="body2" color="textSecondary">
                          Твитов: 3 331
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemText
                      primary="#коронавирус"
                      secondary={
                        <Typography component="span" variant="body2" color="textSecondary">
                          Твитов: 163 122
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                  <ListItem className={classes.rightSideBlockItem}>
                    <ListItemText
                      primary="Беларусь"
                      secondary={
                        <Typography component="span" variant="body2" color="textSecondary">
                          Твитов: 13 554
                        </Typography>
                      }
                    />
                  </ListItem>
                  <Divider component="li" />
                </List>
              </Paper>
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
    



