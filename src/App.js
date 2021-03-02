import React from 'react';
import './styles/main.css';
import Home from './Home/Home';
import Navbar from './NavBar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './NewPost/Post';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import Login from './Profile/Login';

function App() {
  return(
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/home' exact component={Home}/>
        <Route path='/post' exact component={Post}/>
        <Route path='/search' exact component={Search}/>
        <Route path='/profile' exact component={Profile}/>
        <Route path='/login' exact component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
