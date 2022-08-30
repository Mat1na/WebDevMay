import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

function Layout({ children,searchResultHandler,inputHandler }) {
  return (
    <BrowserRouter>
      <Header searchResultHandler={searchResultHandler} inputHandler={inputHandler} />
      {children}
      <Footer />
    </BrowserRouter>
  )
}

export default Layout
