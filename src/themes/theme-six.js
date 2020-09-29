import React, { Component } from 'react';

import ScrollupSection from '../components/scrollupSection/scrollUp';
import Header from '../components/headerSection/headerTwo';
import WelcomeSection from '../components/welcomeSection/welcomeSix';
import PromoSection from '../components/promoSection/promoThree';
import AboutSection from '../components/aboutSection/aboutTwo';
import WorkSection from '../components/workSection/workTwo';
import FeatureSection from '../components/featureSection/featureTwo';
import ScreenshotSection from '../components/screenshotSection/screenshot';
import PricingSection from '../components/pricingSection/pricingTwo';
import ReviewSection from '../components/reviewSection/reviewTwo';
import TeamSection from '../components/teamSection/teamTwo';
import SubscribeSection from '../components/subscribeSection/subscribeTwo';
import DownloadSection from '../components/downloadSection/downloadTwo';
import BlogSection from '../components/blogSection/blogTwo';
import ContactSection from '../components/contactSection/contact';
import FooterSection from '../components/footerSection/footer';

class ThemeSix extends Component {
    render() {
        return (
            <div className="london bg-dark">
                <ScrollupSection />
                <div className="all-area">
                    <Header imageData={"/img/logo-white.png"} />
                    <WelcomeSection />
                    <PromoSection />
                    <AboutSection />
                    <WorkSection />
                    <FeatureSection />
                    <ScreenshotSection />
                    <PricingSection />
                    <ReviewSection />
                    <TeamSection />
                    <SubscribeSection />
                    <DownloadSection />
                    <BlogSection />
                    <ContactSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default ThemeSix;