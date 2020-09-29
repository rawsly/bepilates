import React, { Component } from 'react';

const initData = {
    heading: "Creative way to Land your page",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus commodi, voluptate quaerat iure quidem expedita eos a blanditiis sint modi est error veniam facere eum at doloribus amet, nobis ut.",
    btnText: "Get Started",
    btnTextTwo: "Get Started",
    welcomeThumb: "/img/welcome_mockup_2.png"
}

class welcomeEight extends Component {
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
            <section id="home" className="section welcome-area bg-inherit h-100vh">
                <div className="shapes-container">
                    <div className="shape bg-shape" />
                </div>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        {/* Welcome Intro Start */}
                        <div className="col-12 col-md-7 col-lg-6">
                            <div className="welcome-intro text-right">
                                <h1>{this.state.initData.heading}</h1>
                                <p className="my-4">{this.state.initData.content}</p>
                                <a href="#" className="btn btn-bordered d-none d-md-inline-block">{this.state.initData.btnText}</a>
                                <a href="#" className="btn btn-bordered-white d--inline-block d-md-none">{this.state.initData.btnTextTwo}</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-6">
                            {/* Welcome Thumb */}
                            <div className="welcome-thumb text-center" data-aos="fade-right" data-aos-delay={500} data-aos-duration={1000}>
                                <img src={this.state.initData.welcomeThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default welcomeEight;