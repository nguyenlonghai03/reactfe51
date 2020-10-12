import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  state = {
    ten: "Nguyen Long Hai",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>DemoProps</h2>

        <FunctionProps
          //Cách truyền props trong js
          // Đây là 1 obj key và value
          hoVaTen={this.state.ten}
          lop={this.state.lop}
        />

        <ClassProps hoVaTen={this.state.ten} lop={this.state.lop} />
      </div>
    );
  }
}
