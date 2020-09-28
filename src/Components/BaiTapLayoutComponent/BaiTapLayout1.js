import React, { Component } from 'react'
import FooterComponent from '../FooterComponent'
import Header from './Header'
import ProductComponent from './ProductComponent'
import ProductListComponent from './ProductListComponent'
import SliderComponent from './SliderComponent'

export default class BaiTapLayout1 extends Component {

    render() {
        return (
            <div>
                <Header />
                <SliderComponent />
                <ProductComponent />
                <FooterComponent />
            </div>
        )
    }
}
