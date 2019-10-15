import { Link } from "gatsby"
import React from "react"
import "./nav.css"

const Nav = () => {
  const slackLink = "https://boston-javascript-slackin.herokuapp.com/";
  return (
      <div id="navWrapper">
        <div id="navComponent">
            <Link className="navLink" to="/">Home</Link>
            <Link className="navLink" to="/CodeOfConduct/">Code of Conduct</Link>
            <a className="navLink" href={slackLink} target="_blank" rel="noopener noreferrer">Slack Community</a>
            <a className="navLink" href='https://www.meetup.com/boston_JS' target="_blank" rel="noopener noreferrer">Meetup.com</a>
        </div>
    </div>
  );
}

export default Nav
