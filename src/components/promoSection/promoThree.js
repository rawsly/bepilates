import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/appo-json/themeOnePromoSection";

class promoTwo extends Component {
    state = {
        data: {},
        promoDataTwo: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    promoDataTwo: res.data.promoDataTwo
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <section id="benifits" className="section benifits-area ptb_100">
                <div className="container">
                    <div className="row">
                        {/* Benifits Item */}
                        {this.state.promoDataTwo.map((item, idx) => {
                            return(
                                <div key={`pt_${idx}`} className="col-12 col-sm-6 col-md-4" data-aos="fade-up">
                                    <div className="benifits-item text-center p-3">
                                        <div className="feature-icon">
                                            <img src={item.promoImage} alt="" />
                                        </div>
                                        {/* Benifits Text */}
                                        <div className="benifits-text">
                                            <h3 className="text-white mb-2">{item.promoTitle}</h3>
                                            <p className="text-white">{item.promoText}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default promoTwo;