import React from 'react'
import styles from './Header.module.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Avatar } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
    },
  }));

const defaultProps = {
    color: 'secondary',
    children: <NotificationsNoneIcon fontSize="large"/>,
  };

function Header() {
    const classes = useStyles();

    return (
       <>
        <div className={styles.searchComponent}>
            <div>
                <input className={styles.searchInput}  placeholder="Search"/>
            </div>
           <div className={styles.iconStyle} style={{position:"absolute"}}>
                <SearchIcon fontSize="large"/>
           </div>
        </div>
        <div className={styles.avatarDiv}>
            <Badge badgeContent={99} {...defaultProps} style={{marginRight:"40px",cursor:"pointer"}}/>
            <Avatar className={classes.large} src="/broken-image.jpg" style={{background:"#ff5722",cursor:"pointer"}}>K</Avatar>
        </div>
     </>
        
        
    )
}

export default Header
