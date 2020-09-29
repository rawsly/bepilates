import React, { Component } from 'react';

const initData = {
    heading: "Sell your product more efficiently",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto beatae, asperiores tempore repudiandae saepe aspernatur unde voluptate sapiente quia ex.",
    btnText: "Download",
    btnTextTwo: "Play Video",
    welcomeThumb: "/img/login_1.svg"
}

class welcomeThree extends Component {
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
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-md-6 col-lg-6">
                            {/* Welcome Thumb */}
                            <div className="welcome-thumb text-center">
                                <img src={this.state.initData.welcomeThumb} alt="" />
                            </div>
                        </div>
                        {/* Welcome Intro Start */}
                        <div className="col-12 col-md-6 col-lg-5 pt-4 pt-sm-0">
                            <div className="welcome-intro">
                                <h1>{this.state.initData.heading}</h1>
                                <p className="my-3">{this.state.initData.content}</p>
                                <div className="button-group">
                                    <a href="#" className="btn btn-bordered d-none d-lg-inline-block"><span>{this.state.initData.btnText}</span></a>
                                    <a className="video-btn" data-fancybox href="https://www.youtube.com/watch?v=hs1HoLs4SD0">
                                        <span className="play-btn">
                                            <i className="icofont-ui-play" />
                                        </span>
                                        <span className="play-text pl-2">
                                        {this.state.initData.btnTextTwo}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default welcomeThree;