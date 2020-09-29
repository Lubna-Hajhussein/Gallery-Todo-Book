import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import "./../App.css"
import { Button } from '@material-ui/core';
import todoanimation from "./../todo-icon.png"
import galleryanimation from "./../gallery-icon.png"

const useStyles = makeStyles((theme) =>({
    container:{
        width: "100%",
        background: "#511",
        height:"60px",
      
    },
    icon:{
        '&:hover':{
            // fill:"#6495ED",
            fill:"#FFF8DC",
        },
    }
}))

export default function Navbar(){
   const classes = useStyles()
        return (
            
            <div className={classes.container} id="nav">
           
            <a href="/">
            <svg className={classes.icon} fill="#6495ED" xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>								
            
            </a>
            
            </div>
        )
    
}
