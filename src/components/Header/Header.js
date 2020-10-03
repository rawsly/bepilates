import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"

import { HEADER_MENU } from "../../constants"
import Container from '../Container/Container';

const Header = () => {
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
    <a className="navbar-brand" href="/">
      {data?.file?.childImageSharp?.fluid ? (
        <Img
          className="logo"
          fluid={data.file.childImageSharp.fluid}
          alt="Be. Pilates"
        />
      ) : (
        <p>Be. Pilates &amp; Yoga</p>
      )}
    </a>
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

  return (
    <header className="section header-area">
      <div id="appo-header" className="main-header-area nav-white">
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
                      className={`nav-item ${
                        hasSubItems ? "active dropdown" : ""
                      }`}
                    >
                      <a
                        id={hasSubItems ? "navbarDropdown" : ""}
                        role={hasSubItems ? "button" : ""}
                        data-toggle={hasSubItems ? "dropdown" : ""}
                        className={`nav-link ${
                          hasSubItems ? "dropdown-toggle" : "scroll"
                        }`}
                        href={hasSubItems ? "#" : menuItem.link}
                      >
                        {menuItem.text}
                      </a>
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
                                  <a
                                    href={menuItem.content.action.link}
                                    className="btn btn-bordered"
                                  >
                                    {menuItem.content.action.text}
                                  </a>
                                </div>
                              </div>
                            )}

                            {_.map(menuItem.subItems, subItemList => (
                              <div
                                className={`col-12 col-md-${
                                  12 / (menuItem.subItems.length + 1)
                                }`}
                              >
                                <ul className="single-menu">
                                  {_.map(subItemList, subItem => (
                                    <li>
                                      <a
                                        className="dropdown-item"
                                        href={subItem.link}
                                      >
                                        {subItem.text}
                                      </a>
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
                    <li
                        className="nav-item"
                    >
                        <a href="#" class="btn btn-bordered-white btn-sm mg-l-10"><span>Dersleri İncele</span></a>
                    </li>
              </ul>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  )
}

export default Header
