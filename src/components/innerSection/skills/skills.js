import React, { Component } from 'react';

const initData = {
    heading: "We care about your Business",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, eaque. Assumenda modi debitis voluptatem eum delectus. Accusantium voluptate, facilis expedita fuga delectus explicabo vel, dicta ipsam! Repudiandae commodi neque atque asperiores, dolore. Deleniti sint aperiam officiis fuga quia laborum reprehenderit voluptates suscipit assumenda, accusamus aliquam soluta nesciunt facere, amet nihil?",
    headingTextTwo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt error vel autem, quibusdam voluptatibus nobis voluptatum, recusandae consectetur, quas numquam dolorem deserunt dignissimos est! Deleniti delectus sint nostrum reiciendis? Ratione.",
    headingTextThree: "Technologies We Use",
    icon_1: "fab fa-html5 fa-lg",
    icon_2: "fab fa-css3 fa-lg",
    icon_3: "fab fa-bootstrap fa-lg",
    icon_4: "fab fa-sass fa-lg",
    icon_5: "fas fa-rss fa-lg",
    text_1: "HTML/CSS",
    text_2: "Bootstrap",
    text_3: "Javascipt",
    text_4: "PhP"
}

class skills extends Component {
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
            <section className="section skills-area bg-gray ptb_100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                            <div className="skills-content">
                                <h2>{this.state.initData.heading}</h2>
                                <p className="d-none d-sm-block my-3">{this.state.initData.headingText}</p>
                                <p className="d-block d-sm-none my-3">{this.state.initData.headingTextTwo}</p>
                                <h6 className="fw-5 mb-2">{this.state.initData.headingTextThree}</h6>
                                <a className="op-5 pr-3" href="#"><i className={this.state.initData.icon_1} /></a>
                                <a className="op-5 pr-3" href="#"><i className={this.state.initData.icon_2} /></a>
                                <a className="op-5 pr-3" href="#"><i className={this.state.initData.icon_3} /></a>
                                <a className="op-5 pr-3" href="#"><i className={this.state.initData.icon_4} /></a>
                                <a className="op-5" href="#"><i className={this.state.initData.icon_5} /></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-5 mx-lg-auto">
                            {/* Progress Bars */}
                            <div className="progress-bars">
                                {/* Progress Label */}
                                <div className="progress-label">
                                    <span className="text-dark">{this.state.initData.text_1}</span>
                                </div>
                                {/* Progress */}
                                <div className="progress mb-3">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100} style={{width: '68%'}} />
                                </div>
                                {/* Progress Label */}
                                <div className="progress-label">
                                    <span className="text-dark">{this.state.initData.text_2}</span>
                                </div>
                                {/* Progress */}
                                <div className="progress mb-3">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} />
                                </div>
                                {/* Progress Label */}
                                <div className="progress-label">
                                    <span className="text-dark">{this.state.initData.text_3}</span>
                                </div>
                                {/* Progress */}
                                <div className="progress mb-3">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} style={{width: '82%'}} />
                                </div>
                                {/* Progress Label */}
                                <div className="progress-label">
                                    <span className="text-dark">{this.state.initData.text_4}</span>
                                </div>
                                {/* Progress */}
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default skills;