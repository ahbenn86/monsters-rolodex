import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') 
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster, i) => {
            return <div key={[i]}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }
}

export default App;
