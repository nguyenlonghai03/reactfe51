import React from "react";

// Nếu là function thì phải truyền cái props, tức đưa state của class cha vào bằng props
export default function FunctionProps(props) {
  console.log(props);
  return (
    <div>
      <h3>FunctionProps</h3>
      <p>ten : {props.hoVaTen}</p>
      <p>lop : {props.lop}</p>
    </div>
  );
}
