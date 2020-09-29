import React, { Component } from 'react';
import ScrollupSection from '../../scrollupSection/scrollUp';
import Header from '../../headerSection/headerOne';
import BreadcrumbSection from '../../breadcrumbSection/breadcrumbOne';
import ContactSection from '../../contactSection/contact';
import Map from '../map/map';
import FooterSection from '../../footerSection/footer';

class contact extends Component {
    render() {
        return (
            <div>
                <ScrollupSection />
                <div className="all-area">
                    <Header imageData={"/img/logo.png"} />
                    <BreadcrumbSection heading={"Contact Us"} home={"Home"} title={"Contact"} />
                    <ContactSection />
                    <Map />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default contact;