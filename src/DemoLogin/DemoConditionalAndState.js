import React, { Component } from 'react'

export default class DemoConditionalAndState extends Component {
    /*
    isLogin là thuộc tính của class
    true: đã login => Hiện tên người dùng
    false: chưa login => Hiện nút login
    state và setState được kế thừa từ component
    */ 
   state = { // lưu dưới dạng obj để dễ hiểu
       isLogin: false,
   }
   // isLogin = false => cách này sai vì render không chạy lại, state là trạng thái của component, lưu và cập nhật những giá trị thay đổi của component, khi state thay đổi thì render sẽ chạy lại, bắt buộc dùng setState 
    handleLogin = () => {
    //    console.log("run");
    //    this.state.isLogin = true; // Cách này sai vì render không chạy lại
    this.setState({
        isLogin: true
    })
    }
    

   // Phương thức của class
   renderLogin = () => {  
    if (this.state.isLogin) {
        return <p>Long Hai</p>
    } else {
        // Hiện nút login
        return <button onClick={this.handleLogin}>Login</button>
    }
   }

   //render là phương thức cập nhật lại giao diện

    render() {
        console.log("run render");
        return (
            <div>
                <h2>DemoConditionalAndState</h2>
                {this.renderLogin()}
            </div>
        )
    }
}
