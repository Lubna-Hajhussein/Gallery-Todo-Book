import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import todoicon from "./../todo-icon.png"
import galleryicon from "./../gallery-icon.png"

const useStyles = makeStyles((theme) =>({
    button:{
        height:"80px",
        width:"152px",
        margin:"60px",
        color:"#FFF8DC",
        background:"#6495ED",
        '&:hover':{
            color:"#6495ED",
            background:"#FFF8DC",
        },
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize:"15px"
        
    },
    icons:{
        height:"60px",
        width:"60px"
    },
    container:{
        position:"absolute",
        left:"30%",
        right:"30%",
        top:"35%",
    }
}))


export default function Home(){
    const classes = useStyles();
  

    return (
        <div className={classes.container}>
            <Button className={classes.button}  variant="outlined" color="primary" to="/todos" component={Link} >
            Todo <img className={classes.icons} src={todoicon} />
            </Button>        
            <Button className={classes.button} variant="outlined" color="primary" to="/gallery" component={Link} >
            Gallery <img className={classes.icons} src={galleryicon} />
            </Button>
            
            </div>

    )
}