import React from 'react';
import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import './App.css';
import NavigationBar from './Components/NavigationBar'
import UserThread from './Components/UserThread'
import Register from './Components/Register'
import Login from './Components/Login'


export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  };

  componentDidMount() {
    this.onLoad();
  };

  onLoad = () => {
    axios
      .get("http://localhost:5000/user/all")
      .then(response => {
        this.setState({
          data: response.data
        });
        console.log(this.state.data)
      });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <NavigationBar />

          <Route exact path="/" render={() => <UserThread getAll={this.onLoad} data={this.state.data} />} />

          <Route exact path="/Register" render={() => <Register getAll={this.onLoad} data={this.state.data} />} />
          <Route exact path="/Login" render={() => <Login getAll={this.onLoad} data={this.state.data} />} />

        </Router>
      </div>
    );
  }
}