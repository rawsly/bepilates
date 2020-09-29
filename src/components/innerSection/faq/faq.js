import React, { Component } from 'react';
import ScrollupSection from '../../scrollupSection/scrollUp';
import Header from '../../headerSection/headerOne';
import BreadcrumbSection from '../../breadcrumbSection/breadcrumbOne';
import SubscribeSection from '../../subscribeSection/subscribeOne';
import FooterSection from '../../footerSection/footer';

const faqData = [
    {
        heading: "How can I install this app?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nisi, qui ipsa magni itaque. Corporis eaque sit magnam maxime quam.",
        image: "/img/avatar_1.png"
    },
    {
        heading: "What about the event?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nisi, qui ipsa magni itaque. Corporis eaque sit magnam maxime quam.",
        image: "/img/avatar_2.png"
    },
    {
        heading: "This app is not working?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nisi, qui ipsa magni itaque. Corporis eaque sit magnam maxime quam.",
        image: "/img/avatar_3.png"
    },
    {
        heading: "How can I get more?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nisi, qui ipsa magni itaque. Corporis eaque sit magnam maxime quam.",
        image: "/img/avatar_4.png"
    },
    {
        heading: "Can I opt out from this?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nisi, qui ipsa magni itaque. Corporis eaque sit magnam maxime quam.",
        image: "/img/avatar_5.png"
    },
    {
        heading: "How can I install this app?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nisi, qui ipsa magni itaque. Corporis eaque sit magnam maxime quam.",
        image: "/img/avatar_1.png"
    },
    {
        heading: "How can I install this app?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nisi, qui ipsa magni itaque. Corporis eaque sit magnam maxime quam.",
        image: "/img/avatar_2.png"
    },
    {
        heading: "How can I install this app?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nisi, qui ipsa magni itaque. Corporis eaque sit magnam maxime quam.",
        image: "/img/avatar_3.png"
    },
    {
        heading: "How can I install this app?",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat nisi, qui ipsa magni itaque. Corporis eaque sit magnam maxime quam.",
        image: "/img/avatar_4.png"
    }
]

class faq extends Component {
    state = {
        data: []
    }
    componentDidMount(){
        this.setState({
            data: faqData
        })
    }
    render() {
        return (
            <div>
                <ScrollupSection />
                <div className="all-area">
                    <Header imageData={"/img/logo.png"} />
                    <BreadcrumbSection heading={"Frequently Asked Questions"} home={"Home"} title={"FAQ"} />
                    <section className="section faq-area bg-gray ptb_100">
                        <div className="container">
                            <div className="row">
                                {this.state.data.map((item, idx) => {
                                    return(
                                        <div key={`fdt_${idx}`} className="col-12 col-md-6 col-lg-4">
                                            {/* Single Faq */}
                                            <div className="single-faq bg-white px-4 py-3">
                                                <div className="media">
                                                    <img className="rounded-circle avatar-sm" src={item.image} alt="" />
                                                    <div className="media-body align-self-center ml-3">
                                                        <h5>{item.heading}</h5>
                                                    </div>
                                                </div>
                                                <p className="mt-3">{item.content}</p>
                                            </div>
                                        </div>
                                    );
                                })}
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

export default faq;