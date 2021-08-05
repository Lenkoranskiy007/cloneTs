import React, { useState } from 'react' 
import TwitterIcon from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';
import { Button,  Hidden, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {useHomeStyles} from '../pages/Home/theme'
import CreateIcon from '@material-ui/icons/Create';
import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';
import { Link } from 'react-router-dom';


type SideMenuType = {
    classes: ReturnType <typeof useHomeStyles>
}



export const SideMenu = (props: SideMenuType) => {

    const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false)

    const handleClickOpenAddTweet = () => {
        setVisibleAddTweet(true)
    }

    const onCloseAddTweet = () => {
        setVisibleAddTweet(false)
    }

    


    return <>
       <Grid container justify='center'>
            <ul className={props.classes.sideMenuList}>
               
                <li className={props.classes.sideMenuListItem}> 
                <Link to={'/home'}>
                    <IconButton className={props.classes.logo} aria-label="delete"  color="primary" size="small">
                <TwitterIcon className={props.classes.logoIcon}   color='primary'/>
                </IconButton>
                    </Link>
             
                </li>
               <li className={props.classes.sideMenuListItem}>
               <div>
                <SearchIcon  className={props.classes.sideMenuListItemIcon} />
                <Hidden smDown>
                <Typography  className={props.classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                </Hidden>
                </div>
                </li>         
               <li className={props.classes.sideMenuListItem}>
               <div>
                <NotificationsNoneIcon     className={props.classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                <Typography className={props.classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                </Hidden>
                </div>
                </li>
               <li className={props.classes.sideMenuListItem}>
               <div>
                <MailOutlineIcon    className={props.classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                <Typography className={props.classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                </Hidden>
                </div>
                </li>
               <li className={props.classes.sideMenuListItem}>
               <div>
                <BookmarkBorderIcon   className={props.classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                <Typography className={props.classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                </Hidden>
                </div>
                </li>
               <li className={props.classes.sideMenuListItem}>
               <div>
                <ListAltIcon  className={props.classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                <Typography className={props.classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
                </Hidden>
                </div>
                </li>
               <li className={props.classes.sideMenuListItem}>
               <div>
                <PermIdentityIcon className={props.classes.sideMenuListItemIcon}/>
                <Hidden smDown>
                <Typography className={props.classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                </Hidden>
                </div>
                </li>
                <li className={props.classes.sideMenuListItem}>
               
                <Button onClick={handleClickOpenAddTweet} className={props.classes.sideMenuTweetButton} fullWidth variant="contained" color="primary">
                <Hidden smDown> Твитнуть </Hidden>
                <Hidden mdUp>
                  <CreateIcon/>
                </Hidden>
                </Button>
                <ModalBlock onClose={onCloseAddTweet} title='' visible={visibleAddTweet}> 
                <div style={{width: 550}}>
                    <AddTweetForm classes={useHomeStyles()} maxRows={15}/>
                </div>
                </ModalBlock>

                </li>

            </ul>
   
          </Grid>
          </>
}

