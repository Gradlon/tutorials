//import React from "react"
//import Layout from "../components/layout"
//
//export default () => (
//    <Layout>
//        <h1>Amazing Pandas Eating Things</h1>
//        <div>
//            <img
//                src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
//                alt="Group of pandas eating bamboo"
//            />
//        </div>
//    </Layout>
//)

import React from "react"
import { css } from "react-emotion"
import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { Badge, Container } from "mdbreact"

//import 'font-awesome/css/font-awesome.min.css';
//import 'bootstrap-css-only/css/bootstrap.min.css';
//import 'mdbreact/dist/css/mdb.css';

export default ({ data }) => {
    return (
        <Layout>
            <div>
                <h1
                    className={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
                >
                    Amazing Pandas Eating Things
        </h1>
                <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id}>
                        <Link
                            to={node.fields.slug}
                            className={css`
                text-decoration: none;
                color: inherit;
              `
                            }
                        >

                            <h3
                                className={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
                            >
                                {node.frontmatter.title}{" "}
                                <span
                                    className={css`
                    color: #bbb;
                  `}
                                >
                                    — {node.frontmatter.date}
                                </span>
                                <span> - {node.wordCount.words}</span>
                            </h3>
                            <p>{node.excerpt}</p>
                            <p>{node.fields.slug}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          wordCount {
              words
          }
          fields{
            slug
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`