import React from 'react'
import { Helmet } from "react-helmet";

function Login() {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Post Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>Login</div>
    </React.Fragment>
  )
}

export default Login