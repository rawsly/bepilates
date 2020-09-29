import React, { Component } from 'react';

const initData = {
    logo: "/img/logo-3.png",
    heading: "Subscribe to get updates!",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.",
    btnText: "Subscribe",
    newsletterThumb: "/img/newsletter_thumb.png"
}

class newsletter extends Component {
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
                {/* ***** Newsletter Area Start ***** */}
                <div className="newsletter-area mb-5 mb-lg-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-6 col-lg-5 mx-auto order-2 order-md-1">
                                <h2 className="text-primary">{this.state.initData.heading}</h2>
                                <p className="my-4">{this.state.initData.content}</p>
                                <div className="input-group reset-password">
                                    <input type="email" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" />
                                    <div className="input-group-append mt-3 mt-sm-0">
                                        <button className="btn btn-primary" type="submit">{this.state.initData.btnText}</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-8 col-md-6 mx-auto mb-5 mb-md-0 order-1 order-md-2 pt-4 pt-md-0">
                                <img src={this.state.initData.newsletterThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Newsletter Area End ***** */}
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

export default newsletter;