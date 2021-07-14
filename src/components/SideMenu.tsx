import React from 'react' 
import TwitterIcon from '@material-ui/icons/Twitter';
import Grid from '@material-ui/core/Grid';
import { Button, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {useHomeStyles} from '../pages/Home'


type SideMenuType = {
    classes: ReturnType <typeof useHomeStyles>
}



export const SideMenu = (props: SideMenuType) => {

    return <>
       <Grid container justify='center'>
            <ul className={props.classes.sideMenuList}>
               
                <li className={props.classes.sideMenuListItem}>
                <div>
                <IconButton className={props.classes.logo} aria-label="delete"  color="primary" size="small">
                <TwitterIcon className={props.classes.logoIcon}   color='primary'/>
                </IconButton>
                </div>
                </li>
               <li className={props.classes.sideMenuListItem}>
               <div>
                <SearchIcon  className={props.classes.sideMenuListItemIcon} />
                <Typography  className={props.classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                </div>
                </li>         
               <li className={props.classes.sideMenuListItem}>
               <div>
                <NotificationsNoneIcon     className={props.classes.sideMenuListItemIcon}/>
                <Typography className={props.classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                </div>
                </li>
               <li className={props.classes.sideMenuListItem}>
               <div>
                <MailOutlineIcon    className={props.classes.sideMenuListItemIcon}/>
                <Typography className={props.classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                </div>
                </li>
               <li className={props.classes.sideMenuListItem}>
               <div>
                <BookmarkBorderIcon   className={props.classes.sideMenuListItemIcon}/>
                <Typography className={props.classes.sideMenuListItemLabel} variant='h6'>Закладки</Typography>
                </div>
                </li>
               <li className={props.classes.sideMenuListItem}>
               <div>
                <ListAltIcon  className={props.classes.sideMenuListItemIcon}/>
                <Typography className={props.classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
                </div>
                </li>
               <li className={props.classes.sideMenuListItem}>
               <div>
                <PermIdentityIcon className={props.classes.sideMenuListItemIcon}/>
                <Typography className={props.classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                </div>
                </li>
                <li className={props.classes.sideMenuListItem}>
                <Button className={props.classes.sideMenuTweetButton} fullWidth variant="contained" color="primary">Твитнуть</Button>
                </li>

            </ul>
   
          </Grid>
          </>
}

