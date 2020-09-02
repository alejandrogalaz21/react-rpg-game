import React, { Fragment } from 'react'
import Navbar from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <Fragment>
      <header>
        <h1>Raact SetUp</h1>
      </header>
      <Navbar />
      <section>{children}</section>
      <Footer />
    </Fragment>
  )
}

export default Layout
