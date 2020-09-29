import React, { Component } from 'react';

const initData = {
    logo: "/img/logo-3.png",
    heading: "Thank you for downloading Appo",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.",
    btnText: "Go Home",
    thanksThumb: "/img/thanks_thumb.png"
}

class thankyou extends Component {
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
                {/* ***** Thanks Area Start ***** */}
                <div className="thanks-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5 mx-auto mb-5 pt-4">
                                <img src={this.state.initData.thanksThumb} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-10 col-lg-8 mx-auto text-center mb-5">
                                <h2>{this.state.initData.heading}</h2>
                                <p className="my-3">{this.state.initData.content}</p>
                                <a href="index.html" className="btn btn-primary"><span>{this.state.initData.btnText}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Thanks Area End ***** */}
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

export default thankyou;