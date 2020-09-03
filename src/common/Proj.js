import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import LaunchIcon from '@material-ui/icons/Launch';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
      
    },card:{
        backgroundColor:"#3f51b5"
  
        },
        button:{
        backgroundColor:"white",

        },
        font:{
            color:'white'
        }
  }));
  const background = {
    background: `rgb(2,0,36)`,
    background: `linear-gradient(90deg, rgba(2,0,36,1) 43%, rgba(10,69,167,1) 100%)`
  }

export default function Proj(props) {
    const classes = useStyles();
// Props --> github link, deplyed app link , file path to screenshot
    return (
    <div className={classes.root} >
        <Card className={classes.root}>
            <CardContent className={classes.card}>
            <Typography gutterBottom variant="h5" className={classes.font}component="h2">
                {`${props.title}`}
            </Typography>
            <Divider />
            <ButtonGroup orientation="vertical" size="small" aria-label="small outlined button group">
                <Button target="_blank" className={classes.button}href={`${props.gitHubLink}`} startIcon={<GitHubIcon color='white' fontSize="large"/>}>GitHub Link</Button>
                <Button  target="_blank" className={classes.button}href={`${props.deployedLink}`} startIcon={<LinkIcon color='action' fontSize="large"/>}>Deployed Link</Button>
                <Button target="_blank" className={classes.button} href={`${props.viewLink}`} startIcon={<LaunchIcon color='action' fontSize="large"/>}>View</Button>
            </ButtonGroup>
            </CardContent>
        </Card>
    </div>
    )
}
