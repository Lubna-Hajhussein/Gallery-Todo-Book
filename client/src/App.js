import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Home from "./components/Home"
import Todo from "./components/Todo"
import Gallery from "./components/Gallery"
import Navbar from "./components/Navbar"
import Edit from './components/Edit'
import ApiGallery from "./components/ApiGallery"



//test
function App() {
  return (
    <Router>
    <Navbar />
    <Route path="/" exact component= {Home} />
    <Route path="/todos" component= {Todo} />
    <Route path="/gallery" component= {Gallery} />
    <Route path="/edit" component= {Edit} />
    <Route path="/search" component= {ApiGallery} />
    </Router>
  );
}

export default App;
