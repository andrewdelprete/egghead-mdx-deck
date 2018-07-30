import React from "react";

export default class Counter extends React.Component {
  state = { counter: 0 };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <h1>Components</h1>
        <p>You can use components even</p>
        <button onClick={this.handleClick}>Click Me</button>
        <p>
          <strong>You have clicked me {this.state.counter} times</strong>
        </p>
      </div>
    );
  }
}
