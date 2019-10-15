import { Link } from "gatsby"
// import Img from "gatsby-image"
// import PropTypes from "prop-types"
import React from "react"
import "./nav.css"

// slack linki found via google
// https://boston-javascript-slackin.herokuapp.com/

// slack link from old page that other said didn't work (works ok for james)
// https://bostonjavascript.slack.com/join/shared_invite/enQtMjQyNzkwNDM4OTYyLTU3MTExMzI0YTYwZWU3M2UyMWJjNGMxZGEwOTVlYWNhODM1NWE4MGY3MDkxMGE1YzIwMDc1NTFmMzJlMTEzNDI

//            <Link className="navLink" to="/MeetUp/">Meetup.com</Link>

const Nav = () => {
  const slackLink = "https://bostonjavascript.slack.com/join/shared_invite/enQtMjQyNzkwNDM4OTYyLTU3MTExMzI0YTYwZWU3M2UyMWJjNGMxZGEwOTVlYWNhODM1NWE4MGY3MDkxMGE1YzIwMDc1NTFmMzJlMTEzNDI";
  return (
      <div id="navWrapper">
        <div id="navComponent">
            <Link className="navLink" to="/">Past Events</Link>
            <Link className="navLink" to="/CodeOfConduct/">Code of Conduct</Link>
            <a className="navLink" href={slackLink} target="_blank" rel="noopener noreferrer">Slack Community</a>
            <a className="navLink" href='https://www.meetup.com/boston_JS' target="_blank" rel="noopener noreferrer">Meetup.com</a>
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
