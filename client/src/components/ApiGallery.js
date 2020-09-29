import React, { Component } from 'react'

export default class ApiGallery extends Component {
    constructor(){
        super()
        this.handleSearch = this.handleSearch.bind(this)
    }
    handleSearch(){
        
    }
    render() {
        return (
            <div>
                
            <input onClick={this.handleSearch} />
            </div>
        )
    }
}

