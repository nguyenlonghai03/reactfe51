import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class LifeCycle extends Component {
  constructor(props) {
    // 2 thuộc tính state và props của component
    super(props);
    this.state = {
      number: {
        index: 1,
      },
    };
    console.log("contructor");
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("render");
    return (
      <div>
        <header>Header Component</header>
        <h1>LifeCycle number: {this.state.number}</h1>
        <button
          onClick={() => {
            let newNumber = { ...this.state.number };
            newNumber.index += 1;

            this.setState({
              number: newNumber,
            });
          }}
        >
          +
        </button>
        {/* {this.state.number < 3 ? <ChildComponent /> : ""} */}
        <ChildComponent number={this.state.number} />
      </div>
    );
  }

  componentDidMount() {
    // Gọi api ở didmount
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    //Hàm này chạy khi setState hoặc thay đổi props
    console.log("componentDidUpdate");
  }
}

export default LifeCycle;
