import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Boston JS" />
        <h3>Sponsor Boston JS</h3>
        <p>
          Interested in sponsoring one of our meetups? 
          Sponsorship is $500 and includes time at the beginning of the meetup to get up and tell the group about your product/team/company, as well as the opportunity to give away some swag and two guaranteed RSVPs for the meetup. 
          It also helps us work toward our goal of supporting the growth of technology education in underserved communities. 
          <a href="mailto:bostonjs@bocoup.com">Get in touch with us</a> to get involved!
        </p>
        <h3>What we're about</h3>
        <p>
          A monthly celebration and exploration of the JavaScript programming language. 
          If you are interested in speaking or sponsoring please contact one of the organizers! 
        </p>
        <p>
          Keep in touch with us on twitter @bos_js (<a href="http://twitter.com/bos_js">http://twitter.com/bos_js</a>) and Slack at Boston JavaScript (<a href="https://boston-javascript-slackin.herokuapp.com">https://boston-javascript-slackin.herokuapp.com</a>)
        </p>
        <p>
          We believe that everyone deserves a thoroughly pleasant meetup experience, regardless of who they are. Therefore, we adhere to the Code of Conduct (<a href="http://bocoup.com/community/conduct/">http://bocoup.com/community/conduct/</a>) and expect that all of our speakers, attendees, and volunteers will do the same. Please take the time to read it before attending your first meetup!
        </p>
        <p>
          Additionally, please refrain from posting job listings or unsolicited proprietary resources. Any posts or communication that violate this will be flagged as inappropriate and deleted. Now we have a dedicated slack channel called #jobs.
        </p>
      </Layout>
    );
  }
}

export default IndexPage
