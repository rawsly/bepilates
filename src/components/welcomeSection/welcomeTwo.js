import React, { Component } from 'react';

const initData = {
    heading: "Creative way to Land your page",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus commodi, voluptate quaerat iure quidem expedita eos a blanditiis sint modi est error veniam facere eum at doloribus amet, nobis ut.",
    btnText: "Get Started",
    welcomeThumb: "/img/riga_thumb.png"
}

class welcomeTwo extends Component {
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
                                <h1>{this.state.initData.heading}</h1>
                                <p className="my-4">{this.state.initData.content}</p>
                                <a href="#" className="btn btn-bordered"><span>{this.state.initData.btnText}</span></a>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-6">
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

export default welcomeTwo;