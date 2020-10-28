import React from "react"
import { graphql, Link } from "gatsby"
import _ from 'lodash';

import Layout from "../components/layout"
import BlogTopImage from "../components/BlogTopImage/BlogTopImage"
import DetailedForm from "../components/DetailedForm/DetailedForm"
import Image from '../components/image';

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `be. Pilates & Yoga`

  const seo = {
    title: post.frontmatter.title,
    description: post.frontmatter.description || post.excerpt,
  }

  console.log(post)

  return (
    <Layout location={location} title={siteTitle} blogSeo={seo} dark>
      <div className="all-area">
        <section id="blog" className="section blog-area ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-12">
                <article
                  className="single-blog-details"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <div className="blog-thumb">
                    <Link to={post?.fields?.slug}>
                      {_.startsWith(post?.frontmatter?.featuredImage, 'http') ? (
                        <BlogTopImage imageUrl={post?.frontmatter?.featuredImage} />
                      ) : (
                        <BlogTopImage
                          fluid={data?.featuredImage?.childImageSharp?.fluid || data?.topImage?.childImageSharp?.fluid}
                        />
                      )}
                    </Link>
                  </div>

                  <div className="blog-content appo-blog">
                    <div className="meta-info d-flex flex-wrap align-items-tencer py-2">
                      <ul>
                        <li className="d-inline-block p-2">
                          {post?.frontmatter?.author?.name}
                        </li>
                        <li className="d-inline-block p-2">
                          {post?.frontmatter?.date}
                        </li>
                      </ul>
                      <div className="blog-share ml-auto d-none d-sm-block">
                        <div className="social-icons d-flex justify-content-center">
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-google"></i>
                            <i className="fab fa-google"></i>
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="blog-details">
                      <h3 className="blog-title py-2 py-sm-3">
                        {post?.frontmatter?.title}
                      </h3>
                      <section
                        dangerouslySetInnerHTML={{ __html: post?.html }}
                        itemProp="articleBody"
                        className="content-container"
                      />
                    </div>
                  </div>
                  <div className="blog-comments">
                    <div className="admin media py-3">
                      <div className="admin-thumb avatar-lg">
                      <Image filename={post?.frontmatter?.author?.image} className="rounded-circle" />
                      </div>

                      <div className="admin-content media-body pl-3 pl-sm-4">
                        <h4 className="admin-name mb-2">
                          {post?.frontmatter?.author?.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>

      <DetailedForm fromUrl={post?.fields?.slug} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $featuredImage: String
  ) {
    site {
      siteMetadata {
        title
        author {
          name
          summary
          profilePhoto
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        description
        featuredImage
        author {
          name
          summary
          image
        }
      }
      fields {
        slug
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    topImage: file(relativePath: { eq: "blog-top.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    featuredImage: file(relativePath: { eq: $featuredImage }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
