import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";
import $ from "jquery";
import todoanimation from "./../todo-icon.png"
import "./../App.css"
import { Link } from "react-router-dom";



class MakeTodo extends Component {

  render() {
    return (
      <div
      id="todo-box"
      
      >
        <div
        style={{
            position:"absolute",
            marginTop:"30px",
            marginLeft:"15px",
            color:"blue"
        }}
        >{this.props.text}</div>
    
      </div>
    );
  }
}

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      targetTodo:undefined
    };
    this.addTodo = this.addTodo.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }

  async componentDidMount() {
    await $.get("/api/todos/all")
      .done((resp) => {
        this.setState({
          todos: resp,
        });
      })
      .fail((jqxhr, settings, ex) => {
        console.log("failed, " + ex);
      });
  }
  async addTodo() {
    const todoText = $("#standard-basic").val();
    $("#standard-basic").val("")
    await $.post("/api/todos/new", { text: todoText })
      .done(() => {
        $.get("/api/todos/all")
          .done((resp) => {
            this.setState({
              todos: resp,
            });
          })
          .fail((jqxhr, settings, ex) => {
            console.log("failed, " + ex);
          });
        console.log("Request done!");
      })
      .fail((jqxhr, settings, ex) => {
        console.log("failed, " + ex);
      });
  }

  handleDelete(e){
 const targetDiv =(e.target.parentElement.parentElement)
//  console.log(targetDiv.className)
//  var r = /\d+/;
 const targetId = targetDiv.className
//  const targetId = targetDiv.id.slice()
    axios.delete(`/api/todos/delete/${targetId}`)
        .then(response => 
            $.get("/api/todos/all")
            .done((resp) => {
              this.setState({
                todos: resp,
              });
            })
            .fail((jqxhr, settings, ex) => {
              console.log("failed, " + ex);
            })
            )
        .catch((error) => {
          throw error.response
        })
   }

  render() {
    return (
      <div>
      <div id="move-todo" style={{
          marginTop:"20px",
          color:"#511",
          
      }}>
      <p
      style={{
          position:"absolute",
          top:"1px",
          right:"100%",
          width:"fit-content",
          fontFamily:"cursive"
         
      }}
      >type something to do</p><img src={todoanimation} height="60px" width="60px"  />
      </div>
        <div  style={{
            marginTop:"70px",
            marginLeft:"190px"
        }} >
          {this.state.todos.map((todo, index) => (
            <div key={index} >
            <MakeTodo text={todo.text} id={todo.id} />
            <div style={{
                marginLeft:"50%"
            }}>
            <Link className={todo.id} id={`edit${todo.id}`} to={`/edit#${todo.id}`}>
            <EditIcon color="primary" />
            </Link>
            <div className={todo.id} id={`delete${todo.id}`} onClick={this.handleDelete}>
            <DeleteIcon color="primary" />
           </div>
           </div>
           <div
           style={{
               height:"2px",
               width:"630px",
               background:"tan",
               color:"tan"
           }}
           ></div>
          </div>
          ))}
        </div>
        <TextField style={{
            marginTop:"60px",
            marginLeft:"190px"
        }} id="standard-basic" />
        <Button id="submit" onClick={this.addTodo}
        style={{
            marginTop:"60px",
            // marginLeft:"10px"
        }}
        >
          <AddIcon color="primary" fontSize="large" />
        </Button>
      </div>
    );
  }
}
