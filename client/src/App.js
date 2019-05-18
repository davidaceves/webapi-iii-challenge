import React, { Component } from 'react';
import axios from "axios";

import './App.css';
import Users from './components/Users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount(){
    axios
      .get("http://localhost:4000/api/users")
      .then(res => this.setState({ users: res.data}))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Users users={ this.state.users }/>
      </div>
    );
  }
}

export default App;
