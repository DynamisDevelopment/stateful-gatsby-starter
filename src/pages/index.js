import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import '../global.sass'
import { myContext } from '../../provider'

const IndexPage = () => (
  <Layout>
    <myContext.Consumer>
      {context => (
        <React.Fragment>
          <SEO title="Home" />
          <h1>{context.isDark ? "Dark Theme" : "Light Theme"}</h1>
          <button onClick={() => context.changeTheme()}>{context.isDark ? "Light" : "Dark"}</button>
          <Link to="/page-2/">Go to page 2</Link>
        </React.Fragment>
      )}
    </myContext.Consumer>
  </Layout>
)

export default IndexPage
