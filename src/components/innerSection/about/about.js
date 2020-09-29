import React, { Component } from 'react';
import CounterSection from '../../counterSection/counter';

const initData = {
    heading: "We make Unique Websites to Showcase your apps",
    headingText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, eaque. Assumenda modi debitis voluptatem eum delectus. Accusantium voluptate, facilis expedita fuga delectus explicabo vel, dicta ipsam! Repudiandae commodi neque atque asperiores, dolore. Deleniti sint aperiam officiis fuga quia laborum reprehenderit voluptates suscipit assumenda, accusamus aliquam soluta nesciunt facere, amet nihil?",
    aboutThumb: "/img/about_thumb.png"
}

class about extends Component {
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
            <section className="section about-us ptb_100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-8 col-md-6 col-lg-5 mx-auto mb-5 mb-lg-0">
                            <img className="mx-auto" src={this.state.initData.aboutThumb} alt="" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <h2>{this.state.initData.heading}</h2>
                            <p className="my-3">{this.state.initData.headingText}</p>
                            {/* Counter List */}
                            <CounterSection />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default about;