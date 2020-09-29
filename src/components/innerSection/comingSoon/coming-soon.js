import React, { Component } from 'react';

const initData = {
    logo: "/img/logo-white.png",
    heading: "Coming Soon",
}

class comingSoon extends Component {
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
            <div className="coming-soon">
                <section className="section row h-100vh w-100 d-flex p-0 m-0">
                    <div className="col-lg p-0 d-none d-lg-block">
                        <div className="bg-wrapper d-flex flex-column justify-content-between p-4 bg-overlay">
                            {/* Logo */}
                            <a className="navbar-brand d-table" href="index.html">
                                <img className="logo" src={this.state.initData.logo} alt="" />
                            </a>
                            <div className="footer-bottom">
                                {/* Copyright Area */}
                                <div className="copyright-area border-0">
                                    <p className="text-white">Made with <i className="icofont-heart-alt text-white" /> By <a className="text-white" href="#">Theme Land</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 align-self-center p-0">
                        <div className="countdown-content">
                            <h1 className="text-center text-uppercase mb-5">{this.state.initData.heading}</h1>
                            <div className="countdown-times">
                                <div className="countdown d-flex justify-content-center" data-date="2021-09-09" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default comingSoon;