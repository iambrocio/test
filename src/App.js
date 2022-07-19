import React from "react";

class App extends React.Component {
  // Step 1. Initiate props to start with the current date;
  constructor(props) {
    super(props);
    // We are going to give our state the default value;
    this.state = { time: new Date().toLocaleString() };
    this.updateTime = this.updateTime.bind(this);
    this.quitTime = this.quitTime.bind(this);
  }

  // Next we want to create a setInterval that will update our time every second
  // In class components we have to create a method and then give them the logic
  // This program at the bottom works all we have to do is to change state
  //   updateTime() {
  //     setInterval(() => {
  //       console.log("it works");
  //     }, 2000);
  //   }

  quitTime() {
    clearInterval(this.IDinterval);
  }

  updateTime() {
    // I think I know where My mistake was I was calling setInterval outsie i need to call set state inside oft
    this.IDinterval = setInterval(() => {
      this.setState({ time: new Date().toLocaleString() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>Timer Project: {this.state.time} </h1>
        <button onClick={this.updateTime}>Click to start the interval</button>
        <button onClick={this.quitTime}>Stop timer</button>
      </div>
    );
  }
}

export default App;
