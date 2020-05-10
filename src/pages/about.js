import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

const AboutPage = ({ data, location }) => {
  const {title, author, social} = data.site.siteMetadata

  return (
    <Layout location={location} title={title}>
      <SEO title="About me" />
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginBottom: `1.5rem`,
          minWidth: 200,
          borderRadius: `100%`
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>Hi there, and welcome to my personal site!</p>
      <p>
        My name is Luis Barrios, and I'm a Software Engineer from Madrid, Spain 
        <span role="img" aria-label="Spanish flag"> 🇪🇸</span>. For the
        last three years I've been based in Dublin, Ireland 
        <span role="img" aria-label="Irish flag"> 🇮🇪</span>.
      </p>
      <p>
        At work, I love helping my team ship new products. I can deal with
        codebases of all shapes and sizes and I particularly enjoy taking full ownership
        of my projects, from the early design phases to the final production rollouts.
      </p>
      <p>
        On my spare time, you will find me cycling and hiking in all the great spots Ireland
        has to offer. I also like learning how things work and tinkering with old hardware.
      </p>
      <p>
        Feel free to drop me an email at <code>luis</code> at <code>lbarrios</code> dot <code>es</code> {' '}
        or to <a href={`https://www.linkedin.com/in/${social.linkedin}`} target="_blank" rel="noopener noreferrer">contact me on LinkedIn</a>.
      </p>
      <h3>Disclaimer</h3>
      <p>
        This is my personal site. Any views or opinions appearing on it are my own and do not
        represent those of people, institutions or organizations that I may or may not be associated with.
      </p>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
          <Link to={'/'} rel="prev">
                ← {'Back to home page'}
              </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
        social {
          linkedin
        }
      }
    }
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
