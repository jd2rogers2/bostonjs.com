import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Boston JS" />
        <h1>home page</h1>
      </Layout>
    );
  }
}

export default IndexPage
