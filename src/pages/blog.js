import React, { useState, useEffect } from "react"
import _ from "lodash"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import ScrollupSection from "../components/scrollupSection/scrollUp"
import Header from "../components/Header/Header"
import BlogTopImage from "../components/BlogTopImage/BlogTopImage"
import Footer from "../components/Footer/Footer"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import { POSTS_PER_PAGE } from "../constants"

const BlogPage = ({ data }) => {
  // const BASE_URL = "https://bepilatesyoga.com/wp-json/wp/v2/posts"
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const BASE_URL = `/posts.json?page=${page}&per_page=${POSTS_PER_PAGE}&order=desc`

  useEffect(() => {
    setPosts(data.allMarkdownRemark.nodes)
  }, [])

  const { defaultImage, topImage } = data

  // const fetchBlogPosts = () => {
  //   // 1. status === publish, type === post
  //   // 2. post içeriği content.rendered
  //   // 3. excerpt içeriği excerpt.rendered
  //   // auther: be. Pilates & Yoga
  //   // categories: [<category_id>]
  //   // tags: [<tag_id>]
  //   // related posts: jetpack-related-posts -> [...]
  //   // _links -> author bilgisi çekilebilir.
  //   //        -> category ve tag bilgisi çekilebilir. -> wp:term
  //   // At this step, we only need author information
  //   fetch(BASE_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       // i have 6 posts now.
  //       console.log(data)
  //       setPosts(data)
  //     })
  // }

  // useEffect(() => {
  //   fetchBlogPosts()
  // }, [])

  function saveAsFile(data, filename, type) {
    var file = new Blob([data], { type })
    if (window.navigator.msSaveOrOpenBlob)
      // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename)
    else {
      // Others
      var a = document.createElement("a"),
        url = URL.createObjectURL(file)
      a.href = url
      a.download = filename
      document.body.appendChild(a)
      a.click()
      setTimeout(function () {
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
      }, 0)
    }
  }

  //   useEffect(() => {
  //     if (!_.isEmpty(posts)) {
  //       const postDetails = _.map(posts, post => {
  //         const author = {
  //           name: "be. Pilates & Yoga",
  //           content: "",
  //           image: "logo_white.png",
  //         }
  //         const title = post?.title?.rendered
  //         const featuredImage = post?.jetpack_featured_media_url
  //         const date = post?.date
  //         const excerpt = post?.excerpt?.rendered
  //         const content = post?.content?.rendered
  //         const slug = post?.slug

  //         const markdownContent = `
  // ---
  // title: ${title}
  // date: "${date}"
  // description: "${excerpt}"
  // featuredImage: "${featuredImage}"
  // author: {
  //   name: "${author.name}",
  //   summary: "${author.content}",
  //   image: ${author.image}"
  // }
  // ---
  // ${content}`;

  //         saveAsFile(markdownContent, `${slug}.md`, 'text/plain')
  //       })
  //     }
  //   }, [posts])

  const renderFeaturedImage = ({ post }) => {
    if (_.startsWith(post?.frontmatter?.featuredImage, "http")) {
      return <img src={post?.frontmatter?.featuredImage} />
    }

    if (post?.frontmatter?.featuredImage) {
      return <Image filename={post?.frontmatter?.featuredImage} />
    }

    return <Img fluid={defaultImage?.childImageSharp?.fluid} />
  }

  console.log(posts, data);

  return (
    <Layout>
      <SEO title="Blog" />
      <div className="blog">
        <ScrollupSection />
        <div className="all-area">
          <Header />
          <h1 className="blog-top-title">Blog</h1>
          <BlogTopImage fluid={topImage?.childImageSharp?.fluid} />
          <section id="blog" className="section blog-area ptb_100">
            <div className="container">
              <div className="row">
                {_.map(posts, (post, index) => (
                  <div key={post.id} className="col-12 col-md-6">
                    {/* Single Blog */}
                    <div className="single-blog res-margin">
                      {/* Blog Thumb */}
                      <div className="blog-thumb">
                        <Link to={post?.fields?.slug}>
                          {renderFeaturedImage({ post })}
                        </Link>
                      </div>
                      {/* Blog Content */}
                      <div className="blog-content p-4">
                        {/* Meta Info */}
                        <ul className="meta-info d-flex justify-content-between">
                          <li>By {post?.frontmatter?.author?.name}</li>
                          <li>{post?.frontmatter?.date}</li>
                        </ul>
                        {/* Blog Title */}
                        <h3 className="blog-title my-3">
                          <Link to={post?.fields?.slug}>
                            {post?.frontmatter?.title}
                          </Link>
                        </h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post?.frontmatter?.description || post?.excerpt,
                          }}
                        />
                        <Link
                          to={post?.fields?.slug}
                          className="blog-btn mt-3"
                          itemProp="url"
                        >
                          Devamını Oku
                        </Link>
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

export const pageQuery = graphql`
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          title
          description
          author {
            name
          }
          featuredImage
        }
      }
    }
  }
`
