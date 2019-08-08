import { Link } from "gatsby"
// import Img from "gatsby-image"
// import PropTypes from "prop-types"
import React from "react"
import "./nav.css"

const Nav = () => {
  return (
      <div id="navWrapper">
        <div id="navComponent">
            <Link className="navLink" to="/">Past Events</Link>
            <Link className="navLink" to="/">Code of Conduct</Link>
            <Link className="navLink" to="/">Slack Community</Link>
            <Link className="navLink" to="/">Meetup.com</Link>
        </div>
    </div>
  );
}

// Nav.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Nav.defaultProps = {
//   siteTitle: ``,
// }

export default Nav
