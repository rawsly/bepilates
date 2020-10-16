import React, { useState, useEffect } from "react"
import _ from 'lodash';

import ScrollupSection from "../components/scrollupSection/scrollUp"
import Header from "../components/Header/Header"
import BreadcrumbSection from "../components/breadcrumbSection/breadcrumbTwo"
import Footer from "../components/Footer/Footer"

import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogPage = () => {
  const BASE_URL = "https://bepilatesyoga.com/wp-json/wp/v2/posts"
  const [posts, setPosts] = useState()

  const fetchBlogPosts = () => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPosts(data)
      })
  }

  useEffect(() => {
    fetchBlogPosts()
  }, [])

  const blogData = [
    {
      id: "post_1",
      image: "https://appo-react.theme-land.com/img/blog_1.jpg",
      imageAlt: "test",
      author: "be. Pilates & Yoga",
      date: '12 Ara 2020',
      title: "Blog Title Here",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione obcaecati, animi vitae recusandae, praesentium quae.",
      btnText: "Devamını Oku",
    },
    {
      id: "post_2",
      image: "https://appo-react.theme-land.com/img/blog_1.jpg",
      imageAlt: "test",
      author: "be. Pilates & Yoga",
      date: '12 Ara 2020',
      title: "Blog Title Here",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione obcaecati, animi vitae recusandae, praesentium quae.",
      btnText: "Devamını Oku",
    },
    {
      id: "post_3",
      image: "https://appo-react.theme-land.com/img/blog_1.jpg",
      imageAlt: "test",
      author: "be. Pilates & Yoga",
      date: '12 Ara 2020',
      title: "Blog Title Here",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione obcaecati, animi vitae recusandae, praesentium quae.",
      btnText: "Devamını Oku",
    },
    {
      id: "post_4",
      image: "https://appo-react.theme-land.com/img/blog_1.jpg",
      imageAlt: "test",
      author: "be. Pilates & Yoga",
      date: '12 Ara 2020',
      title: "Blog Title Here",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione obcaecati, animi vitae recusandae, praesentium quae.",
      btnText: "Devamını Oku",
    },
  ]

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog">
        <ScrollupSection />
        <div className="all-area">
          <Header />
          <BreadcrumbSection
            heading={"Blog"}
            home={"Anasayfa"}
            page={"Blog"}
            title={"Blog"}
          />
          <section id="blog" className="section blog-area ptb_100">
            <div className="container">
              <div className="row">
                {_.map(blogData, (item, index) => (
                  <div key={item.id} className="col-12 col-md-6">
                    {/* Single Blog */}
                    <div className="single-blog res-margin">
                      {/* Blog Thumb */}
                      <div className="blog-thumb">
                        <a href="#">
                          <img src={item.image} alt={item.imageAlt} />
                        </a>
                      </div>
                      {/* Blog Content */}
                      <div className="blog-content p-4">
                        {/* Meta Info */}
                        <ul className="meta-info d-flex justify-content-between">
                          <li>
                            By <a href="#">{item.author}</a>
                          </li>
                          <li>
                            <a href="#">{item.date}</a>
                          </li>
                        </ul>
                        {/* Blog Title */}
                        <h3 className="blog-title my-3">
                          <a href="#">{item.title}</a>
                        </h3>
                        <p>{item.content}</p>
                        <a href="#" className="blog-btn mt-3">
                          {item.btnText}
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
