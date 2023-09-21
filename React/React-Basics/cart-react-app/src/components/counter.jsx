import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <h1> Hello, I am counter component </h1>
        <span style={{ fontSize: 18 }} className="badge bg-primary m-2">
          {this.formatCount()}
        </span>
        <button className="btn btn-light btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    let count = this.state.count;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
