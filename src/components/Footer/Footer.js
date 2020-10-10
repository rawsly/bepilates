import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"

const Footer = () => {
  const logo = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 128, height: 128) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const socialMediaData = [
    {
      key: 'facebook',
      icon: 'facebook',
      url: '#',
    },
    {
      key: 'instagram',
      icon: 'instagram',
      url: '#'
    },
    {
      key: 'twitter',
      icon: 'twitter',
      url: '#'
    }
  ]

  const aboutUsData = [
    {
      key: 'home',
      text: 'Anasayfa',
      link: '#'
    },
    {
      key: 'privacy',
      text: 'Gizlilik',
      link: '#'
    },
    {
      key: 'agreement',
      text: 'Mesafeli Satış Sözleşmesi',
      link: '#'
    },
    {
      key: 'opportunities',
      text: 'Fırsatlar',
      link: '#'
    }
  ]

  const detailsItemsData = [
    {
      key: 'name',
      text: 'Fit Sportif İşletmeleri ve Perakende Mağazacılık A.Ş.'
    },
    {
      key: 'mersis',
      text: 'Mersis No: 5153754278618844'
    },
    {
      key: 'address',
      text: 'Bahçeşehir 2. Ks. Avni Akyol Bulvarı Loca B 22 Başakşehir/İstanbul'
    }
  ]

  const [aboutUsItems, setAboutUsItems] = useState([]);
  const [detailsItems, setDetailsItems] = useState([]);
  const [latestTweets, setLatestTweets] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [footerLogo, setFooterLogo] = useState(null);
  const copyrightText = `${new Date().getFullYear()} - be. Pilates & Yoga`;

  useEffect(() => {
    setFooterLogo(logo?.image?.childImageSharp?.fixed);
    setSocialMedia(socialMediaData);
    setAboutUsItems(aboutUsData);
    setDetailsItems(detailsItemsData);
  }, []);

  return (
    <footer className="section footer-area footer-bg">
        {/* Footer Top */}
        <div className="footer-top ptb_100">
            <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                {/* Footer Items */}
                <div className="footer-items">
                    {/* Logo */}
                    <a className="navbar-brand" href="#">
                      <Img fixed={footerLogo} className="logo" />
                    </a>
                    {/* Social Icons */}
                    <div className="social-media-icons d-flex">
                        {_.map(socialMedia, item => {
                            return(
                                <a key={item.key} className={item.key} href="#">
                                    <i className={`icofont icofont-${item.icon}`} />
                                </a>
                            );
                        })}
                    </div>
                </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                {/* Footer Items */}
                <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title text-white mb-2">Son Tweetler</h3>
                    <ul>
                        {/* {this.state.footerList_1.map((item, idx) => {
                            return(
                                <li key={`flo_${idx}`} className="py-2"><a className="text-white-50" href="#">{item.text}</a></li>
                            );
                        })} */}
                    </ul>
                </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                {/* Footer Items */}
                <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title text-white mb-2">Hakkımızda</h3>
                    <ul>
                        {_.map(aboutUsItems, item => {
                            return(
                                <li key={item.key} className="py-2"><a className="text-white-50" href={item.url}>{item.text}</a></li>
                            );
                        })}
                    </ul>
                </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                {/* Footer Items */}
                <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title text-white mb-2">Künye</h3>
                    <ul>
                        {_.map(detailsItems, item => {
                            return(
                                <li key={item.key} className="py-2">{item.text}</li>
                            );
                        })}
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
            <div className="container">
            <div className="row">
                <div className="col-12">
                {/* Copyright Area */}
                <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                    {/* Copyright Left */}
                    <div className="copyright-left text-white-50">&copy; {copyrightText}</div>
                    {/* Copyright Right */}
                    <div className="copyright-right text-white-50">Designed with <i className="icofont-heart-alt" /> by <a className="text-white-50" href="http://rawsly.com">rawsly</a></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </footer>
);
};

export default Footer;