import React from 'react'
import Footer from '../common/Footer'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { Link, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
        width: '400px',
        backgroundColor: 'blue'
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    container: {
        transform: `translate(${-441}px, ${95}%)`,
    }
}));

const background = {
    background: `rgb(2,0,36)`,
    background: `linear-gradient(90deg, rgba(2,0,36,1) 43%, rgba(10,69,167,1) 100%)`
}

export default function Landing() {
    const location = useLocation();
    const classes = useStyles();
    return (
        <div style={background}>
            <Container maxWidth="sm" className={classes.container} >
                <Typography variant="h5">
                    <h1 style={{ color: "white" }}>Welcome</h1>
                    <p style={{ color: "white" }}>
                        Kamal is a fullstack web developer who has worked with Mongoose , Sequelize and React. He enjoys coding, skating and reading manga.
                    </p>
                    <Button variant="contained" size="large" color="secondary" className={classes.margin}>
                        <Link
                            to="/projects"
                            //   style={link}
                            className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                        >
                            Projects
        </Link>
                    </Button>
                </Typography>
            </Container>
            <Footer />
        </div>
    )
}
