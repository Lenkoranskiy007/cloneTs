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
import { makeStyles,  withStyles, Typography, InputBase, createStyles, Theme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import grey from '@material-ui/core/colors/grey';
import {Tweet} from '../components/Tweet';
import {SideMenu} from '../components/SideMenu'





export const useHomeStyles = makeStyles((theme: Theme) => ({
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
        padding: 0,
        margin: 0,
        width: 230,        
    },
    sideMenuListItem: {
        cursor: 'pointer', 
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
                    fill: theme.palette.primary.main,
                }
            }
        },
        '& div' : {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            left: -10,
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 50,
            marginBottom: 10,
            transition: 'background-color 0.1s ease-in-out',
        }
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 18
    },
    sideMenuListItemIcon: {
        fontSize: 28,
        marginLeft: -5
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3.2),
        marginTop: theme.spacing(2)
     
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
        paddingTop: 15,
        paddingLeft: 20,
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)'
        },
    },

    tweetAvatar: {
        width: theme.spacing(6),
        height: theme.spacing(6)
    },


    tweetUserName: {
        color: grey[500]
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: 13,
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
          <SideMenu classes={classes}/>
          
          </Grid>
          <Grid item xs={6}>
               <Tweet classes={classes} user={{userName: 'Farid', fullName: 'Gasymzade', avatarUrl: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80"}}/>

          </Grid>
          <Grid item xs={3}>
           <SearchTextFields  placeholder='Поиск по Твиттеру' />
          </Grid>
          </Grid>
      </Container>

    )

}


