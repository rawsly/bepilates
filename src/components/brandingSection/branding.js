import React, { Component } from 'react';

const data = [
    {
        image: "/img/branding_img_1.png"
    },
    {
        image: "/img/branding_img_2.png"
    },
    {
        image: "/img/branding_img_3.png"
    },
    {
        image: "/img/branding_img_4.png"
    },
    {
        image: "/img/branding_img_5.png"
    },
    {
        image: "/img/branding_img_6.png"
    }
]

class branding extends Component {
    state = {
        data: []
    }
    componentDidMount(){
        this.setState({
            data: data
        })
    }
    render() {
        return (
            <section className="branding-area ptb_50">
                <div className="container">
                    <div className="row">
                        {/* Branding Slider */}
                        <div className="branding-slider owl-carousel op-5 py-5 border-bottom">
                            {/* Single Brand */}
                            {this.state.data.map((item, idx) => {
                                return(
                                    <div key={`bd_${idx}`} className="single-brand p-3">
                                        <img src={item.image} alt="" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default branding;