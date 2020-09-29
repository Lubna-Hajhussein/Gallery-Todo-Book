import React, { Component } from 'react'
import axios from "axios";
import $ from "jquery";
import {  Button, Link } from "@material-ui/core";
//   App.username = window.location.search.substr(10);
export default class Edit extends Component {
    
   constructor(){
       super()
       this.handleEdit = this.handleEdit.bind(this)
   }
   handleEdit(){
     const text =  $("#new-todo-text").val()
     const id = window.location.href.slice(27)
    //  console.log(window.location.href.indexOf("#"))

    axios.put('/api/todos/edit', { text: text, id: id })
    .then((response)=>{
        console.log('saved successfully')
      });
   }

    render() {
        return (
            <div style={{
                    
                position:"absolute",
                left:"30%",
                right:"50%",
                top:"40%"
                
             }}>
                <textarea id="new-todo-text" style={{
                    width:"500px",
                    height:"100px"
                }} />
          
                <Button  variant="contained" color="primary" href="#contained-buttons" onClick={this.handleEdit}
                >submit</Button>
                <Link href="/todos" style={{
                    direction:"none",
                    position:"absolute",
                    left:"460px"
                }}>BACK </Link>
            </div>
        )
    }
}
