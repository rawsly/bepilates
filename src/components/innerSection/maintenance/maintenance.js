import React, { Component } from 'react';

const initData = {
    logo: "/img/logo-3.png",
    headingSpan: "Sorry for the innovance!",
    heading: "Server is under maintenance",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.",
    btnText: "Learn More",
    maintenanceThumb: "/img/maintenance.png"
}

class maintenance extends Component {
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
            <div className="inner-wrapper maintenance-wrapper d-flex flex-column align-items-center justify-content-between p-4">
                <a href="index.html">
                    <img src={this.state.initData.logo} alt="" />
                </a>
                {/* ***** Maintenance Area Start ***** */}
                <div className="maintenance-area">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-12 col-md-6 order-2 order-md-1">
                                {/* Maintenance Content */}
                                <div className="maintenance-content my-5 my-md-0">
                                    <div className="alert alert-warning d-inline-flex">
                                    {this.state.initData.headingSpan}
                                    </div>
                                    <h1>{this.state.initData.heading}</h1>
                                    <p className="my-3">{this.state.initData.content}</p>
                                    <a href="#" className="btn btn-primary">{this.state.initData.btnText}</a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-10 col-md-6 order-1 order-md-2 mx-auto pt-4 pt-md-0">
                                <img src={this.state.initData.maintenanceThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Maintenance Area End ***** */}
                <div className="footer-bottom">
                    {/* Copyright Area */}
                    <div className="copyright-area pt-4 pt-md-0">
                        <p>Made with <i className="icofont-heart-alt" /> By <a href="#">Theme Land</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default maintenance;