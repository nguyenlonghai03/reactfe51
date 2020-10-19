import React, { Component } from "react";

export default class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("============getDerivedStateFromPropsChild");
    return null;
  }

  shouldComponentUpdate() {
    console.log("shouldComponentChild");
    return true;
  }
  render() {
    console.log("renDerChild");
    return (
      <div>
        <h3>Child number: {this.props.number.index}</h3>
        Component child
      </div>
    );
  }

  componentDidMount() {
    console.log("ComponentDidMountChild");
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdateChild");
  }

  componentWillUnmount() {
    // Life cicle chạy trước khi component mất khỏi giao diện
    console.log("willUnmountChild");
  }
}
