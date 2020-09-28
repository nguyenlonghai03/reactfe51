import React, { Component } from 'react'

export default class HandleEvent extends Component {

    showTitle = () => { // do là function k chức danh nên gọi k cần dấu ngoặc
        alert('Hello Cybersoft');
    }

    showMess = (mess) => {
        alert(`hello ${mess}`);
    }

    // closure functioncls
    
    render() {
        return ( 
            <div>
                {/*Xử lý sự kiện truyền call back */}
                <button onClick={this.showTitle}>
                Hello
                </button>
                {/*Xử lý sự kiện sử dụng hàm trung gian */}
                <button onClick={() => {
                    this.showTitle();
                }
                }>showTitle</button>

                <br /> <br />
                
                <button onClick={this.showMess.bind(this, "hai")}>ShowMess</button>
                <button onClick={() => {
                    this.showMess('Khai');
                }}>Hai ne</button>
            </div>
        )
    }
}
