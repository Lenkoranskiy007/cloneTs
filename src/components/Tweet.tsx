import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import classNames from 'classnames';
import {useHomeStyles } from '../pages/Home';
import IconButton from '@material-ui/core/IconButton/IconButton';


type TweetType = {
    classes: ReturnType <typeof useHomeStyles>
    user: {
        userName: string,
        fullName: string,
        avatarUrl: string
    }
}


export const  Tweet = (props:TweetType ) => {
    return (
        <div>
   <Paper className={props.classes.tweetsWrapper}>
              <Paper className={props.classes.tweetsHeader}>
              <Typography  variant='h6'>Главная</Typography>
              </Paper>
              <Paper className={classNames( props.classes.tweet, props.classes.tweetsHeader)}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Avatar className={props.classes.tweetAvatar} alt="Remy Sharp" src={props.user.avatarUrl} />
                    </Grid>
                    <Grid item xs={11}>
                    <Typography >
    <b>{props.user.userName} </b> <span className={props.classes.tweetUserName}> @{props.user.fullName}</span>&nbsp;
    <span className={props.classes.tweetUserName}>.</span>&nbsp;
    <span className={props.classes.tweetUserName}>1 ч </span>&nbsp;
                     </Typography>
                     <Typography variant="body1" gutterBottom>
                         Balalalallalalallal
                         Balalalallalalallal
                         Balalalallalalallal
                         Balalalallalalallal
                         Balalalallalalallal
                     </Typography>
                     <div className={props.classes.tweetFooter}>
                         <div style={{fontSize: 20}}>
                         <IconButton color="primary" aria-label="delete"   size="small">
                         <CommentIcon  />
                         </IconButton>
                         <span>1</span>
                         </div >
                         <div style={{fontSize: 20}}>
                         <IconButton color="primary" aria-label="delete"   size="small">
                         <RepeatIcon  />
                         </IconButton>
                        
                         </div>
                         <div style={{fontSize: 20}}>
                         <IconButton color="primary" aria-label="delete"   size="small">
                         <LikeIcon  />
                         </IconButton>
                         </div>
                         <div style={{fontSize: 20}}>
                         <IconButton color="primary" aria-label="delete"   size="small">
                         <ShareIcon  />
                         </IconButton>
                         </div>
                     </div>
                    </Grid>
                </Grid>  
              </Paper>
              </Paper>
   
  
        </div>
    )
}

