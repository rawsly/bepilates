import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import _ from "lodash"
import PropTypes from 'prop-types';

import { HEADER_MENU } from "../../constants"
import Container from "../Container/Container"

const Header = ({ dark }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo_white.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Logo = () => (
    <Link className="navbar-brand" to="/">
      {data?.file?.childImageSharp?.fluid ? (
        <Img
          className="logo"
          fluid={data.file.childImageSharp.fluid}
          alt="Be. Pilates"
        />
      ) : (
        <p>Be. Pilates &amp; Yoga</p>
      )}
    </Link>
  )

  const HamburgerMenu = () => (
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#appo-menu"
    >
      <span className="navbar-toggler-icon" />
    </button>
  )

  console.log(dark);

  return (
    <header className="section header-area">
      <div id="appo-header" className={`main-header-area nav-${dark ? 'dark' : 'white'}`}>
        <Container>
          <nav className="navbar navbar-expand-md navbar-light">
            {/* Logo */}
            <Logo />
            <HamburgerMenu />
            {/* Appo Menu */}
            <div className="collapse navbar-collapse" id="appo-menu">
              {/* Header Items */}
              <ul className="navbar-nav header-items ml-auto">
                {_.map(HEADER_MENU, menuItem => {
                  const hasSubItems = !_.isEmpty(menuItem.subItems)
                  return (
                    <li
                      key={menuItem.key}
                      className={`nav-item ${
                        hasSubItems ? "active dropdown" : ""
                      }`}
                    >
                      <Link
                        id={hasSubItems ? "navbarDropdown" : ""}
                        data-toggle={hasSubItems ? "dropdown" : ""}
                        className={`nav-link ${
                          hasSubItems ? "dropdown-toggle" : ""
                        }`}
                        to={hasSubItems ? "#" : menuItem.link}
                      >
                        {menuItem.text}
                      </Link>
                      {hasSubItems && (
                        <div className="dropdown-menu mega-menu px-3 px-md-4 py-md-4">
                          <div className="shapes-container d-none d-lg-block">
                            <div className="shape-1" />
                          </div>
                          <div className="row">
                            {menuItem.content && (
                              <div className="col-lg-3 dropdown-headings d-none d-lg-block">
                                <span className="fw-6">
                                  {menuItem.content.header}
                                </span>
                                <p className="slag fw-5">
                                  {menuItem.content.subHeader}
                                </p>
                                <div className="dropdown-btn mt-3">
                                  <Link
                                    to={menuItem.content.action.link}
                                    className="btn btn-bordered"
                                  >
                                    {menuItem.content.action.text}
                                  </Link>
                                </div>
                              </div>
                            )}

                            {_.map(menuItem.subItems, subItemList => (
                              <div
                                key={_.uniqueId("subItem_")}
                                className={`col-12 col-md-${
                                  12 / (menuItem.subItems.length + 1)
                                }`}
                              >
                                <ul className="single-menu">
                                  {_.map(subItemList, subItem => (
                                    <li key={_.uniqueId("subItemList_")}>
                                      <Link
                                        className="dropdown-item"
                                        to={subItem.link}
                                      >
                                        {subItem.text}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </li>
                  )
                })}
                <li className="nav-item">
                  <Link to="#" className="btn btn-bordered-white btn-sm mg-l-10">
                    <span>Dersleri İncele</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  )
}

Header.propTypes = {
  dark: PropTypes.bool,
}

Header.defaultProps = {
  dark: false,
}

export default Header
