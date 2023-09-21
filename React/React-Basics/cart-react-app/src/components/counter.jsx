import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
  };
  render() {
    return (
      <div>
        <h1> Hello, I am counter component </h1>
        <span
          style={{ fontSize: 18 }}
          className={this.getClassByCounterValue()}
        >
          {this.formatCount()}
        </span>
        <button className="btn btn-light btn-sm">Increment</button>
      </div>
    );
  }

  getClassByCounterValue() {
    let classes = "badge m-2 bg-";
    classes += this.state.count > 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    let count = this.state.count;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
