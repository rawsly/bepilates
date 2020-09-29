import React, { Component } from 'react';

const initData = {
    logo: "/img/logo-3.png",
    heading: "Error 404",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.",
    btnText: "Go Home",
    errorThumb: "/img/404.gif"
}

class errorOne extends Component {
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
            <div className="inner-wrapper d-flex flex-column align-items-center p-4">
                <a href="index.html">
                    <img src={this.state.initData.logo} alt="" />
                </a>
                {/* ***** Error Area Start ***** */}
                <div className="error-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto mb-5">
                                <img src={this.state.initData.errorThumb} alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-10 col-lg-8 mx-auto text-center">
                                <h1>{this.state.initData.heading}</h1>
                                <p className="mt-3 mb-4">{this.state.initData.content}</p>
                                <a href="index.html" className="btn btn-primary"><span>{this.state.initData.btnText}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default errorOne;