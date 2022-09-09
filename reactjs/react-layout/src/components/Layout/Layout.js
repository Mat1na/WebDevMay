import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header'

function Layout({ children,searchResultHandler,inputHandler }) {
  return (
    <BrowserRouter>
      <Header searchResultHandler={searchResultHandler} inputHandler={inputHandler} />
      {children}
      
    </BrowserRouter>
  )
}

export default Layout
