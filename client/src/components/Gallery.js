import React, { Component } from 'react'
import { Button,Grid } from '@material-ui/core';
import $ from "jquery"
import DeleteIcon from "@material-ui/icons/Delete";
//using media upload part
var axios = require("axios");

$.get('/api/images/all')
.done((response)=>{
    console.log(response)
}) 
.fail((jqxhr, settings, ex) => {
    console.log("failed, " + ex);
  });

const x = require("../../../public/uploads/IMAGE-1601384384630.jpg")
                  


export default class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
          file: null,
          images:[]
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
      }

      async componentDidMount() {
        await $.get("/api/images/all")
          .done((resp) => {
            this.setState({
              images: resp,
            });
            console.log(resp)
          })
          .fail((jqxhr, settings, ex) => {
            console.log("failed, " + ex);
          });
      }

      
  handleDelete(e){
    const id = e.target.id
       axios.delete(`/api/images/delete/${id}`)
           .then(response => 
               $.get("/api/images/all")
               .done((resp) => {
                 this.setState({
                   images: resp,
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

      onFormSubmit(e) {
 
        e.preventDefault();
        const formData = new FormData();
        formData.append("myImage", this.state.file);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        
        axios
          .post("/api/images/upload", formData, config)
          .then((response) => {
           
          $.get("/api/images/all")
          .done((resp) => {
            this.setState({
              images: resp,
            });
            console.log(resp)
          })
          .fail((jqxhr, settings, ex) => {
            console.log("failed, " + ex);
          });
          })
          .catch((error) => {
            alert("error");
          });
      }
      onChange(e) {
        this.setState({ file: e.target.files[0] });
      }
    render() {
        return (
            <div>
                
                <form onSubmit={this.onFormSubmit}>
      
                <input type="file" name="myImage" onChange={this.onChange} />
               
                <div>           
                <Button   variant="contained"
                color="primary"
                  onClick={this.onFormSubmit}
                  >
                 Submit
                </Button>
                    
                </div>
              </form>
              <div>{this.state.images.map((image)=>
                <>
          
                <img
                className={image.id}
                height = "260px"
                width = "260px"
                style={{
                    padding:"10px"
                }}
                 src={require(`../../../public/uploads/${image.url.slice(18)}`)} />
                 <button
                  style={{
                    
                    color:"white",
                    height:"40px",
                    outline:"none",
                    width:"60px",
                    border:"none",
                    // borderColor:"#6495ED",
                    backgroundColor:"#6495ED",

                  }}
                  className={image.id} id={image.id} onClick={this.handleDelete}>
                 Delete
                </button>
                 </>
                 )}</div>
            </div>
        )
    }
}



