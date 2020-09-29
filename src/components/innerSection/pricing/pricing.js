import React, { Component } from 'react';
import ScrollupSection from '../../scrollupSection/scrollUp';
import Header from '../../headerSection/headerOne';
import BreadcrumbSection from '../../breadcrumbSection/breadcrumbOne';
import SubscribeSection from '../../subscribeSection/subscribeOne';
import FooterSection from '../../footerSection/footer';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/appo-json/themeOnePricingSection";

class pricing extends Component {
    state = {
        data: {},
        priceData: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    priceData: res.data.priceData
                })
                // console.log(this.state.data)
            })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <ScrollupSection />
                <div className="all-area">
                    <Header imageData={"/img/logo.png"} />
                    <BreadcrumbSection heading={"Pricing Plans"} home={"Home"} title={"Price Plans"} />
                    <section id="pricing" className="section price-plan-area bg-gray ptb_100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="price-plan-wrapper">
                                    {this.state.priceData.map((item, idx) => {
                                        return(
                                            <div key={`pd_${idx}`} className={item.planClass}>
                                                <div className="price-header d-flex align-items-center justify-content-between my-4 px-3">
                                                    <h4 className="plan-title text-uppercase">
                                                    {item.planTitle}
                                                    </h4>
                                                    <div className="plan-cost">
                                                        <span className="plan-price">{item.planPrice}</span>
                                                        <span className="plan-type text-uppercase">{item.planPackage}</span>
                                                    </div>
                                                </div>
                                                <ul className="plan-features pb-3">
                                                    <li><i className="icofont-check" />{item.plan_li_1}</li>
                                                    <li><i className="icofont-check" />{item.plan_li_2}</li>
                                                    <li><i className="icofont-check" />{item.plan_li_2}</li>
                                                    <li><i className="icofont-check" />{item.plan_li_4}</li>
                                                    <li><i className="icofont-close" />{item.plan_li_5}</li>
                                                    <li><i className="icofont-close" />{item.plan_li_6}</li>
                                                </ul>
                                                <div className="plan-select">
                                                    <a className="btn btn-bordered text-uppercase" href="#">{item.btnText}</a>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                    <SubscribeSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default pricing;