import React from 'react';
import logo from './logo.svg';
import axios from "axios";


import './App.css';
import NavigationBar from './Components/NavigationBar'
import UserThread from './Components/UserThread'


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
     <NavigationBar />
      {/* <UserThread />  */}
      </div>
    );
  }
}