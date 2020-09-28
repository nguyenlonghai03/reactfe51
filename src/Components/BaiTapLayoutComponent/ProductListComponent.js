import React, { Component } from 'react'
import ProductComponent from './ProductComponent'

export default class ProductListComponent extends Component {
    render() {
        return (
            <>
                <section id="smartphone" classname="container-fluid pt-5 pb-5">
                    <h1 classname="text-white text-center">BEST SMARTPHONE</h1>
                    <div classname="row">
                        <div classname="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <productcomponent>
                            </productcomponent></div>
                        <div classname="col-3">
                            <productcomponent>
                            </productcomponent></div>
                        <div classname="col-3">
                            <productcomponent>
                            </productcomponent></div>
                        <div classname="col-3">
                            <productcomponent>
                            </productcomponent></div>
                    </div>
                </section>

            </>
        )
    }
}
