import { Link } from "gatsby"
// import Img from "gatsby-image"
// import PropTypes from "prop-types"
import React from "react"
import "./nav.css"

// slack linki found via google
// https://boston-javascript-slackin.herokuapp.com/

// slack link from old page that other said didn't work (works ok for james)
// https://bostonjavascript.slack.com/join/shared_invite/enQtMjQyNzkwNDM4OTYyLTU3MTExMzI0YTYwZWU3M2UyMWJjNGMxZGEwOTVlYWNhODM1NWE4MGY3MDkxMGE1YzIwMDc1NTFmMzJlMTEzNDI

const Nav = () => {
  const slackLink = "https://bostonjavascript.slack.com/join/shared_invite/enQtMjQyNzkwNDM4OTYyLTU3MTExMzI0YTYwZWU3M2UyMWJjNGMxZGEwOTVlYWNhODM1NWE4MGY3MDkxMGE1YzIwMDc1NTFmMzJlMTEzNDI";
  return (
      <div id="navWrapper">
        <div id="navComponent">
            <Link className="navLink" to="/">Past Events</Link>
            <Link className="navLink" to="/CodeOfConduct/">Code of Conduct</Link>
            <a className="navLink" href={slackLink} target="_blank">Slack Community</a>
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
