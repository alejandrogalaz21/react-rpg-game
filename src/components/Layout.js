import React, { Fragment } from 'react'
import Navbar from './Navigation'
import Footer from './Footer'

const Layout = ({ children }) => {
  const html = document.getElementsByTagName('html')[0]
  const body = document.body
  const main = document.getElementById('root')
  html.classList.add('h-100')
  body.classList.add('h-100')
  main.classList.add('d-flex')
  main.classList.add('flex-column')
  main.classList.add('h-100')

  return (
    <Fragment>
      <header>
        <h1>Raact SetUp</h1>
      </header>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  )
}

export default Layout
