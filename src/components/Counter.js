import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrement = event => {
    event.preventDefault();
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  handleDecrement = event => {
    event.preventDefault();
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <div className="counter">
        <h4 className={this.state.counter < 0 ? "below-zero" : "above-zero"}>
          {this.state.counter}
        </h4>
        <div className="buttons">
          <a href="#" className="decrement" onClick={this.handleDecrement}>
            -
          </a>
          <a href="#" className="increment" onClick={this.handleIncrement}>
            +
          </a>
        </div>
      </div>
    );
  }
}
