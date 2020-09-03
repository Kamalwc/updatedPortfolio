import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DescriptionIcon from '@material-ui/icons/Description';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  }
}));

const resumeLink='https://docs.google.com/document/d/1CLq31imlftL_Vqej9sjowVJzEpmJnEIrh8Y2VKFNP5M/edit?usp=sharing',
      github='https://github.com/Kamalwc',
      linkedin='https://www.linkedin.com/in/kamal-carmichael-42689ba7/';

export default function Footer() {
  const classes = useStyles();

  //github profile , linkedIN, email address, phone number, resume pdf

  return (

    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          <Grid container spacing={3}>
            <Grid item xs>
            <ul style={{ listStyleType: 'none' }}>
              <li style={{ float: 'left' }}>Profile links :</li>
              <li style={{ float: 'left', padding: "0px 20px" }}><a href={github}><GitHubIcon color='action' fontSize="large" /></a></li>
              <li style={{ float: 'left', paddingRight: "20px" }}><a href={linkedin}><LinkedInIcon color='action' fontSize="large" /></a></li>
              <li style={{ float: 'left', paddingRight: "20px" }}><a href={resumeLink}><DescriptionIcon color='action' fontSize="large" /></a></li>
            </ul>
            </Grid>
            <Grid item xs>
            <ul style={{listStyleType: 'none' }} >
              <li style={{ float: 'left', paddingRight: "20px" }}>Contact me : </li>
              <li style={{ float: 'left', paddingRight: "20px" }}>Email: carmichaelkw47@gmail.com</li>
              <li style={{ float: 'left', paddingRight: "20px" }}>Phone Number: (973) 246-2613</li>
            </ul>
            </Grid>
          </Grid>

        </Typography>
      </Toolbar>
    </AppBar>
  )
}
