import React, { Component } from 'react';

const initData = {
    logo: "/img/logo-3.png",
    heading: "Your download should begin automaticly.",
    text_1: "If it doesn’t start automatically,",
    text_2: "please",
    text_3: "to downlaod manually.",
    btnText: "click here",
    downloadThumb: "/img/download_thumb.png"
}

class download extends Component {
    state = {
        initData: {}
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <div className="inner-wrapper d-flex flex-column align-items-center justify-content-between p-4">
                <a href="index.html">
                    <img src={this.state.initData.logo} alt="" />
                </a>
                {/* ***** Download Page Area Start ***** */}
                <div className="download-page-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 order-2 order-md-1">
                                <h2 className="mb-3">{this.state.initData.heading}</h2>
                                <h6>{this.state.initData.text_1}<br />{this.state.initData.text_2} <a href="#">{this.state.initData.btnText}</a> {this.state.initData.text_3}</h6>
                            </div>
                            <div className="col-12 col-sm-8 col-md-6 col-lg-5 mx-auto order-1 order-md-2 mb-5 mb-md-0 pt-4 pt-md-0">
                                <img src={this.state.initData.downloadThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Download Page Area End ***** */}
                <div className="footer-bottom">
                    {/* Copyright Area */}
                    <div className="copyright-area border-0 pt-4 pt-md-0">
                        <p>Made with <i className="icofont-heart-alt" /> By <a href="#">Theme Land</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default download;