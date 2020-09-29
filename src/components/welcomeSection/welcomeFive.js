import React, { Component } from 'react';

const initData = {
    heading: "Creative way to Land your page",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nihil facilis aperiam, voluptatum asperiores temporibus accusamus saepe nostrum commodi excepturi hic veritatis dolores perferendis aspernatur dolore quis aut libero impedit sunt cum sed beatae corporis. Dolor non, autem veniam libero.",
    btnText: "Submit"
}

class welcomeFive extends Component {
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
            <section id="home" className="section welcome-area bg-inherit d-flex align-items-center overlay-primary jarallax h-100vh pt-0" data-jarallax-video="https://www.youtube.com/watch?v=hs1HoLs4SD0">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        {/* Welcome Intro Start */}
                        <div className="col-12 col-md-10 col-lg-8">
                            <div className="welcome-intro text-center">
                                <h1 className="text-white">{this.state.initData.heading}</h1>
                                <p className="text-white mt-4 mb-5">{this.state.initData.content}</p>
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Enter Your Email" aria-label="Recipient's username" />
                                    <div className="input-group-append">
                                        <button className="btn btn-bordered-white" type="submit">{this.state.initData.btnText}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default welcomeFive;