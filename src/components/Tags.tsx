import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Divider, Typography} from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List/List';
import { useHomeStyles } from '../pages/Home/theme';
import { TagState } from '../store/tags/contracts/state';
import { useSelector } from 'react-redux';
import { selectIsTagsLoaded, selectTagsItems } from '../store/tags/selectors';
import { Link } from 'react-router-dom';



interface TagsType  {
    classes: ReturnType <typeof useHomeStyles>;
  
}


export const Tags = (props: TagsType): React.ReactElement | null => {
  const items = useSelector(selectTagsItems)
  const isLoaded = useSelector(selectIsTagsLoaded)

  if (!isLoaded) {
    return null
  }

    return <>
     <Paper className={props.classes.rightSideBlock}>
                <Paper className={props.classes.rightSideBlockHeader} variant="outlined">
                  <b>Актуальные темы</b>
                </Paper>
                <List>
                  {
                 
                 items.map((obj) => {
                   return <ListItem key={obj._id} className={props.classes.rightSideBlockItem}>
                   <Link to={`/home/search?q=${obj.name}`}>
                   <ListItemText
                     primary={obj.name}
                     secondary={
                       <Typography component="span" variant="body2" color="textSecondary">
                         Твитов: {obj.count}
                       </Typography>
                     }
                   />
                   </Link>
                  
                 </ListItem>
                 }) 
             
                  }
                 
              
                  <Divider component="li" />
                </List>
              </Paper></>
}