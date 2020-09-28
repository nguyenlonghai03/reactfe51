import React, { Component } from 'react'

export default class Databinding extends Component {
    // this là nguyên cái đối tượng này

    // Thuộc tính sử dụng đc ở nhiều phương thức trong lớp đối tượng
    hocVien = {
        ma: 1,
        avatar: 'https://picsum.photos/200/200',
        tenHocVien: 'Nguyen Long Hai'
    }

    // Phương thức => phương thức có thể gọi trong các phương thức khác của lớp đối tượng
    renderHocVien = () => {
        return <div classname="card text-white bg-primary">
  <img classname="card-img-top" src={this.hocVien.avatar} alt />
  <div classname="card-body">
    <h4 classname="card-title">{this.hocVien.tenHocVien}</h4>
    <p classname="card-text">Mã số: {this.hocVien.ma}</p>
  </div>
</div>

    }







    render() {

        // binding data là biến
        let title = "CYBERSOFT";
        let imgSrc = 'https://picsum.photos/200/200';


        // binding data là hàm
        const renderImg = () => {
            // Gía trị hàm muốn render ra giao diện phải trả về chuỗi, số, hoặc jsx: jsx là những cái tag component...
            return <div className="card text-white bg-primary">
                <img className="card-img-top" src={imgSrc} alt />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{title}</p>
                </div>
            </div>

        }

        return (
            <div className="container">



                <div id="title">
                    {title}
                </div>
                <div className="w-25">
                    <img src={imgSrc} />
                </div>
                <input className="w-25 form-control" value={title} />
                Databinding


                <div>
                    {renderImg()};
                </div>
                <ul>
                    <li>Mã học viên: {this.hocVien.ma}</li>
                    <li>Tên học viên: {this.hocVien.tenHocVien}</li>
                    <li>Hình ảnh: <img src={this.hocVien.avatar} /></li>
                </ul>
                {this.renderHocVien()}


            </div>
        )
    }
}
