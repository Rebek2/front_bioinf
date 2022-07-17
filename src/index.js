import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './components/blog/blog'
import Add from './components/blog/add'
import About from './components/about/about'
import Post from './components/blog/post'
import { BrowserRouter as Router, Route
} from "react-router-dom";
import CreateMember from './components/about/aboutAdd';
import Event from './components/events/events';
import FetchPhotos from './components/Gallery/gallery';
ReactDOM.render((
  <Router>
    <Route exact path='/' component={Home} />
    <Route exact path='/blog' component ={Home}/>
    <Route exact path = '/dodaj' component = {Add}/>
    <Route exact path ='/post/:id' component ={Post}/>
    <Route exact path = '/about' component = {About}/>
    <Route exact path = '/about/create' component = {CreateMember}/>
    <Route exact path ='/events' component = {Event}/>
    <Route exact path = '/gallery' component = {FetchPhotos}/>
  </Router>
  ),
  document.getElementById('root')
);

