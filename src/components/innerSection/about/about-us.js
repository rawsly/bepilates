import React, { Component } from 'react';
import ScrollupSection from '../../scrollupSection/scrollUp';
import Header from '../../headerSection/headerOne';
import BreadcrumbSection from '../../breadcrumbSection/breadcrumbOne';
import Skills from '../skills/skills';
import About from './about';
import TeamSection from '../../teamSection/teamOne';
import SubscribeSection from '../../subscribeSection/subscribeOne';
import ContactSection from '../../contactSection/contact';
import Map from '../map/map';
import FooterSection from '../../footerSection/footer';
import axios from 'axios';

const BASE_URL = "https://my-json-server.typicode.com/themeland/appo-json/themeOnePromoSection";

class aboutUs extends Component {
    state = {
        data: {},
        promoDataThree: []
    }
    componentDidMount(){
        axios.get(`${BASE_URL}`)
            .then(res => {
                this.setState({
                    data: res.data,
                    promoDataThree: res.data.promoDataThree
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
                    <BreadcrumbSection heading={"Trust the Experts"} home={"Home"} title={"About Us"} />
                    <Skills />
                    <About />
                    <section id="benifits" className="section benifits-area ptb_100">
                        <div className="container">
                            <div className="row">
                                {/* Benifits Item */}
                                {this.state.promoDataThree.map((item, idx) => {
                                    return(
                                        <div key={`pt_${idx}`} className="col-12 col-sm-6 col-md-4" data-aos="fade-up">
                                            <div className="benifits-item text-center p-3">
                                                <div className="feature-icon">
                                                    <img src={item.promoImage} alt="" />
                                                </div>
                                                {/* Benifits Text */}
                                                <div className="benifits-text">
                                                    <h3 className="mb-2">{item.promoTitle}</h3>
                                                    <p>{item.promoText}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                    <TeamSection />
                    <SubscribeSection />
                    <ContactSection />
                    <Map />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default aboutUs;