import React, { useState, useEffect } from "react"
import _ from 'lodash';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ScrollupSection from "../components/scrollupSection/scrollUp"
import Header from "../components/Header/Header"
import BreadcrumbSection from "../components/breadcrumbSection/breadcrumbTwo"
import Footer from "../components/Footer/Footer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { POSTS_PER_PAGE } from "../constants";

const BlogPage = () => {
  // const BASE_URL = "https://bepilatesyoga.com/wp-json/wp/v2/posts"
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1);
  const BASE_URL = `/posts.json?page=${page}&per_page=${POSTS_PER_PAGE}&order=desc`;

  const images = useStaticQuery(graphql`
    query {
      defaultImage: file(relativePath: { eq: "blog-default-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      topImage: file(relativePath: { eq: "blog-top.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const fetchBlogPosts = () => {
    // 1. status === publish, type === post
    // 2. post içeriği content.rendered
    // 3. excerpt içeriği excerpt.rendered
    // auther: be. Pilates & Yoga
    // categories: [<category_id>]
    // tags: [<tag_id>]
    // related posts: jetpack-related-posts -> [...]
    // _links -> author bilgisi çekilebilir.
    //        -> category ve tag bilgisi çekilebilir. -> wp:term
    // At this step, we only need author information
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        // i have 6 posts now.
        console.log(data)
        setPosts(data)
      })
  }

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const FeaturedImage = () => {
    return (
      <Img fluid={images.topImage.childImageSharp.fluid} />
    )
  }

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog">
        <ScrollupSection />
        <div className="all-area">
          <Header />
          <FeaturedImage />
          <section id="blog" className="section blog-area ptb_100">
            <div className="container">
              <div className="row">
                {_.map(posts, (post, index) => (
                  <div key={post.id} className="col-12 col-md-6">
                    {/* Single Blog */}
                    <div className="single-blog res-margin">
                      {/* Blog Thumb */}
                      <div className="blog-thumb">
                        <a href="#">
                          {post.jetpack_featured_media_url ? (
                            <img src={post.jetpack_featured_media_url} />
                          ) : (
                            <Img fluid={images.defaultImage.childImageSharp.fluid} />
                          )}
                        </a>
                      </div>
                      {/* Blog Content */}
                      <div className="blog-content p-4">
                        {/* Meta Info */}
                        <ul className="meta-info d-flex justify-content-between">
                          <li>
                            By <a href="#">be. Pilates &amp; Yoga</a>
                          </li>
                          <li>
                            <a href="#">{post.date}</a>
                          </li>
                        </ul>
                        {/* Blog Title */}
                        <h3 className="blog-title my-3">
                          <a href="#">{post.title.rendered}</a>
                        </h3>
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        <a href="#" className="blog-btn mt-3">
                          Devamını Oku
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col-12">
                  {/* Pagination */}
                  <ul className="pagination justify-content-center">
                    <li className="disabled px-1">
                      <a href="#" aria-label="Previous">
                        <i className="fas fa-arrow-left" />
                      </a>
                    </li>
                    <li className="px-1">
                      <a href="#">1</a>
                    </li>
                    <li className="active px-1">
                      <a href="#">2</a>
                    </li>
                    <li className="px-1">
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#" aria-label="Next">
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage
