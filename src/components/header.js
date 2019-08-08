import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Nav from "./nav"

const Header = ({ siteTitle }) => {
  const {city} = useStaticQuery(graphql`
    query {
      city: file(relativePath: { eq: "city.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <header
      style={{
        background: 'rgba(249, 219, 91, 1)',
        marginBottom: `1.45rem`,
      }}
    >
      <div
        id="river"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <Img fluid={city.childImageSharp.fluid} />
        </Link>
        <Nav />
      </div>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
