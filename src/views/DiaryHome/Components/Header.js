import React from 'react'
import styles from './header.module.css';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import { Avatar } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import IconButton from '@material-ui/core/IconButton';

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
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
            <div>
                <div className={styles.avatarDiv}>
                  <IconButton style={{marginRight:"40px",cursor:"pointer"}}>
                    <Badge {...bindTrigger(popupState)} badgeContent={99} {...defaultProps} style={{cursor:"pointer",color:"white"}}/>
                  </IconButton>
                      
                  <Avatar className={classes.large} src="/broken-image.jpg" style={{background:"#ff5722",cursor:"pointer"}}>K</Avatar>
                </div>

              <Popover
                {...bindPopover(popupState)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <div style={{width:"300px",padding:"30px"}}>
                    Here is your Notofications
                </div>
                
              </Popover>
              
            </div>
          )}
        </PopupState>

     </>
        
        
    )
}

export default Header
