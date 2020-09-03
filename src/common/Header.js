import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const link = {
  color: 'white',
  paddingRight: '10px',
  fonstSize: '1.5em'
}

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const location = useLocation();


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Kamal's Profolio
          </Typography>
          <div className={classes.grow} />
          <Link to="/" style={link} className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
          <Link
          to="/projects"
          style={link}
          className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
        >
          Projects
        </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
