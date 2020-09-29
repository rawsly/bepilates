import React, { Component } from 'react';

const initData = {
    heading: "A best way to",
    headingSpan: "start",
    headingTwo: "your business",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus commodi, voluptate quaerat iure quidem expedita eos a blanditiis sint modi est error veniam facere eum at doloribus amet, nobis ut.",
    btnText: "Get Started",
    btnTextTwo: "Read More",
    welcomeThumb: "/img/login_3.svg"
}

class welcomeFour extends Component {
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
            <section id="home" className="section welcome-area bg-inherit d-flex align-items-center h-100vh">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Welcome Intro Start */}
                        <div className="col-12 col-md-7 col-lg-6">
                            <div className="welcome-intro">
                                <h1 className="fw-5">{this.state.initData.heading} <span>{this.state.initData.headingSpan}</span> {this.state.initData.headingTwo}</h1>
                                <p className="my-4">{this.state.initData.content}</p>
                                <div className="button-group">
                                    <a href="#" className="btn btn-bordered">{this.state.initData.btnText}</a>
                                    <a href="#" className="btn btn-bordered d-none d-sm-inline-block">{this.state.initData.btnTextTwo}</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-6 pt-4 pt-md-0">
                            {/* Welcome Thumb */}
                            <div className="welcome-thumb text-center">
                                <img src={this.state.initData.welcomeThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default welcomeFour;