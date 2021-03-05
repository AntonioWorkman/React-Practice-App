import React from 'react';
import './styles/main.css';
import Home from './Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Post from './NewPost/Post';
import Search from './Search/Search';
import Profile from './Profile/Profile';
import Login from './Profile/Login';
import Register from './Profile/Register';
import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/home' exact component={Home} />
          <Route path='/post' exact component={Post} />
          <Route path='/search' exact component={Search} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
