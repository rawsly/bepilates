import React, { Component } from 'react';

const initData = {
    heading: "Get all your things done with Appo",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore doloribus illum quas ipsam quia, amet accusantium accusamus exercitationem quis, nihil numquam commodi esse maiores quisquam. Autem molestias eum aliquid sunt.",
    btnText: "Get Started",
    welcomeThumb: "/img/welcome_mockup.png"
}

class welcomeSeven extends Component {
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
            <section id="home" className="section welcome-area bg-overlay bg-inherit h-100vh">
                <div className="container">
                    <div className="row justify-content-center">
                        {/* Welcome Intro Start */}
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="welcome-intro text-center">
                                <h1 className="text-white">{this.state.initData.heading}</h1>
                                <p className="text-white my-4">{this.state.initData.content}</p>
                                <a href="#" className="btn btn-bordered-white"><span>{this.state.initData.btnText}</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-8 col-md-5 mx-auto">
                            {/* Seoul Thumb */}
                            <div className="seoul-thumb text-center pt-5">
                                <img src={this.state.initData.welcomeThumb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default welcomeSeven;