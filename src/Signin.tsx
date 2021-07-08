import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';




const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)'
    },
    blueSide: {
        backgroundColor: '#1DA1F2',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden'
    },

    blueSideListInfo: {
     


      listStyle: 'none',
      padding: 0,
      margin: 0,
      width: 380,
      '& h6': {
         display: 'flex',
         alignItems: 'center',
          color: 'white',
          fontWeight: 700,
          fontSize: 20
      }
    },

    blueSideListInfoIcon: {
        fontSize: 32
    },

    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden'
    },
    loginSideTwitterIcon: {
        fontSize: 45
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom:  45,
        marginTop: 20
    }

 


}))

export const  Signin = () => {

    const classes = useStyles()


    return (
        <div className={classes.wrapper}>
        <div className={classes.blueSide}>
            <ul className={classes.blueSideListInfo}>
                <li><Typography variant="h6"><SearchIcon  className={classes.blueSideListInfoIcon}/>Читайте о том , что вам интересно</Typography>
                </li>
                <li>
                <Typography variant="h6"> <PeopleOutlineIcon className={classes.blueSideListInfoIcon}/>Узнайте , о чем говорят в мире </Typography>
                </li>
                <li>
                <Typography variant="h6"><MessageIcon className={classes.blueSideListInfoIcon}/>Присоединяйтесь к общению</Typography>
                </li>
            </ul>

        </div>
        
         <div className={classes.loginSide}>
             <div className={classes.loginSideWrapper}>
            <TwitterIcon color="primary" className={classes.loginSideTwitterIcon}/>
            <Typography className={classes.loginSideTitle} gutterBottom variant="h4">Узнайте , что происходит в мире прямо сейчас</Typography>
            <Typography ><b>Присоединяйтесь к твиттеру прямо сейчас!</b></Typography>
            <br/>
            <Button style={{marginBottom: 20}} variant="contained" color="primary" fullWidth>Зарегистрироваться </Button>
            <Button variant="outlined" color="primary" fullWidth>Войти</Button>

             </div>
           
        </div>
       
       
            
        </div>
    )
}

export default Signin
