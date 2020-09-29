import React, { Component } from 'react';

const initData = {
    logo: "/img/logo-3.png",
    heading: "Forgot your Password?",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.",
    btnText: "Reset",
    forgotThumb: "/img/forgot_thumb.png"
}

class forgot extends Component {
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
                {/* ***** Forgot Area Start ***** */}
                <div className="forgot-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-8 col-md-6 col-lg-5 mb-5 mb-md-0 mx-auto pt-4 pt-md-0">
                                <img src={this.state.initData.forgotThumb} alt="" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-6 mb-5 mb-md-0">
                                <h2 className="text-primary">{this.state.initData.heading}</h2>
                                <p className="mt-3 mb-4">{this.state.initData.content}</p>
                                <div className="input-group reset-password">
                                    <input type="email" className="form-control" placeholder="Enter your Email" />
                                    <div className="input-group-append mt-3 mt-sm-0">
                                        <button type="button" className="btn btn-primary">{this.state.initData.btnText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Forgot Area End ***** */}
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

export default forgot;