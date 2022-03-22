import React from 'react'
import { Helmet } from "react-helmet";

function Dashboard() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Post Dashboard</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>Dashboard</div>
    </React.Fragment>
  )
}

export default Dashboard