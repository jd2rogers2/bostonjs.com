import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import { eventsInitialVal, useEvents } from '../hooks';
// const { events, handleEventsChange } = useEvents(eventsInitialVal);

// const MEETUP_BASE_URL = "https://api.meetup.com/boston_JS/events";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: [],
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Boston JS" />
        <h1>Upcoming Meetups!</h1>
        {this.state.events.length ? (
          <p>yay</p>
        ) : (
          <p>no events to show</p>
        )}

      </Layout>
    );
  }
}


export default IndexPage
