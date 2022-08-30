import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout({ children,searchResultHandler }) {
  return (
    <BrowserRouter>
      <Header searchResultHandler={searchResultHandler} />
      {children}
      <Footer />
    </BrowserRouter>
  )
}

export default Layout
