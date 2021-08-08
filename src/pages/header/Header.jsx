import React from 'react';
import "./header.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import user_dummy_img from "../../assets/images/dummy-image.png"
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header({ issidebar, changeSidebar, islogin }) {
  const classes = useStyles();

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          {
            islogin ? (
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={changeSidebar} >
                {
                  !issidebar ? <MenuIcon /> : <CloseIcon />
                }

              </IconButton>
            ) : null
          }

          <Typography variant="h6" className={classes.title}>
            <Link to={islogin ? "/home" : "/"} style={{textDecoration:"none",color:"white"}} >Check List</Link>
          </Typography>
          {
            islogin ? <div><img src={user_dummy_img} height="40" width="40" className="rounded-circle" alt="profile" /></div> : null
          }
          {/**<Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
