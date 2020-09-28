import React from 'react'

export default function DemoStateless() {
    // Bên trong lệnh return của function component là nội dung giao diện của thẻ này. Lưu ý: Nội dung component phải được bao phủ bởi 1 thẻ bất kỳ
    return (
        <div className="container">
            <div classname="card text-white bg-dark w-25">
                <img classname="card-img-top" src="https://picsum.photos/200/200" alt />
                <div classname="card-body">
                    <h4 classname="card-title">Title</h4>
                    <p classname="card-text">Text</p>
                </div>
            </div>  
        </div>
    )
}
