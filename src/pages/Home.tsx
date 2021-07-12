import React from 'react';
import Grid from '@material-ui/core/Grid';
import TwitterIcon from '@material-ui/icons/Twitter';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import { makeStyles,  withStyles, Typography, InputBase, createStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import grey from '@material-ui/core/colors/grey';
import CommentIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import classNames from 'classnames'




const useHomeStyles = makeStyles(() => ({
    wrapper: {
      height: '100vh'
    },
    logo: {
       margin: '10px 0'
    },
    logoIcon: {
        fontSize: 36
    },
    sideMenuList: {
        listStyle: 'none',
        marginLeft: '55px'
        
        
    },
    sideMenuListItem: {
        display: 'flex',
        alignItems: 'center'
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 18
    },
    sideMenuListItemIcon: {
        fontSize: 28
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0'
    },
    tweetsHeader: {
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800
        },
    },
 
    tweet: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)'
        },
    },

    tweetUserName: {
        color: grey[500]
    },
    tweetFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 450
    },
}))

const SearchTextFields = withStyles(() => createStyles ({
    input: {
        borderRadius: 30,
        backgroundColor: '#E6ECF0',
        height: 35,
        width: 200,
        padding: 0,
        

    },
}))(InputBase)


export const  Home = () => {

    const classes  = useHomeStyles()
    
    return (
        //@ts-ignore
   <Container className={classes.wrapper} maxWidth="1g">
   <Grid container spacing={3}>
      <Grid item xs={3}>
          <Grid container justify='center'>
            <ul className={classes.sideMenuList}>
                <li className={classes.sideMenuListItem}>
                <IconButton className={classes.logo} aria-label="delete"  color="primary" size="small">
                <TwitterIcon className={classes.logoIcon}   color='primary'/>
                </IconButton>
                <Typography className={classes.sideMenuListItemLabel}  variant='h6'>Главная</Typography>

                </li>
                <li className={classes.sideMenuListItem}>
                <IconButton aria-label="delete"   size="small">
                <SearchIcon  className={classes.sideMenuListItemIcon} />
                </IconButton>
                <Typography  className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                </li>
                <li className={classes.sideMenuListItem}>
                <IconButton aria-label="delete"   size="small">
                <NotificationsNoneIcon     className={classes.sideMenuListItemIcon}/>
                </IconButton>
                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>

                </li>
                <li className={classes.sideMenuListItem}>
                <IconButton aria-label="delete"   size="small">
                <MailOutlineIcon    className={classes.sideMenuListItemIcon}/>
                </IconButton>
                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                </li>
                <li className={classes.sideMenuListItem}>
                <IconButton aria-label="delete"   size="small">
                <BookmarkBorderIcon   className={classes.sideMenuListItemIcon}/>
                </IconButton>
                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>

                </li>
                <li className={classes.sideMenuListItem}>
                <IconButton aria-label="delete"   size="small">
                <ListAltIcon  className={classes.sideMenuListItemIcon}/>
                </IconButton>
                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>

                </li>
                <li className={classes.sideMenuListItem}>
                <IconButton aria-label="delete"   size="small">
                <PermIdentityIcon className={classes.sideMenuListItemIcon}/>
                </IconButton>
                <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                </li>
            </ul>
   
          </Grid>
          </Grid>
          
          <Grid item xs={6}>
              <Paper className={classes.tweetsWrapper}>
              <Paper className={classes.tweetsHeader}>
              <Typography  variant='h6'>Главная</Typography>
              </Paper>
              <Paper className={classNames( classes.tweet,classes.tweetsHeader)}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                    <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80" />
                    </Grid>
                    <Grid item xs={11}>
                    <Typography >
                         <b>Farid4242 </b> <span className={classes.tweetUserName}> @Gasymzade</span>
                     </Typography>
                     <Typography variant="body1" gutterBottom>
                         Balalalallalalallal
                         Balalalallalalallal
                         Balalalallalalallal
                         Balalalallalalallal
                         Balalalallalalallal
                     </Typography>
                     <div className={classes.tweetFooter}>
                         <div style={{fontSize: 20}}>
                         <IconButton aria-label="delete"   size="small">
                         <CommentIcon  />
                         </IconButton>
                         <span>1</span>
                         </div >
                         <div style={{fontSize: 20}}>
                         <IconButton aria-label="delete"   size="small">
                         <RepeatIcon  />
                         </IconButton>
                        
                         </div>
                         <div style={{fontSize: 20}}>
                         <IconButton aria-label="delete"   size="small">
                         <LikeIcon  />
                         </IconButton>
                         </div>
                         <div style={{fontSize: 20}}>
                         <IconButton aria-label="delete"   size="small">
                         <ShareIcon  />
                         </IconButton>
                         </div>
                     </div>
                    </Grid>
                </Grid>  
              </Paper>
              </Paper>
          </Grid>
          <Grid item xs={3}>
           <SearchTextFields  placeholder='Поиск по Твиттеру' />
          </Grid>
          </Grid>
      </Container>


    
    )
}

